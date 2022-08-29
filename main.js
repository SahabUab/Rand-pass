// app require
const charSet =
    "ABCDE!@#$%^&*()_+{}[]|/.FGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  showPass = document.getElementById("showPass"),
  passLenghtShow = document.getElementById("showPassValue"),
  card = document.querySelector(".card"),
  copyright = document.getElementById("copyright");
let defualtPassSize = 6;

// genaret password
function randomString(len, charSet) {
  charSet = charSet;
  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

// pass size
function passLenght(e) {
  let value = e.value;
  passLenghtShow.value = value;
  defualtPassSize = value;
  showPass.value = randomString(value, charSet);
  passValid();
}

// genaret defult 6 password after loading window
window.onload = () => {
  passLenghtShow.value = defualtPassSize;
  showPass.value = randomString(defualtPassSize, charSet);
  passValid();
  copyrightValid();
};

// genaret new password by click new password button
function newPass() {
  showPass.value = randomString(defualtPassSize, charSet);
}

function passValid() {
  if (defualtPassSize < 6) {
    card.style.borderColor = "#C70039";
  } else if (defualtPassSize < 8) {
    card.style.borderColor = "#FFC300";
  } else {
    card.style.borderColor = "#239B56";
  }
}

// password copy
function copy(e) {
  navigator.clipboard.writeText(showPass.value).then(() => {
    e.classList.add("active");
    setTimeout(() => {
      e.classList.remove("active");
    }, 2000);
  });
}

// copyright
function copyrightValid() {
  let href = copyright.getAttribute("href");
  let text = copyright.innerText;
  if (
    href != "https://web.facebook.com/profile.php?id=100071042731343" ||
    text != "sahab_uab"
  ) {
    copyright.setAttribute(
      "href",
      "https://web.facebook.com/profile.php?id=100071042731343"
    );
    copyright.innerText = "sahab_uab";
  }
}
