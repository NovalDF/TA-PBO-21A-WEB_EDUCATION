// Inisialisasi variabel komponen
let txt_user = document.querySelector("#txt_user");
let txt_Passwoard = document.querySelector("#txt_Passwoard");

// Fungsi untuk membatasi input hanya menerima huruf
const keyUsername = (event) => {
  // Menggunakan regular expression untuk memeriksa apakah input merupakan huruf
  const regex = /^[a-zA-Z]+$/;
  return regex.test(event.key);
};

// Fungsi untuk membatasi input hanya menerima huruf dan angka
const keyPassword = (event) => {
  // Menggunakan regular expression untuk memeriksa apakah input merupakan huruf dan angka
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(event.key);
};

// Fungsi untuk berpindah dari username ke password saat menekan Enter
const keyEnter = (event, component) => {
  if (event.key == "Enter") {
    component.focus();
  }
};
