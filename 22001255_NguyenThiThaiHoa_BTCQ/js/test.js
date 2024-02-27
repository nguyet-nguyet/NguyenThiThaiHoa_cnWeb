function kiemTraUser() {
    var regex = /^[a-z0-9_-]{3,16}$/;
    let chuoiKT = document.getElementById('txtChuoi').value;
    let kq = regex.test(chuoiKT);
    if (kq == true) {
        alert("Nhập đúng mẫu");
    } else {
        alert("Nhập sai mẫu");
    }
}

function kiemTraMK() {
    //Tối thiểu tám ký tự, ít nhất một chữ cái và một số:
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt:
    //var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    //Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số:
    //var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    //Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt:
    //var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //Tối thiểu tám và tối đa 10 ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt:
    //var reg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    //var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$/;
    let chuoiMK = document.getElementById('txtmk').value
    let mk = regex.test(chuoiMK);
    if (mk == true) {
        alert("Nhập đúng mật khẩu");
    } else {
        alert("Nhập sai mật khẩu");
    }
}

function kiemtraEmail() {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let chuoiEmail = document.getElementById('txtEmail').value
    let email = re.test(chuoiMK);
    if (email == true) {
        alert("Nhập đúng email");
    } else {
        alert("Nhập sai email");
    }
}

function kiemtradiachiIPv4() {
    var regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let chuoiDC = document.getElementById('txtIPv4').value;
    let dc = regex.test(chuoiDC);
    if (dc == true) {
        alert("Nhập đúng ");
    } else {
        alert("Nhập sai ");
    }
}

function GiaTriHex() {
    var regex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
    let chuoiGT = document.getElementById('txtHex').value;
    let gt = regex.test(chuoiGT);
    if (gt == true) {
        alert("Nhập đúng ");
    } else {
        alert("Nhập sai ");
    }
}

function MatchingASlug() {
    var regex = /^[a-z0-9-]+$/;
    let chuoiKT = document.getElementById('txtSlug').value;
    let gt = regex.test(chuoiKT);
    if (gt == true) {
        alert("Nhập đúng ");
    } else {
        alert("Nhập sai ");
    }
}

function MatchingaURL() {
    var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    let chuoiURL = document.getElementById('txtURL').value;
    let gt = regex.test(chuoiURL);
    if (gt == true) {
        alert("Nhập đúng ");
    } else {
        alert("Nhập sai ");
    }
}

function MatchingAnHTMLTag() {
    var regex = /^<([a-z\d]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)$/;
    let chuoiHTML = document.getElementById('txtHTML').value;
    let gt = regexr.test(chuoiHTML);
    if (gt == true) {
        alert("Nhập đúng ");
    } else {
        alert("Nhập sai ");
    }
}

function Dates() {
    var regex = /^([1-2][0-9]|3[0-1]|0?[1-9])([-\.\/ ])(1[0-2]|0?[1-9])(\2)([\d]{4}|[\d]{2})$/;
    let chuoidate = document.getElementById('txtdate').value;
    let gt = regex.test(chuoidate);
    if (gt == true) {
        alert("Nhập đúng ");
    } else {
        alert("Nhập sai ");
    }
}