// Member Management Functions
function openAddMemberModal() {
    document.getElementById('modalTitle').textContent = 'Add New Member';
    document.getElementById('memberModal').classList.add('show');
    document.getElementById('memberForm').reset();
}

function closeMemberModal() {
    document.getElementById('memberModal').classList.remove('show');
}

function viewMember(memberNo) {
    console.log('Viewing member:', memberNo);
    // Show member details
}

function editMember(memberNo) {
    document.getElementById('modalTitle').textContent = 'Edit Member';
    document.getElementById('memberModal').classList.add('show');
    
    console.log('Editing member:', memberNo);
    // Populate form with existing data
}

function deleteMember(memberNo) {
    if (confirm('Are you sure you want to delete this member?')) {
        console.log('Deleting member:', memberNo);
        showToast('Member deleted successfully');
    }
}

// Form submission
document.getElementById('memberForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const memberData = Object.fromEntries(formData);
    
    console.log('Saving member:', memberData);
    
    closeMemberModal();
    showToast('Member saved successfully');
});

// Search functionality
document.getElementById('searchMember')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#membersTableBody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

function exportMembers() {
    console.log('Exporting members data...');
    showToast('Export started');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type} show`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}