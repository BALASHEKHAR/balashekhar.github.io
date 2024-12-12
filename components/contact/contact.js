async function LoadContact() {
  const response = await fetch("components/contact/contact.html");
  const data = await response.text();
  const contact = document.querySelector(".contact");
  contact.innerHTML = data;
}

document.addEventListener("DOMContentLoaded", async () => {
  await LoadContact();
});
