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
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.ngonNgu}</td>
            <td>${item.moTa}</td>
            <td>
                <img class="card-img " style="width: 80%;" src="../images/${item.hinhAnh}" >
            </td>
            <td>
                <button data-toggle="modal" data-target="#myModal" class='btn btn-info m-1' onclick="editProduct(${item.id})">Sửa</button>
                <button class='btn btn-danger m-1' onclick="deleteProduct(${item.id})">Xóa</button>
            </td>
        </tr>
    `
    });
    getID('tblDanhSachSP').innerHTML = tableList;
}

function deleteProduct(id) {
    service
        .deleteProductAPI(id)
        .then(function(result) {
            getListProduct();
        })
        .catch(function(error) {
            console.log(error);
        })
}
var danhSachDoiTuong = new DanhSachDoiTuongQuanLy();
var validation = new Validation();

function layThongTinDoiTuong(id) {
    var isValid = true;
    var _hoTen = getID('Ten').value;
    isValid &= validation.kiemTraRong(_hoTen, 'errorName', "(*) Nhập thêm họ tên") && validation.kiemTraChuoiTen(_hoTen, 'errorName', "Nhập lại");
    var _taiKhoan = getID('account').value;
    isValid &= validation.kiemTraRong(_taiKhoan, 'errorAccount', 'Nhập thêm tài khoản');
    var _matKhau = getID('password').value;
    isValid &= validation.kiemTraRong(_matKhau, 'errorPassword', 'Nhập thêm mật khẩu') && validation.kiemTraChuoiPassword(_matKhau, 'errorPassword', 'Nhập lại')
    var _email = getID('email').value;
    var _loaiND = getID('loaiNguoiDung').value;
    var _ngonNgu = getID('loaiNgonNgu').value;
    var _moTa = getID('moTa').value;
    var _img = getID('HinhSP').value;
    if (isValid)
        var doiTuong = new DoiTuong(id, _hoTen, _taiKhoan, _matKhau, _email, _loaiND, _ngonNgu, _moTa, _img);
    return doiTuong;
}

function themMoiTT() {
    document.getElementById('modal-title')[0].innerHTML = "Thêm thông tin mới";
    var btnFooter = `<button id="add" class="btn btn-warning m-2" onclick="addProduct()">Thêm</button>`;
    document.getElementsByClassName('modal-footer').style.display='block';
    document.getElementsByClassName('modal-footer').innerHTML = 123;
}
document.getElementById('themMoi').onclick=function(){
    document.getElementById('modal-title')[0].innerHTML = "Thêm thông tin mới";
    var btnFooter = `<button id="add" class="btn btn-success m-2" onclick="addProduct()">Thêm</button>`;
    document.getElementsByClassName('modal-footer').innerHTML = 123;
}
function addProduct() {
    var data = layThongTinDoiTuong();
    service
        .addProductAPI(data)
        .then(function(result) {
            getListProduct();
            document.getElementsByClassName('close')[0].click();
        })
        .catch(function(error) {
            console.log(error);
        })
}

function editProduct(id) {
    document.getElementsByClassName('modal-title')[0].innerHTML = "Sửa thông tin";
    var btnFooter = `<button id="update" class="btn btn-warning m-2" onclick="upadateProduct(${id})">Cập nhật</button>`;
    document.getElementsByClassName('modal-footer')[0].innerHTML = btnFooter;
    service
        .getProductById(id)
        .then(function(doiTuong) {
            getID('Ten').value = doiTuong.data.hoTen;
            getID('account').value = doiTuong.data.taiKhoan;
            getID('password').value = doiTuong.data.matKhau;
            getID('password').type = "text";
            getID('email').value = doiTuong.data.email;
            getID('loaiNguoiDung').value = doiTuong.data.loaiND;
            getID('loaiNgonNgu').value = doiTuong.data.ngonNgu;
            getID('moTa').value = doiTuong.data.moTa;
            getID('HinhSP').value = doiTuong.data.hinhAnh;
        })
        .catch(function(error) {
            console.log(error);
        })
}

function upadateProduct(id) {
    var doiTuong = layThongTinDoiTuong(id);

    console.log(doiTuong);
    service
        .updateProductAPI(doiTuong)
        .then(function(product) {
            getListProduct();
            document.getElementsByClassName('close')[0].click();
        })
        .catch(function(error) {
            console.log(error);
        })
}