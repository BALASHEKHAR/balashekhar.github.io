function LoadHeader() {
  fetch("components/header/header.html")
    .then((res) => res.text())
    .then((data) => {
      const header = document.getElementById("header");
      header.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
}