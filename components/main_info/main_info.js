function LoadMainInfo() {
  fetch("components/main_info/main_info.html")
    .then((response) => response.text())
    .then((data) => {
      const mainInfo = document.querySelector(".main-info");
      mainInfo.innerHTML = data;
    });
}
