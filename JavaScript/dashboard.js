// Load user info
window.addEventListener('DOMContentLoaded', function() {
    const userEmail = sessionStorage.getItem('userEmail');
    const userRole = sessionStorage.getItem('userRole');
    
    if (!userEmail) {
        window.location.href = 'index.html';
    }
    
    // Update user display
    document.getElementById('userName').textContent = `Welcome, ${userEmail.split('@')[0]}`;
    
    // Load dashboard stats
    loadDashboardStats();
});

function loadDashboardStats() {
    // Simulate loading stats from backend
    // In real application, this would be an API call
    console.log('Loading dashboard statistics...');
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// Chart initialization (if using Chart.js)
const ctx = document.getElementById('statsChart');
if (ctx) {
    // Initialize chart here
}