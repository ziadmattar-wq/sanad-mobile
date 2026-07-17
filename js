function sendWhatsApp() {

let message =
"طلب صيانة جديد من SANAD MOBILE";

let phone = "962793939312";

let url =
"https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");

}
