"use strict";
//Global Variables
const form = document.getElementById("issueForm");
const descriptionInput = document.getElementById("descriptionInput");
const severity = document.getElementById("severitySelector");
const assignment = document.getElementById("assignmentSelector");
const table = document.getElementById("issuesList");

//function that takes in all three inputs
function addIssue(description, severity, assignment) {
  if (description === "" || assignment.value === "") {
    alert("Please fill in all inputs");
  } else {
    let li = document.createElement("tr");
    li.appendChild(document.createTextNode(description, severity, assignment));
    li.innerHTML = `
    <div>
  <p>Description: ${description}</p> <br>
  <p>Severity: ${severity}</p> <br>
  <p>Assigned To: ${assignment}</p>
  </div>
  `;
    li.classList.add("listStyle");
    table.appendChild(li);
    descriptionInput.value = "";
  }
  //save it to local storage
}

form.addEventListener("submit", (e) => {
  e.preventDefault(),
    addIssue(descriptionInput.value, severity.value, assignment.value);
});
