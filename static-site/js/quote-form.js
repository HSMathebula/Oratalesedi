// Quote Form Multi-Step Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quoteForm');
    const steps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    const confirmSection = document.getElementById('confirmSection');
    const confirmedSection = document.getElementById('confirmedSection');
    const formStatus = document.getElementById('formStatus');
    
    let currentStep = 1;
    const totalSteps = 3;
    let isConfirmed = false;
    
    // Service type labels
    const serviceTypeLabels = {
        'mining': 'Mining Services',
        'construction': 'Construction',
        'renewable': 'Renewable Energy',
        'staffing': 'Staffing Solutions',
        'transport': 'Transport & Logistics',
        'multiple': 'Multiple Services'
    };
    
    // Scope labels
    const scopeLabels = {
        'small': 'Small Project (Under R1M)',
        'medium': 'Medium Project (R1M - R10M)',
        'large': 'Large Project (R10M - R50M)',
        'enterprise': 'Enterprise Project (Over R50M)'
    };
    
    // Timeline labels
    const timelineLabels = {
        'immediate': 'Immediate (Within 1 month)',
        'short': 'Short-term (1-3 months)',
        'medium': 'Medium-term (3-6 months)',
        'long': 'Long-term (6+ months)',
        'ongoing': 'Ongoing / Continuous'
    };
    
    // Budget labels
    const budgetLabels = {
        'under500k': 'Under R500,000',
        '500k-1m': 'R500,000 - R1M',
        '1m-5m': 'R1M - R5M',
        '5m-10m': 'R5M - R10M',
        '10m-50m': 'R10M - R50M',
        'over50m': 'Over R50M'
    };
    
    // Update step display
    function updateStepDisplay() {
        steps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        progressSteps.forEach((step, index) => {
            if (index + 1 < currentStep) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (index + 1 === currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
        
        // Update button visibility
        prevBtn.disabled = currentStep === 1;
        
        if (currentStep === totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }
    
    // Validate current step
    function validateStep(step) {
        const currentStepEl = document.querySelector(`.form-step[data-step="${step}"]`);
        const requiredFields = currentStepEl.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (field.type === 'radio') {
                const radioGroup = currentStepEl.querySelectorAll(`input[name="${field.name}"]`);
                const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                if (!isChecked) {
                    isValid = false;
                }
            } else if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        return isValid;
    }
    
    // Update review section
    function updateReview() {
        // Project type
        const projectType = document.querySelector('input[name="projectType"]:checked');
        document.getElementById('reviewProjectType').textContent = 
            projectType ? serviceTypeLabels[projectType.value] || projectType.value : 'Not selected';
        
        // Scope
        const scope = document.getElementById('projectScope').value;
        document.getElementById('reviewScope').textContent = 
            scopeLabels[scope] || scope || 'Not specified';
        
        // Timeline
        const timeline = document.getElementById('timeline').value;
        document.getElementById('reviewTimeline').textContent = 
            timelineLabels[timeline] || timeline || 'Not specified';
        
        // Budget
        const budget = document.getElementById('budget').value;
        document.getElementById('reviewBudget').textContent = 
            budgetLabels[budget] || budget || 'Not specified';
        
        // Company
        document.getElementById('reviewCompany').textContent = 
            document.getElementById('company').value || 'Not provided';
        
        // Contact
        document.getElementById('reviewContact').textContent = 
            document.getElementById('contactPerson').value || 'Not provided';
        
        // Email
        document.getElementById('reviewEmail').textContent = 
            document.getElementById('email').value || 'Not provided';
        
        // Phone
        document.getElementById('reviewPhone').textContent = 
            document.getElementById('phone').value || 'Not provided';
        
        // Location
        document.getElementById('reviewLocation').textContent = 
            document.getElementById('location').value || 'Not specified';
        
        // Description
        document.getElementById('reviewDescription').textContent = 
            document.getElementById('description').value || 'Not provided';
    }
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps) {
                currentStep++;
                updateStepDisplay();
                
                // Update review when moving to step 3
                if (currentStep === 3) {
                    updateReview();
                }
                
                // Scroll to top of form
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            formStatus.className = 'form-status error';
            formStatus.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>Please fill in all required fields.';
            
            setTimeout(() => {
                formStatus.className = 'form-status';
                formStatus.innerHTML = '';
            }, 3000);
        }
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentStep > 1) {
            currentStep--;
            updateStepDisplay();
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    // Confirm button click
    confirmBtn.addEventListener('click', function() {
        isConfirmed = true;
        confirmSection.style.display = 'none';
        confirmedSection.style.display = 'block';
        submitBtn.disabled = false;
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!isConfirmed) {
            formStatus.className = 'form-status error';
            formStatus.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>Please confirm your submission first.';
            return;
        }
        
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const btnIcon = submitBtn.querySelector('.btn-icon');
        
        // Show loading state
        btnText.style.display = 'none';
        btnIcon.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData(form);
        
        // Submit form
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formStatus.className = 'form-status success';
                formStatus.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' + data.message;
                
                // Reset form
                form.reset();
                currentStep = 1;
                isConfirmed = false;
                confirmSection.style.display = 'block';
                confirmedSection.style.display = 'none';
                updateStepDisplay();
            } else {
                formStatus.className = 'form-status error';
                formStatus.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>' + data.message;
            }
        })
        .catch(error => {
            formStatus.className = 'form-status error';
            formStatus.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>An error occurred. Please try again later.';
        })
        .finally(() => {
            // Reset button state
            btnText.style.display = 'inline';
            btnIcon.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = !isConfirmed;
        });
    });
    
    // Initialize
    updateStepDisplay();
});
