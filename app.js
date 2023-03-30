let listProduct = new Array;
let total = listProduct.length;
let deleteBtns = document.querySelectorAll('.deleteBtn');
let editBtns = document.querySelectorAll('.editBtn');

document.getElementById("total-product").innerHTML = total;

function displayProduct(arr) {
    let display = "";
    for (let i = 0; i < arr.length; i++) {
        display += "<tr><td>" + arr[i] + "</td><td><button type='button' class='btn editBtn'>Edit</button></td><td><button type='button' class='btn deleteBtn'>Delete</button></td></tr>"
    }
    document.getElementById("list-product").innerHTML = display;
    deleteBtns = document.querySelectorAll('.deleteBtn');
    editBtns = document.querySelectorAll('.editBtn');
    deleteBtns.forEach((deleteBtn, i) => {
        deleteBtn.addEventListener('click', () => deleteElement(i));
    });
    editBtns.forEach((editBtn, i) => {
        editBtn.addEventListener('click', () => editElement(i));
    });
}

function add() {
    let productName = document.getElementById("add-input").value;
    if (productName == "") {
        alert("Vui lòng nhập tên sản phẩm");
    } else {
        listProduct.push(productName);
        document.getElementById("add-input").value = "";
    }
    total = listProduct.length;
    document.getElementById("total-product").innerHTML = total;
    displayProduct(listProduct);
}

function deleteElement(index) {
    listProduct.splice(index,1);
    total = listProduct.length;
    document.getElementById("total-product").innerHTML = total;
    displayProduct(listProduct);
}

function editElement(index) {
    let newProductName = prompt("Nhập vào tên mới cho sản phẩm");
    listProduct[index] = newProductName;
    displayProduct(listProduct);
}