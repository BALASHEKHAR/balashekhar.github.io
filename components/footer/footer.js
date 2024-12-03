function LoadFooter() {
  fetch("components/footer/footer.html")
    .then((res) => res.text())
    .then((data) => {
      const footer = document.createElement("footer");
      footer.innerHTML = data;
      document.body.appendChild(footer);
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}
