function getID(id) {
    return document.getElementById(id);
}
var service = new Service();

function getListProduct() {
    service
        .getListProductAPI()
        .then(function(result) {
            renderList(result.data);
        })
        .catch(function(error) {
            console.log(error);
        })
}
getListProduct();

function renderList(data) {
    var tableList = '';
    data.forEach(function(item, index) {
        tableList += `
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.text}</td>
            <td>
                <img class="card-img" src="../images/${item.img}">
            </td>
            <td>
                <button data-toggle="modal" data-target="#myModal" class='btn btn-info m-1'>Sửa</button>
                <button class='btn btn-danger m-1'>Xóa</button>
            </td>
        </tr>
    `
    });
    getID('tblDanhSachSP').innerHTML = tableList;
}