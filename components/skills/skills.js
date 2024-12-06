async function LoadSkills() {
  const response = await fetch("components/skills/skills.html");
  const data = await response.text();
  const skills = document.querySelector(".skills");
  skills.innerHTML = data;
}

function handleTabs() {
  ///tabs
  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");
  const tab3 = document.getElementById("tab-3");
  const tab4 = document.getElementById("tab-4");

  const tab1icons = document.getElementById("tab-1-icons");
  const tab2icons = document.getElementById("tab-2-icons");
  const tab3icons = document.getElementById("tab-3-icons");
  const tab4icons = document.getElementById("tab-4-icons");

  tab1.addEventListener("click", () => {
    tab1.className = "active";
    tab2.className = "";
    tab3.className = "";
    tab4.className = "";

    tab1icons.style.display = "flex";
    tab2icons.style.display = "none";
    tab3icons.style.display = "none";
    tab4icons.style.display = "none";
  });
  tab2.addEventListener("click", () => {
    tab1.className = "";
    tab2.className = "active";
    tab3.className = "";
    tab4.className = "";

    tab1icons.style.display = "none";
    tab2icons.style.display = "flex";
    tab3icons.style.display = "none";
    tab4icons.style.display = "none";
  });
  tab3.addEventListener("click", () => {
    tab1.className = "";
    tab2.className = "";
    tab3.className = "active";
    tab4.className = "";

    tab1icons.style.display = "none";
    tab2icons.style.display = "none";
    tab3icons.style.display = "flex";
    tab4icons.style.display = "none";
  });

  tab4.addEventListener("click", () => {
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
    tab4.className = "active";

    tab1icons.style.display = "none";
    tab2icons.style.display = "none";
    tab3icons.style.display = "none";
    tab4icons.style.display = "flex";
  });
}

// to prevent default behavior
function allowDrop(ev) {
  ev.preventDefault();
}

// to set the data to be transferred
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// to add the scale to the drop bar
function addscale(n) {
  const dimg1 = document.getElementById("drop-bar-level-img1");
  const dimg2 = document.getElementById("drop-bar-level-img2");
  const dimg3 = document.getElementById("drop-bar-level-img3");

  if (n < 45) {
    dimg1.classList.add("scale");
    dimg2.classList.remove("scale");
    dimg3.classList.remove("scale");
  } else if (n < 95) {
    dimg1.classList.add("scale");
    dimg2.classList.add("scale");
    dimg3.classList.remove("scale");
  } else if (n <= 100) {
    dimg1.classList.add("scale");
    dimg2.classList.add("scale");
    dimg3.classList.add("scale");
  } else {
    dimg1.classList.remove("scale");
    dimg2.classList.remove("scale");
    dimg3.classList.remove("scale");
  }
}

// to add the details to the drop bar
function addDetails(title, text, np, ex) {
  const droptext = document.getElementById("drop-text");
  const droptitle = document.getElementById("drop-title");
  const dropnp = document.getElementById("drop-np");
  const dropex = document.getElementById("drop-ex");

  droptitle.textContent = title;
  droptext.textContent = text;
  dropnp.textContent = np;
  dropex.textContent = ex;
}

