document.getElementById('csvFileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const csvData = event.target.result;
        displayTable(csvData);
    };
    reader.readAsText(file);
});

function displayTable(csvData) {
    const tableContainer = document.getElementById('tableData');
    const table = new Tabulator(tableContainer, {
        data: csvData,
        layout: 'fitColumns',
        movableColumns: true,
        resizableRows: true,
        csv: true,
        columns: [
            { title: 'Column Name', field: 'column1', headerFilter: true },
            { title: 'Ordinal Position', field: 'column2', headerFilter: true }
        ],
    });
}
