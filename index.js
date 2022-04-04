const body = document.body;
const projects = document.getElementById("projects");
const project1 = document.getElementById("project1");
const project1Img = document.getElementById("project1Img");
const project1Details = document.getElementById("project1Details");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");

project1.onclick = () => {
  if (project1Img.className === "projectImage") {
    project1Img.classList.replace("projectImage", "projectImageHidden");
    project1Details.classList.replace("projectDetails", "projectDetailsActive");
  } else {
    project1Img.classList.replace("projectImageHidden", "projectImage");
    project1Details.classList.replace("projectDetailsActive", "projectDetails");
  }
};

project1Img.addEventListener("mouseover", () => {
  project1Img.classList.replace("projectImage", "projectImageHidden");
  project1Details.classList.replace("projectDetails", "projectDetailsActive");
});

project1.addEventListener("mouseleave", () => {
  project1Img.classList.replace("projectImageHidden", "projectImage");
  project1Details.classList.replace("projectDetailsActive", "projectDetails");
});
