async function LoadMainInfo() {
  const response = await fetch("components/main_info/main_info.html");
  const data = await response.text();
  const mainInfo = document.querySelector(".main-info");
  mainInfo.innerHTML = data;
}

function switchTheme() {
  let darkmode = false;
  const btn = document.getElementById("theme");
  btn.addEventListener("click", () => {
    console.log(darkmode);
    if (darkmode === false) {
      document.getElementById("dark-back-img2").src =
        "assets/images/subtractdark.jpg";
      darkmode = !darkmode;

      if (window.innerWidth > 700) {
        btn.getElementsByTagName("span")[0].textContent = "Lights On";
      } else {
        btn.getElementsByTagName("span")[0].textContent = "";
      }

      var head = document.getElementsByTagName("HEAD")[0];
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "styles/themes/dark-theme.css";
      link.id = "dark";
      head.appendChild(link);

      var ic = btn.getElementsByTagName("i")[0];

      ic.className = "fas fa-sun";
      ic.style.borderRadius = "50%";
      ic.style.fontWeight = "800";
      ic.style.marginRight = "5px";

      head.appendChild(link);
    } else {
      document.getElementById("dark-back-img2").src =
        "assets/images/Subtract.png";

      darkmode = !darkmode;
      if (window.innerWidth > 700) {
        btn.getElementsByTagName("span")[0].textContent = "Lights Off";
      } else {
        btn.getElementsByTagName("span")[0].textContent = "";
      }

      var ic = btn.getElementsByTagName("i")[0];
      ic.className = "fas fa-moon";
      ic.style.borderRadius = "50%";
      ic.style.fontWeight = "800";
      ic.style.marginRight = "5px";

      darkcss = document.getElementById("dark");
      darkcss.parentNode.removeChild(darkcss);
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await LoadMainInfo();
  switchTheme();
});
