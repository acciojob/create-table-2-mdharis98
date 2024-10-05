function createTable() {
    // Get the number of rows and columns from the user
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Convert the user input to integers
    rn = parseInt(rn);
    cn = parseInt(cn);

    // Get the table element by its id
    let table = document.getElementById("myTable");

    // Clear any existing table content before creating a new one
    table.innerHTML = "";

    // Create the table rows and columns
    for (let i = 0; i < rn; i++) {
        // Create a new row
        let row = table.insertRow(i);

        for (let j = 0; j < cn; j++) {
            // Create a new cell in the current row
            let cell = row.insertCell(j);
            // Set the text inside the cell
            cell.innerHTML = `Row-${i} Column-${j}`;
        }
    }
}
