// Book Management Functions
function openAddBookModal() {
    document.getElementById('modalTitle').textContent = 'Add New Book';
    document.getElementById('bookModal').classList.add('show');
    document.getElementById('bookForm').reset();
}

function closeBookModal() {
    document.getElementById('bookModal').classList.remove('show');
}

function editBook(isbn) {
    document.getElementById('modalTitle').textContent = 'Edit Book';
    document.getElementById('bookModal').classList.add('show');
    
    // Load book data
    console.log('Editing book:', isbn);
    // Populate form with existing data
}

function deleteBook(isbn) {
    if (confirm('Are you sure you want to delete this book?')) {
        console.log('Deleting book:', isbn);
        showToast('Book deleted successfully');
        // Remove book from table
    }
}

// Form submission
document.getElementById('bookForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const bookData = Object.fromEntries(formData);
    
    console.log('Saving book:', bookData);
    
    // Save book (API call in real application)
    closeBookModal();
    showToast('Book saved successfully');
});

// Search functionality
document.getElementById('searchBook')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#booksTableBody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

function exportBooks() {
    console.log('Exporting books data...');
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