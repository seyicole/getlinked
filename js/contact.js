const thisForm = document.getElementById('myForm')
thisForm.addEventListener('submit', function (e) {
 e.preventDefault(); 
 // Prevent the form from submitting via default behavior.

 const formData = new FormData(thisForm).entries();

 // const formData = {
 //     'first_name': 'Olu',
 //     'email': 'olu@gmail.com',
 //     "message": "I need further info"
 // }

 // Log the form data to the console
 console.log("Form Data:", formData);

 // Send an AJAX request to your server.
 fetch('https://backend.getlinked.ai/hackathon/contact-form', {
     method: 'POST',
     headers: {
                 'Content-Type': 'application/json'
             },
     body: JSON.stringify(Object.fromEntries(formData)), // Serialize the form data
 })
 // .then(res =>{
 //     return res.json()
 // }).then(data=>{
 //     console.log(data)
 //     return;
 // })


 .then(function(response) {
     if (response.ok) {
         // Show the success toast if the response status is 200.
         var successToast = document.getElementById('successToast');
         var toast = new bootstrap.Toast(successToast);
         toast.show();
         // console.log(response)
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
})
 // Close the error alert when the user clicks the close button.
document.querySelector('#errorAlert .close').addEventListener('click', function () {
 var errorAlert = document.getElementById('errorAlert');
 errorAlert.style.display = 'none';
});