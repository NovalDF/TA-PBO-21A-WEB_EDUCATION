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

// Fungsi untuk menangani klik tombol Login
const login = () => {
  // Tambahkan logika login di sini
  alert("Login button clicked!");
};

// Event "keypress" pada username untuk membatasi input hanya menerima huruf
txt_user.addEventListener("keypress", (event) => {
  event.returnValue = keyUsername(event);
});

// Event "keypress" pada Password untuk membatasi input hanya menerima huruf dan angka
txt_Passwoard.addEventListener("keypress", (event) => {
  event.returnValue = keyPassword(event);
});

// Event "keyup" pada username untuk berpindah ke password saat menekan Enter
txt_user.addEventListener("keyup", (event) => {
  keyEnter(event, txt_Passwoard);
});

// Event "keydown" untuk membuka website Teknokrat saat menekan F5
window.addEventListener("keydown", (event) => {
  keyF5(event);
});