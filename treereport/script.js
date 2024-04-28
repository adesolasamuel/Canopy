const form = document.getElementById('tree-report');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission for now
    alert("Thank you! Tree report submitted for review.");
    // In reality, you would send the form data to your backend here
});
