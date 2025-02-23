"usr strict";

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  
  const phoneFirst = document.querySelector('#phone-first');
  const phoneSecond = document.querySelector('#phone-second');
  const phoneThird = document.querySelector('#phone-third');

  let fullPhone= phoneFirst+phoneSecond+phoneThird


}



