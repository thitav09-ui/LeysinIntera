document.getElementById("inscriptionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect data using FormData
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Now 'data' contains all the user's input
  console.log(data);

  alert(
    "Merci pour votre demande ! Nous vous contacterons très prochainement" + 
    " pour finaliser votre inscription au camp de ski de Leysin. "
  );
});