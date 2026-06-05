<?php
/**
 * Contact Form Handler
 * Processes contact form submissions and sends email notifications
 */

// Set headers for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Configuration
$config = [
    'to_email' => 'info@oratalesedi.co.za', // Change this to your email
    'from_email' => 'noreply@oratalesedi.co.za',
    'from_name' => 'Oratalesedi Website',
    'subject_prefix' => '[Oratalesedi Contact]'
];

// Sanitize input function
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Validate email
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Get and sanitize form data
$firstName = isset($_POST['firstName']) ? sanitize_input($_POST['firstName']) : '';
$lastName = isset($_POST['lastName']) ? sanitize_input($_POST['lastName']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$phone = isset($_POST['phone']) ? sanitize_input($_POST['phone']) : '';
$company = isset($_POST['company']) ? sanitize_input($_POST['company']) : '';
$subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : '';
$message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';

// Validate required fields
$errors = [];

if (empty($firstName)) {
    $errors[] = 'First name is required';
}

if (empty($lastName)) {
    $errors[] = 'Last name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!is_valid_email($email)) {
    $errors[] = 'Invalid email address';
}

if (empty($subject)) {
    $errors[] = 'Subject is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// Return errors if validation failed
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(', ', $errors)
    ]);
    exit();
}

// Subject mapping
$subjectMap = [
    'mining' => 'Mining Services Inquiry',
    'construction' => 'Construction Project',
    'renewable' => 'Renewable Energy Solutions',
    'partnership' => 'Partnership Opportunity',
    'careers' => 'Careers',
    'other' => 'Other Inquiry'
];

$subjectText = isset($subjectMap[$subject]) ? $subjectMap[$subject] : $subject;

// Prepare email content
$emailSubject = $config['subject_prefix'] . ' ' . $subjectText;

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f5f5f5; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1e40af; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-radius: 5px; margin-top: 15px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Contact Form Submission</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>{$firstName} {$lastName}</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
            </div>
            <div class='field'>
                <div class='label'>Phone:</div>
                <div class='value'>" . ($phone ? $phone : 'Not provided') . "</div>
            </div>
            <div class='field'>
                <div class='label'>Company:</div>
                <div class='value'>" . ($company ? $company : 'Not provided') . "</div>
            </div>
            <div class='field'>
                <div class='label'>Subject:</div>
                <div class='value'>{$subjectText}</div>
            </div>
            <div class='message-box'>
                <div class='label'>Message:</div>
                <div class='value'>" . nl2br($message) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the Oratalesedi website contact form.</p>
            <p>Submitted on: " . date('Y-m-d H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>',
    'Reply-To: ' . $firstName . ' ' . $lastName . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mailSent = mail(
    $config['to_email'],
    $emailSubject,
    $emailBody,
    implode("\r\n", $headers)
);

if ($mailSent) {
    // Log successful submission (optional)
    $logEntry = date('Y-m-d H:i:s') . " - Contact form submitted by {$email}\n";
    file_put_contents(__DIR__ . '/logs/contact.log', $logEntry, FILE_APPEND);
    
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you within 24-48 hours.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly.'
    ]);
}
?>
