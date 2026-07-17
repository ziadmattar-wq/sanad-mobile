function sendWhatsApp() {

let message =
"طلب صيانة جديد من SANAD MOBILE";

let phone = "962793939312";

let url =
"https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");

}
function getLocation() {

const locationText = document.getElementById("location");


if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;


locationText.innerHTML =
"تم تحديد موقعك بنجاح 📍";
function changeLanguage(){

let html = document.documentElement;

if(html.lang === "ar"){

html.lang = "en";
html.dir = "ltr";

}else{

html.lang = "ar";
html.dir = "rtl";

}

}

console.log(
"Latitude: " + lat,
"Longitude: " + lon
);


});


} else {

locationText.innerHTML =
"المتصفح لا يدعم تحديد الموقع";

}

}
