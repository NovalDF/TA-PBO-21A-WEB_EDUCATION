var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Selamat Pagi';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Selamat Sore';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Selamat Malam';

document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';