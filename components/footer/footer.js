function LoadFooter() {
  fetch("components/footer/footer.html")
    .then((res) => res.text())
    .then((data) => {
      const footer = document.getElementById("footer");
      footer.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}
