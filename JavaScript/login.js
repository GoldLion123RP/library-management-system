document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    // Simulate authentication
    if (email && password && role) {
        // Store user info in sessionStorage
        sessionStorage.setItem('userEmail', email);
        sessionStorage.setItem('userRole', role);
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Please fill in all fields');
    }
});