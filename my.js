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
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;

    let product = [name, price, quantity];
    products.push(product);

    display();
    clearInput();

}

function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = ''
}

function editProduct(index){
    let productEdit = products[index];
    document.getElementById('name').value = productEdit[0];
    document.getElementById('price').value = productEdit[1];
    document.getElementById('quantity').value = productEdit[2];

    document.getElementById('submit-add-product').hidden = true;
    document.getElementById('submit-edit-product').hidden = false;

}