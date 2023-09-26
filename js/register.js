const myForm1 = document.getElementById('myReg')
myForm1.addEventListener('submit', function (e) {
e.preventDefault(); // Prevent the form from submitting via default behavior.

// Check if the checkbox is checked.
var checkbox = document.getElementById('checkbox');
var checkboxChecked = checkbox.checked;
// Check the checkbox by setting its "checked" property to true
checkboxChecked = true;

// Get the selected value from the selector field.
var selector = document.getElementById('selector');
var selectedValue = selector.value;

var selector1 = document.getElementById('selector1');
var selectedValue1 = selector1.value;

const formData = new FormData(this).entries();
// Send an AJAX request to your server.
fetch('https://backend.getlinked.ai/hackathon/registration', {
    method: 'POST',
    headers: {
                'Content-Type': 'application/json'
            },
    body: JSON.stringify(Object.fromEntries(formData)), // Serialize the form data
})
.then(function(response) {
    if (response.status === 201) {
        // Show the success modal if the response status is 200.
        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    } else {
        // Show the error alert if the response status is not 200.
        var errorAlert = document.getElementById('errorAlert');
        errorAlert.style.display = 'block';
    }
})
.catch(function(error) {
    console.error('Error:', error);
    // Show the error alert for network errors or other issues.
    var errorAlert = document.getElementById('errorAlert');
    errorAlert.style.display = 'block';
});
});

// .then(res =>{
//         return res.json()
//     }).then(data=>{
//         console.log(data)
//         return;
//     })

// Close the error alert when the user clicks the close button.
document.querySelector('#errorAlert', '.close').addEventListener('click', function () {
var errorAlert = document.getElementById('errorAlert');
errorAlert.style.display = 'none';
});