document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("journal-entries");
  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");

  if (entries.length === 0) {
    container.innerHTML = "<p>No journal entries yet.</p>";
  } else {
    entries.forEach((entry, index) => {
      const div = document.createElement("div");
      div.className = "journal-entry";
      div.innerHTML = `
        <h2>${entry.title}</h2>
        <p><em>${entry.date}</em></p>
        <p>${entry.content.replace(/\\n/g, "<br>")}</p>
        <button onclick="deleteEntry(${index})">Delete</button>
        <hr>
      `;
      container.appendChild(div);
    });
  }
});

function deleteEntry(index) {
  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
  entries.splice(index, 1);
  localStorage.setItem("journalEntries", JSON.stringify(entries));
  location.reload();
}