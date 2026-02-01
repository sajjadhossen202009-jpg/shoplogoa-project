

function submitForm(){
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    form.classList.add("was-validated");

    if(form.checkVisibility()){
        alert("Your Form is valided")
    }
   
  })
}


