document.getElementById("journalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value.trim();

  if (!title || !date || !content) {
    alert("Please fill out all fields.");
    return;
  }

  const newEntry = { title, date, content };
  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
  entries.unshift(newEntry);
  localStorage.setItem("journalEntries", JSON.stringify(entries));

  alert("Entry saved successfully!");
  document.getElementById("journalForm").reset();
});

document.getElementById("projectForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("projTitle").value.trim();
  const description = document.getElementById("projDesc").value.trim();
  const link = document.getElementById("projLink").value.trim();

  if (!title || !description || !link) {
    alert("Fill all project fields.");
    return;
  }

  const newProject = { title, description, link };
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");
  projects.unshift(newProject);
  localStorage.setItem("projects", JSON.stringify(projects));

  alert("Project added!");
  document.getElementById("projectForm").reset();
});

function clearAll() {
  if (confirm("This will delete all projects and journal entries. Are you sure?")) {
    localStorage.clear();
    alert("All data cleared.");
    location.reload();
  }
}