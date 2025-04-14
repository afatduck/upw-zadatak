function validateLogin (event) {
    event.preventDefault()
    const username = document.getElementById("korisnicko-ime")
    const password = document.getElementById("lozinka")

    if (username.value != "admin" || password.value != "admin")
    {
        alert("Netocno korisnicko ime i lozinka.")
        return;
    }

    location.href = "./dashboard.html"
}

function addEntry() {
    var firstName = document.getElementById("ime").value; //dohvati vrijednost imena
    var lastName = document.getElementById("prezime").value; //dohvati vrijednost prezimena
    //dohvati referencu na tablicu i njen sadrzaj
    var table = document.querySelector("table");
    var newRow = table.insertRow(table.rows.length); //stvori novi redak u
    var cellFirstName = newRow.insertCell(); //stvori prvu celiju za ime
    var cellLastName = newRow.insertCell(); //stvori drugu celiju za prezime
    var cellActions = newRow.insertCell(); //stvori trecu celiju za gumbe
    cellFirstName.innerHTML = firstName; //postavi vrijednost na ime
    cellLastName.innerHTML = lastName; //postavi vrijednost na prezime
    cellActions.innerHTML = `
    <div class="buttons">
        <button onclick="editRow(this)" class="edit-button"></button>
        <button onclick="deleteRow(this)" class="delete-button"></button>    
    </div>
    `; //dodaj gumbe za akcije uredivanja i
}

let selectedRow;

function editRow(button) {
selectedRow = button.parentNode.parentNode.parentNode;
document.getElementById("uredi-ime").value = selectedRow.cells[0].innerHTML;
document.getElementById("uredi-prezime").value = selectedRow.cells[1].innerHTML;
openModal()
}

function deleteRow(button) {
    button.parentNode.parentNode.parentNode.remove()
}

function saveChanges() {
    selectedRow.cells[0].innerHTML = document.getElementById("uredi-ime").value
    selectedRow.cells[1].innerHTML = document.getElementById("uredi-prezime").value
    closeModal();
}

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function searchTable(input) {
    const text = input.value.toUpperCase();
    const rows = document.querySelector('table').rows;
    for (let i = 1; i < rows.length; i++)
    {
        const row = rows[i]
        if (!text) {
            row.style.display = "table-row"
            continue;
        }
        const match = text == row.children[0].innerHTML.toUpperCase() ||
            text == row.children[1].innerHTML.toUpperCase();
        row.style.display = match ? "table-row" : "none";
    }
}