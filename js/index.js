// http eski variant hozirda esa https bu s sertifikat ximoya vazifasini bildiradi yani bunda ximoya kuchliroq
// DNS server bu yozuvli manzillarni api manzilga yani (raqamlarga) o'zgartiruvchi server 
// AJAX kengtmasi bu asinhrom javascript and xml
// api lar ikki turda bo'ladi rest api and soap api farqlari
// Soap api malumotlar xml rest keladigan malumotlar json formatda keladi va hozirda rest api ishlatilinadi
const api = "https://dummyjson.com/product";
// Promise()
// Promise ichida resolve va reject bular funksiyalar hisoblanadi
const vada = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("bajarildi! uraaa")
    }, 5000)

});
vada.