// to drop the skill
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var it = document.getElementById(data);

  ev.target.style.backgroundImage = `url(${it.src})`;
  const bar = document.getElementById("drop-bar-line-value");

  switch (it.id) {
    case "react-logo":
      addDetails(
        "React Js",
        "React is an open-source front-end JavaScript library developed by Facebook for building user interfaces or UI components.",
        "5",
        "0.4"
      );
      bar.style.width = "65%";
      addscale(65);
      break;
    case "js-logo":
      addDetails(
        "Node Js",
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.",
        "5",
        "0.6"
      );
      bar.style.width = "60%";
      addscale(60);
      break;
    case "firebase-logo":
      addDetails(
        "Firebase",
        "Firebase is a cloud platform that includes services like analytics, authentication, realtime databases, configuration, file storage.",
        "5",
        "1"
      );
      bar.style.width = "55%";
      addscale(55);
      break;
    case "mongodo-logo":
      addDetails(
        "Mongo DB",
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.",
        "2",
        "0.4"
      );
      bar.style.width = "60%";
      addscale(60);
      break;
    case "express-logo":
      addDetails(
        "Express Js",
        "Express.js, or simply Express, is a back end web application framework for Node.js, it is designed for building web applications and APIs.",
        "6",
        "0.5"
      );
      bar.style.width = "65%";
      addscale(65);
      break;
    case "android-logo":
      addDetails(
        "Android",
        "Android Studio is Android's official IDE. It is purpose-built for Android to accelerate your development and help you build the highest-quality apps for every Android device.",
        "6",
        "1"
      );
      bar.style.width = "67%";
      addscale(67);
      break;
    case "java-logo":
      addDetails(
        "Java",
        "One of the most widely used programming languages, Java is used as the server-side language for most back-end development projects, including those involving big data and Android development.",
        "2",
        "0.1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "ds-logo":
      addDetails(
        "Data Structures",
        "data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data, i.e., it is an algebraic structure about data",
        "-",
        "-"
      );
      bar.style.width = "60%";
      addscale(60);
      break;
    case "materialui-logo":
      addDetails(
        "Material UI",
        "Material-UI is an open-source project that features React components that implement Google's Material Design.",
        "3",
        "0.4"
      );
      bar.style.width = "70%";
      addscale(70);
      break;
    case "cplusplus-logo":
      addDetails(
        "C++",
        "C++ is a powerful general-purpose programming language it supports different ways of programming like procedural, object-oriented, functional, etc,.",
        "1",
        "1"
      );
      bar.style.width = "80%";
      addscale(80);
      break;
    case "algo-logo":
      bar.style.width = "70%";
      addDetails(
        "Algorithm",
        "Algorithm is a step-by-step procedure, which defines a set of instructions to be executed in a certain order to get the desired output. and are generally created independent of underlying languages",
        "1",
        "1"
      );
      addscale(70);
      break;
    case "c-logo":
      addDetails(
        "C",
        "C programming is a general-purpose, procedural, imperative computer programming language. It can be used to develop software like operating systems, databases, compilers, and so on.",
        "1",
        "1"
      );
      bar.style.width = "70%";
      addscale(70);
      break;

    case "figma-logo":
      addDetails(
        "Figma",
        "Figma is a web-based graphics editing and user interface design app. You can use it to do all kinds of graphic design work from wireframing websites, designing mobile app interfaces, prototyping designs, crafting social media posts, and everything in between",
        "1",
        "0.4"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "css-logo":
      addDetails(
        "CSS",
        "Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable. CSS handles the look and feel part of a web page",
        "5",
        "1"
      );
      bar.style.width = "75%";
      addscale(75);
      break;
    case "xml-logo":
      addDetails(
        "XML",
        "An XML file is an extensible markup language file, and it is used to structure data for storage and transport. In an XML file, there are both tags and text.",
        "4",
        "0.4"
      );
      bar.style.width = "65%";
      addscale(65);
      break;
    case "bootstrap-logo":
      addDetails(
        "Bootstrap",
        "Bootstrap is a potent front-end framework used to create modern websites and web apps. It's open-source and free to use, yet features numerous HTML and CSS templates for UI interface elements such as buttons and forms.",
        "3",
        "0.4"
      );
      bar.style.width = "65%";
      addscale(65);
      break;

    case "git-logo":
      addDetails(
        "Git",
        "Git tracks the changes you make to files, so you have a record of what has been done, and you can revert to specific versions should you ever need to. Git also makes collaboration easier, allowing changes by multiple people to all be merged into one source.",
        "-",
        "1"
      );
      bar.style.width = "33%";
      addscale(33);
      break;
    case "postman-logo":
      addDetails(
        "Postman",
        "Postman is an API client that makes it easy for developers to create, share, test and document APIs. This is done by allowing users to create and save simple and complex HTTP/s requests, as well as read their responses.",
        "-",
        "-"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "msexcel-logo":
      addDetails(
        "MS Excel",
        "Excel is typically used to organize data and perform financial analysis. It is used across all business functions and at companies from small to large.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;

    default:
      addDetails(
        "Drop a Skill",
        "This is a skills record selector. It'll help you know about my skills in an interactive way. Drag a skill from the skillset and drop in the above circle! (Just tap on the skill if you are using a mobile phone)",
        "-",
        "-"
      );
      bar.style.width = "0%";
      addscale(0);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await LoadSkills();
  handleTabs();
});
