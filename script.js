function AddBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields");
    return;
  }

  const tableBody = document.getElementById("book-list");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete" onclick="deleteRow(this)">Clear</button></td>
  `;

  tableBody.appendChild(row);

  // Clear input fields after adding
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

function deleteRow(button) {
  const row = button.closest("tr");
  row.remove();
}
