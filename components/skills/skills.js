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

  const tab1icons = document.getElementById("tab-1-icons");
  const tab2icons = document.getElementById("tab-2-icons");
  const tab3icons = document.getElementById("tab-3-icons");

  tab1.addEventListener("click", () => {
    tab1.className = "active";
    tab2.className = "";
    tab3.className = "";

    tab1icons.style.display = "flex";
    tab2icons.style.display = "none";
    tab3icons.style.display = "none";
  });
  tab2.addEventListener("click", () => {
    tab1.className = "";
    tab2.className = "active";
    tab3.className = "";

    tab1icons.style.display = "none";
    tab2icons.style.display = "flex";
    tab3icons.style.display = "none";
  });
  tab3.addEventListener("click", () => {
    tab1.className = "";
    tab2.className = "";
    tab3.className = "active";

    tab1icons.style.display = "none";
    tab2icons.style.display = "none";
    tab3icons.style.display = "flex";
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
    case "ruby":
      addDetails(
        "Ruby",
        "Ruby is an open-source, interpreted, dynamic, object-oriented programming language that emphasizes code readability.",
        "5",
        "0.4"
      );
      bar.style.width = "65%";
      addscale(65);
      break;
    case "go":
      addDetails(
        "Go",
        "Go is an open-source, interpreted, dynamic, object-oriented programming language that emphasizes code readability.",
        "5",
        "0.6"
      );
      bar.style.width = "60%";
      addscale(60);
      break;
    case "c_lang":
      addDetails(
        "C",
        "C is a general-purpose, procedural, imperative computer programming language. It can be used to develop software like operating systems, databases, compilers, and so on.",
        "5",
        "1"
      );
      bar.style.width = "55%";
      addscale(55);
      break;
    case "cpp":
      addDetails(
        "C++",
        "C++ is a powerful general-purpose programming language it supports different ways of programming like procedural, object-oriented, functional, etc,.",
        "2",
        "0.4"
      );
      bar.style.width = "60%";
      addscale(60);
      break;
    case "python":
      addDetails(
        "Python",
        "Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.",
        "6",
        "0.5"
      );
      bar.style.width = "65%";
      addscale(65);
      break;
    case "java":
      addDetails(
        "Java",
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        "6",
        "1"
      );
      bar.style.width = "67%";
      addscale(67);
      break;
    case "html":
      addDetails(
        "HTML",
        "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
        "2",
        "0.1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "css":
      addDetails(
        "CSS",
        "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
        "-",
        "-"
      );
      bar.style.width = "60%";
      addscale(60);
      break;
    case "javascript":
      addDetails(
        "JavaScript",
        "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.",
        "3",
        "0.4"
      );
      bar.style.width = "70%";
      addscale(70);
      break;
    case "react":
      addDetails(
        "React",
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
        "1",
        "1"
      );
      bar.style.width = "80%";
      addscale(80);
      break;
    case "nodejs":
      bar.style.width = "70%";
      addDetails(
        "NodeJS",
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.",
        "1",
        "1"
      );
      addscale(70);
      break;
    case "android":
      addDetails(
        "Android",
        "Android Studio is Android's official IDE. It is purpose-built for Android to accelerate your development and help you build the highest-quality apps for every Android device.",
        "1",
        "1"
      );
      bar.style.width = "70%";
      addscale(70);
      break;

    case "mysql":
      addDetails(
        "MySQL",
        "MySQL is an open-source relational database management system. It is used to store data in a structured format, allowing for efficient retrieval and manipulation of data.",
        "1",
        "0.4"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "mongo":
      addDetails(
        "MongoDB",
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.",
        "5",
        "1"
      );
      bar.style.width = "75%";
      addscale(75);
      break;
    case "firebase":
      addDetails(
        "Firebase",
        "Firebase is a cloud platform that includes services like analytics, authentication, realtime databases, configuration, file storage.",
        "4",
        "0.4"
      );
      bar.style.width = "65%";
      addscale(65);
      break;
    case "ga":
      addDetails(
        "GA",
        "Google Analytics is a free web analytics service that provides detailed statistics about the visitors to a website, and also provides tools for website owners to track and improve their website's performance.",
        "3",
        "0.4"
      );
      bar.style.width = "65%";
      addscale(65);
      break;

    case "oauth":
      addDetails(
        "OAuth",
        "OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, credentials.",
        "-",
        "1"
      );
      bar.style.width = "33%";
      addscale(33);
      break;
    case "openid":
      addDetails(
        "OpenID",
        "OpenID is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, credentials.",
        "-",
        "-"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "saml":
      addDetails(
        "SAML",
        "SAML is a standard for exchanging authentication and authorization data between security domains.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "passkey":
      addDetails(
        "Passkey",
        "Passkey is a passwordless authentication method that uses biometric data to verify the user's identity.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "grpc":
      addDetails(
        "gRPC",
        "gRPC is a high-performance, open-source universal RPC framework that puts mobile and HTTP/2 first.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "docker":
      addDetails(
        "Docker",
        "Docker is a platform for building, shipping, and running applications in containers.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "k8s":
      addDetails(
        "Kubernetes",
        "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "aws":
      addDetails(
        "AWS",
        "Amazon Web Services (AWS) is a cloud computing platform that provides a wide range of services, including computing, storage, databases, and analytics.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "terraform":
      addDetails(
        "Terraform",
        "Terraform is an open-source infrastructure as code tool that allows you to define and manage your infrastructure in a declarative way.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "ci_cd":
      addDetails(
        "CI/CD",
        "CI/CD is a process for automating the delivery of software updates to production.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "cloudflare":
      addDetails(
        "Cloudflare",
        "Cloudflare is a cloud computing platform that provides a wide range of services, including computing, storage, databases, and analytics.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "datadog":
      addDetails(
        "Datadog",
        "Datadog is a cloud computing platform that provides a wide range of services, including computing, storage, databases, and analytics.",
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
