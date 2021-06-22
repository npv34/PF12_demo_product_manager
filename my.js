let products = [
    ["Samsung s7", 20000, 10], // i = 0
    ["Iphone 12", 30000, 5], // i = 1
    ["Samsung s5", 10000, 20],
    ["Xiaomi note 11", 25000, 10],
];

function display() {
    let html = '';
    for(let i = 0; i < products.length; i++) {
        html += '<tr>';
        html += '<td>' + (i + 1) + '</td>';
        for(let j = 0; j < products[0].length; j++) {
            html += '<td>';
            html += products[i][j];
            html += '</td>';
        }

        html += '<td><input type="checkbox"/></td>'
        html += '<td><button onclick="deleteProduct('+i+')" class="delete-product">Delete</button></td>'
        html += '<td><button onclick="editProduct('+i+')" class="edit-product">Edit</button></td>'

        html += '</tr>';
    }

    document.getElementById('list-product').innerHTML = html;
}

display();

function deleteProduct(index) {
    if(confirm("Are you sure?")) {
        products.splice(index, 1);
        display();
    }
   
}

function addProduct() {
    let name = getValueElement('name');
    let price = getValueElement('price');
    let quantity = getValueElement('quantity');
    let product = [name, price, quantity];
    products.push(product);
    display();
    clearInput();
}

function clearInput() {
    setValueElement('name', '');
    setValueElement('price', '');
    setValueElement('quantity', '');
}

function editProduct(index){
    let productEdit = products[index];
    setValueElement('name', productEdit[0]);
    setValueElement('price', productEdit[1]);
    setValueElement('quantity', productEdit[2]);
    document.getElementById('submit-add-product').hidden = true;
    document.getElementById('submit-edit-product').hidden = false;
    setValueElement('submit-edit-product', index);
}

function setValueElement(idElement, newValue) {
    document.getElementById(idElement).value = newValue;
}

function getValueElement(idElement) {
    let value = document.getElementById(idElement).value;
    return value;
}

function updateProduct() {
    let index = document.getElementById('submit-edit-product').value;
    let name = getValueElement('name');
    let price = getValueElement('price');
    let quantity = getValueElement('quantity');
    let product = [name, price, quantity];
    products[index] = product;
    display();
    clearInput();
    document.getElementById('submit-add-product').hidden = false;
    document.getElementById('submit-edit-product').hidden = true;
}

