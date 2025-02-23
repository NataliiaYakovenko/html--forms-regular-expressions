"usr strict";

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  let fullName = firstName + ' ' + lastName;

  const email = document.querySelector('#email').value;
  
  const phoneFirst = document.querySelector('#phone-first').value;
  const phoneSecond = document.querySelector('#phone-second').value;
  const phoneThird = document.querySelector('#phone-third').value;
  let fullPhone= phoneFirst+phoneSecond+phoneThird;

  const subject = document.querySelector('#message-subject').value;

  const message = document.querySelector('#message').value.trim().replace(/ +/g, ' ');
  
  const form ={
    name: fullName,
    email: email,
    phone: fullPhone,
    subject: subject,
    message: message
  }
  console.log(form);

}



