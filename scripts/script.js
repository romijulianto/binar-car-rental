fetch("partials/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("partials/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

fetch("partials/our-services.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("our-services").innerHTML = data;
  });

fetch("partials/faq.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("faq").innerHTML = data;
  });

fetch("partials/why-us.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("why-us").innerHTML = data;
  });

fetch("partials/testimoni.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("testimoni").innerHTML = data;
  });

fetch("partials/banner.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("banner").innerHTML = data;
  });
