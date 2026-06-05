<?php
/**
 * Quote Request Form Handler
 * Processes quote form submissions and sends email notifications
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
    'to_email' => 'quotes@oratalesedi.co.za', // Change this to your quotes email
    'cc_email' => 'info@oratalesedi.co.za', // CC to main email
    'from_email' => 'noreply@oratalesedi.co.za',
    'from_name' => 'Oratalesedi Website',
    'subject_prefix' => '[Quote Request]'
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
$projectType = isset($_POST['projectType']) ? sanitize_input($_POST['projectType']) : '';
$projectScope = isset($_POST['projectScope']) ? sanitize_input($_POST['projectScope']) : '';
$timeline = isset($_POST['timeline']) ? sanitize_input($_POST['timeline']) : '';
$budget = isset($_POST['budget']) ? sanitize_input($_POST['budget']) : '';
$description = isset($_POST['description']) ? sanitize_input($_POST['description']) : '';
$company = isset($_POST['company']) ? sanitize_input($_POST['company']) : '';
$contactPerson = isset($_POST['contactPerson']) ? sanitize_input($_POST['contactPerson']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$phone = isset($_POST['phone']) ? sanitize_input($_POST['phone']) : '';
$location = isset($_POST['location']) ? sanitize_input($_POST['location']) : '';
$urgency = isset($_POST['urgency']) ? sanitize_input($_POST['urgency']) : 'standard';

// Validate required fields
$errors = [];

if (empty($projectType)) {
    $errors[] = 'Project type is required';
}

if (empty($projectScope)) {
    $errors[] = 'Project scope is required';
}

if (empty($description)) {
    $errors[] = 'Project description is required';
}

if (empty($company)) {
    $errors[] = 'Company name is required';
}

if (empty($contactPerson)) {
    $errors[] = 'Contact person is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!is_valid_email($email)) {
    $errors[] = 'Invalid email address';
}

if (empty($phone)) {
    $errors[] = 'Phone number is required';
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

// Mapping arrays for display
$projectTypeMap = [
    'mining' => 'Mining Services',
    'construction' => 'Construction',
    'renewable' => 'Renewable Energy',
    'staffing' => 'Staffing Solutions',
    'transport' => 'Transport & Logistics',
    'multiple' => 'Multiple Services'
];

$scopeMap = [
    'small' => 'Small Project (Under R1M)',
    'medium' => 'Medium Project (R1M - R10M)',
    'large' => 'Large Project (R10M - R50M)',
    'enterprise' => 'Enterprise Project (Over R50M)'
];

$timelineMap = [
    'immediate' => 'Immediate (Within 1 month)',
    'short' => 'Short-term (1-3 months)',
    'medium' => 'Medium-term (3-6 months)',
    'long' => 'Long-term (6+ months)',
    'ongoing' => 'Ongoing / Continuous'
];

$budgetMap = [
    'under500k' => 'Under R500,000',
    '500k-1m' => 'R500,000 - R1M',
    '1m-5m' => 'R1M - R5M',
    '5m-10m' => 'R5M - R10M',
    '10m-50m' => 'R10M - R50M',
    'over50m' => 'Over R50M'
];

$urgencyMap = [
    'standard' => 'Standard (24-48 hours)',
    'urgent' => 'Urgent (Within 24 hours)',
    'asap' => 'ASAP (Same day if possible)'
];

// Get display values
$projectTypeDisplay = isset($projectTypeMap[$projectType]) ? $projectTypeMap[$projectType] : $projectType;
$scopeDisplay = isset($scopeMap[$projectScope]) ? $scopeMap[$projectScope] : $projectScope;
$timelineDisplay = isset($timelineMap[$timeline]) ? $timelineMap[$timeline] : ($timeline ?: 'Not specified');
$budgetDisplay = isset($budgetMap[$budget]) ? $budgetMap[$budget] : ($budget ?: 'Not specified');
$urgencyDisplay = isset($urgencyMap[$urgency]) ? $urgencyMap[$urgency] : $urgency;

// Generate quote reference number
$quoteRef = 'ORA-' . date('Ymd') . '-' . strtoupper(substr(md5(uniqid()), 0, 6));

// Prepare email content
$emailSubject = $config['subject_prefix'] . ' ' . $projectTypeDisplay . ' - ' . $company . ' [' . $quoteRef . ']';

$urgencyBadge = '';
if ($urgency === 'urgent') {
    $urgencyBadge = '<span style="background: #f59e0b; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px;">URGENT</span>';
} elseif ($urgency === 'asap') {
    $urgencyBadge = '<span style="background: #ef4444; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px;">ASAP</span>';
}

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 700px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 25px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0 0 10px 0; }
        .ref { background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 20px; display: inline-block; }
        .content { padding: 25px; background: #f8fafc; }
        .section { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .section-title { color: #1e40af; font-size: 18px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb; }
        .field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .field { }
        .label { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; }
        .value { margin-top: 5px; color: #1e293b; }
        .description-box { background: #f1f5f9; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #1e40af; }
        .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
        .action-required { background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .action-required h3 { color: #92400e; margin: 0 0 10px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Quote Request {$urgencyBadge}</h1>
            <div class='ref'>Reference: {$quoteRef}</div>
        </div>
        <div class='content'>
            <div class='action-required'>
                <h3>Action Required</h3>
                <p>Please review this quote request and respond within the requested timeframe: <strong>{$urgencyDisplay}</strong></p>
            </div>
            
            <div class='section'>
                <h2 class='section-title'>Project Information</h2>
                <div class='field-grid'>
                    <div class='field'>
                        <div class='label'>Service Type</div>
                        <div class='value'>{$projectTypeDisplay}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Project Scope</div>
                        <div class='value'>{$scopeDisplay}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Timeline</div>
                        <div class='value'>{$timelineDisplay}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Budget Range</div>
                        <div class='value'>{$budgetDisplay}</div>
                    </div>
                </div>
                <div class='field' style='margin-top: 15px;'>
                    <div class='label'>Project Location</div>
                    <div class='value'>" . ($location ?: 'Not specified') . "</div>
                </div>
                <div class='field' style='margin-top: 15px;'>
                    <div class='label'>Project Description</div>
                    <div class='description-box'>" . nl2br($description) . "</div>
                </div>
            </div>
            
            <div class='section'>
                <h2 class='section-title'>Contact Information</h2>
                <div class='field-grid'>
                    <div class='field'>
                        <div class='label'>Company</div>
                        <div class='value'>{$company}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Contact Person</div>
                        <div class='value'>{$contactPerson}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Email</div>
                        <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
                    </div>
                    <div class='field'>
                        <div class='label'>Phone</div>
                        <div class='value'><a href='tel:{$phone}'>{$phone}</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class='footer'>
            <p>This quote request was submitted from the Oratalesedi website.</p>
            <p>Submitted on: " . date('l, F j, Y \a\t g:i A') . "</p>
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
    'Reply-To: ' . $contactPerson . ' <' . $email . '>',
    'Cc: ' . $config['cc_email'],
    'X-Priority: ' . ($urgency === 'asap' ? '1' : ($urgency === 'urgent' ? '2' : '3')),
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mailSent = mail(
    $config['to_email'],
    $emailSubject,
    $emailBody,
    implode("\r\n", $headers)
);

// Send confirmation email to client
if ($mailSent) {
    $clientSubject = "Thank you for your quote request - " . $quoteRef;
    $clientBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 25px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { padding: 25px; background: #f8fafc; }
            .ref-box { background: #dbeafe; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 20px; }
            .ref-number { font-size: 24px; font-weight: bold; color: #1e40af; }
            .timeline { background: white; padding: 20px; border-radius: 8px; }
            .timeline-item { display: flex; align-items: flex-start; margin-bottom: 15px; }
            .timeline-dot { width: 12px; height: 12px; background: #1e40af; border-radius: 50%; margin-right: 15px; margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Thank You for Your Quote Request!</h1>
            </div>
            <div class='content'>
                <p>Dear {$contactPerson},</p>
                <p>Thank you for reaching out to Oratalesedi Projects. We have received your quote request and our team is already reviewing your requirements.</p>
                
                <div class='ref-box'>
                    <p style='margin: 0; color: #64748b;'>Your Reference Number</p>
                    <div class='ref-number'>{$quoteRef}</div>
                    <p style='margin: 10px 0 0 0; font-size: 12px; color: #64748b;'>Please keep this number for your records</p>
                </div>
                
                <div class='timeline'>
                    <h3 style='margin-top: 0; color: #1e40af;'>What happens next?</h3>
                    <div class='timeline-item'>
                        <div class='timeline-dot'></div>
                        <div>Our team will review your requirements within 2 hours</div>
                    </div>
                    <div class='timeline-item'>
                        <div class='timeline-dot'></div>
                        <div>You'll receive a detailed quote within 24-48 hours</div>
                    </div>
                    <div class='timeline-item'>
                        <div class='timeline-dot'></div>
                        <div>We'll schedule a consultation call to discuss your project</div>
                    </div>
                    <div class='timeline-item'>
                        <div class='timeline-dot'></div>
                        <div>Upon approval, we'll begin project planning immediately</div>
                    </div>
                </div>
                
                <p style='margin-top: 20px;'>If you have any questions or need to provide additional information, please don't hesitate to contact us.</p>
                <p>Best regards,<br><strong>The Oratalesedi Projects Team</strong></p>
            </div>
            <div class='footer'>
                <p>Oratalesedi Projects (Pty) Ltd</p>
                <p>Email: info@oratalesedi.co.za | Phone: +27 XX XXX XXXX</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $clientHeaders = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>'
    ];
    
    mail($email, $clientSubject, $clientBody, implode("\r\n", $clientHeaders));
}

if ($mailSent) {
    // Log successful submission
    $logEntry = date('Y-m-d H:i:s') . " - Quote request [{$quoteRef}] submitted by {$email} for {$projectTypeDisplay}\n";
    @file_put_contents(__DIR__ . '/logs/quotes.log', $logEntry, FILE_APPEND);
    
    echo json_encode([
        'success' => true,
        'message' => "Thank you! Your quote request has been submitted successfully. Your reference number is {$quoteRef}. We will contact you within 24-48 hours.",
        'reference' => $quoteRef
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error submitting your quote request. Please try again or contact us directly at info@oratalesedi.co.za'
    ]);
}
?>
