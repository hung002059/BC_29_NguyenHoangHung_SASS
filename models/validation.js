function returnFalse(errorID, message) {
    document.getElementById(errorID).innerHTML = message;
    return false;
}

function Validation() {
    this.arr = [];
    this.kiemTraRong = function(value, errorID, message) {
        if (value == "") {
            returnFalse(errorID, message);
        }
    }
    this.kiemTraChuoiTen = function(value, errorID, message) {
        var letterName =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letterName))
            return true;
        else
            returnFalse(errorID, message);
    }
    this.kiemTraChuoiPassword = function(value, errorID, message) {
        var letterPassword = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/";
        if (value.match(letterPassword))
            return true;
        else
            returnFalse(errorID, message);
    }
}