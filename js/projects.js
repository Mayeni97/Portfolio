document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");

  if (projects.length === 0) {
    container.innerHTML = "<p>No projects yet.</p>";
  } else {
    projects.forEach((proj, index) => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <h2>${proj.title}</h2>
        <p>${proj.description}</p>
        <a href="${proj.link}" target="_blank">View on GitHub</a>
        <button onclick="deleteProject(${index})">Delete</button>
        <hr>
      `;
      container.appendChild(div);
    });
  }
});

function deleteProject(index) {
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");
  projects.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  location.reload();
}