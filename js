function sendWhatsApp() {

let name = document.querySelector('input[placeholder="الاسم"]').value;
let phone = document.querySelector('input[placeholder="رقم الهاتف"]').value;
let device = document.querySelector('input[placeholder="نوع الجهاز"]').value;
let problem = document.querySelector('textarea').value;


let request = {
    name: name,
    phone: phone,
    device: device,
    problem: problem,
    status: "طلب جديد"
};


localStorage.setItem(
    "sanadRequest",
    JSON.stringify(request)
);


let message =
"طلب صيانة SANAD MOBILE\n\n" +
"الاسم: " + name +
"\nالجهاز: " + device +
"\nالمشكلة: " + problem;


let url =
"https://wa.me/962793939312?text=" +
encodeURIComponent(message);


window.open(url, "_blank");

}
function saveLocation(lat, lon){

let request =
JSON.parse(localStorage.getItem("sanadRequest")) || {};


request.latitude = lat;
request.longitude = lon;
saveLocation(lat, lon);

localStorage.setItem(
"sanadRequest",
JSON.stringify(request)
);

}
