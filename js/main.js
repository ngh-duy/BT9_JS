//BAI 1
// Input: 
// - lương 1 ngày làm 100000 VND 
// - So ngay lam viec do người dùng nhập lay tu id = dayworked gán vào biến dayworked
// Process:
// - Tiền lương = 100000 * dayworked
// Output:
// - Xuất ra màn hình tiền lương

document.getElementById('btn').addEventListener('click', function(){
    let dayworked = document.getElementById('dayworked').value;
    let tienluong = dayworked * 100000;
    document.getElementById('tienluong').innerHTML = "Tiền lương: " + tienluong;
})

//BAI 2
// Input: 
// - 5 số thường nhập vào từ id = number1, number2, number3, number4, number5
// - Ép kiểu về number bằng cách nhân mỗi số với 1
// Process:
// - Tính tổng của 5 số đó
// - Tính trung bình cộng của 5 số đó
// Output:
// - Xuất ra màn hình trung bình cộng của 5 số đó

document.getElementById('btn2').addEventListener('click', function(){
    let one = document.getElementById('st1').value*1;
    let two = document.getElementById('st2').value*1;
    let three = document.getElementById('st3').value*1;
    let four = document.getElementById('st4').value*1;
    let five = document.getElementById('st5').value*1;
    let tong = one + two + three + four + five;
    let TBC = tong / 5;
    document.getElementById('TBC').innerHTML = "Trung bình cộng: " + TBC;
})

//BAI 3
// Input: 
// - So USD do người dùng nhập vào từ id = money gán vào biến money
// Process:
// - Quy đổi USD sang VND bằng cách nhân với 23500
// Output:
// - Xuất ra màn hình tiền VND

document.getElementById('btn3').addEventListener('click', function(){
    let money = document.getElementById('money').value;
    let VND = money * 23500;
    document.getElementById('VND').innerHTML = "Tiền VND: " + VND;
})

//BAI 4
// Input: 
// - Chiều dài và chiều rộng của hình chữ nhật do người dùng nhập vào từ id = dai và id = rong gán vào biến dai và rong
// Process:
// - Tính chu vi của hình chữ nhật bằng cách nhân 2 với tổng của dai và rong
// - Tính diện tích của hình chữ nhật bằng cách nhân dai với rong
// Output:
// - Xuất ra màn hình chu vi và diện tích của hình chữ nhật

document.getElementById('btn4').addEventListener('click', function(){
    let dai = document.getElementById('dai').value*1;
    let rong = document.getElementById('rong').value*1;
    let CV = (dai + rong) * 2;
    let DT = dai * rong;
    document.getElementById('CV').innerHTML = "Chu vi: " + CV;
    document.getElementById('DT').innerHTML = "Diện tích: " + DT;
})

//BAI 5
// Input: 
// - Số do người dùng nhập vào từ id = kyso gán vào biến kyso
// Process:
// - Tách số vừa nhập thành các ký số hàng chục và hàng đơn vị
// - Hàng đơn vị = kyso % 10
// - Hàng chục = Math.floor(kyso / 10) Math.floor làm tròn xuống
// - Tính tổng của 2 số được tách ra từ 1 số ban đâu người dùng nhập vào
// Output:
// - Xuất ra màn hình tổng của 2 số được tách ra từ 1 số ban đàua người dùng nhập vào

document.getElementById('btn5').addEventListener('click', function(){
    let kyso = document.getElementById('kyso').value;
    let donvi = kyso % 10;
    let chuc = Math.floor(kyso / 10);
    let tong = donvi + chuc;
    document.getElementById('TongKS').innerHTML = "Tổng: " + tong;
})
