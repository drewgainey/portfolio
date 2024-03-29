const body = document.body;
//projects elements
const projects = document.getElementById("projects");
const project1 = document.getElementById("project1");
const project1Img = document.getElementById("project1Img");
const project1Link = document.getElementById("project1Link");
const project1Details = document.getElementById("project1Details");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");

//contact elements
const phoneIcon = document.getElementById("phoneIcon");
const phoneInfo = document.getElementById("phoneInfo");

// projects eventListeners
project1Img.addEventListener("mouseover", () => {
  project1Img.classList.replace("projectImage", "projectImageHidden");
  project1Details.classList.replace("projectDetails", "projectDetailsActive");
});

project1.addEventListener("mouseleave", () => {
  project1Img.classList.replace("projectImageHidden", "projectImage");
  project1Details.classList.replace("projectDetailsActive", "projectDetails");
});

project2Img.addEventListener("mouseover", () => {
  project2Img.classList.replace("projectImage", "projectImageHidden");
  project2Details.classList.replace("projectDetails", "projectDetailsActive");
});

project2.addEventListener("mouseleave", () => {
  project2Img.classList.replace("projectImageHidden", "projectImage");
  project2Details.classList.replace("projectDetailsActive", "projectDetails");
});

project3Img.addEventListener("mouseover", () => {
  project3Img.classList.replace("projectImage", "projectImageHidden");
  project3Details.classList.replace("projectDetails", "projectDetailsActive");
});

project3.addEventListener("mouseleave", () => {
  project3Img.classList.replace("projectImageHidden", "projectImage");
  project3Details.classList.replace("projectDetailsActive", "projectDetails");
});


//contacts eventListeners
phoneIcon.addEventListener("mouseover", () => {
  phoneInfo.classList.replace("hiddenContact", "activeContact");
});
phoneIcon.addEventListener("mouseleave", () => {
  phoneInfo.classList.replace("activeContact", "hiddenContact");
});
