// Loan Management Functions
document.getElementById('issueBookForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const memberSelect = document.getElementById('memberSelect').value;
    const bookSelect = document.getElementById('bookSelect').value;
    const issueDate = document.getElementById('issueDate').value;
    const dueDate = document.getElementById('dueDate').value;
    
    if (memberSelect && bookSelect && issueDate && dueDate) {
        console.log('Issuing book:', {
            member: memberSelect,
            book: bookSelect,
            issueDate: issueDate,
            dueDate: dueDate
        });
        
        showToast('Book issued successfully');
        this.reset();
        
        // Add new loan to table
        updateLoansTable();
    }
});

function returnBook(loanId) {
    if (confirm('Confirm book return?')) {
        console.log('Returning book for loan:', loanId);
        showToast('Book returned successfully', 'success');
        
        // Update loan status
        updateLoanStatus(loanId, 'returned');
    }
}

function extendLoan(loanId) {
    const days = prompt('Extend loan by how many days?', '7');
    if (days && !isNaN(days)) {
        console.log(`Extending loan ${loanId} by ${days} days`);
        showToast(`Loan extended by ${days} days`);
    }
}

function sendReminder(loanId) {
    console.log('Sending reminder for loan:', loanId);
    showToast('Reminder sent successfully');
}

function updateLoansTable() {
    // Refresh loans table
    console.log('Updating loans table...');
}

function updateLoanStatus(loanId, status) {
    // Update loan status in table
    console.log(`Updating loan ${loanId} to status: ${status}`);
}

// Set default dates
window.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const twoWeeksLater = new Date(today.getTime() + (14 * 24 * 60 * 60 * 1000));
    
    const issueDate = document.getElementById('issueDate');
    const dueDate = document.getElementById('dueDate');
    
    if (issueDate) {
        issueDate.valueAsDate = today;
    }
    
    if (dueDate) {
        dueDate.valueAsDate = twoWeeksLater;
    }
});

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type} show`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}