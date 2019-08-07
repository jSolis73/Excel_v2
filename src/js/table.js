export let elem = document.querySelector('#table');

 export function createTable(parent, row, column) {
    var table = document.createElement('table');

    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        
        for (let j = 0; j < column; j++) {
            let td = document.createElement('td');
            let input = document.createElement('input');
            input.classList.add('ceil')
            td.appendChild(input);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}

