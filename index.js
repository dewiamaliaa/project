const emailReciver = "dewinuramalia.05@gmail.com";

let name = document.getElementById("input-name");
let email = document.getElementById("input-email");
let phone = document.getElementById("input-phone");
let subject = document.getElementById("input-subject");
let message = document.getElementById("input-message");

function submitForm() {
  name = name.value;
  email = email.value;
  phone = phone.value;
  subject = subject.value;
  message = message.value;

  if (name == '') {
    return alert('Name input fields must be not empty');
  } else if (email == '') {
    return alert('Email input fields must be not empty');
  } else if (phone == '') {
    return alert('Phone input fields must be not empty');
  } else if (subject == '') {
    return alert('Subject input fields must be not empty');
  } else if (message == '') {
    return alert('Message input fields must be not empty');
  }

  const a = document.createElement("a");

  a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
  a.target = "_blank";
  a.click();

  let dataObject = {
    name: name,
    email: email,
    phoneNumber: phone,
    subject: subject,
    message: message,
  };
  console.log(dataObject);
}