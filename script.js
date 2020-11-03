const input = document.querySelector("input");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  input.value = genaratePassword(20);
});

const genaratePassword = (numberLength) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890,><?;=+-_!@#$%^&*~";
  let password = "";

  for (let i = 0; i < numberLength; i++) {
    let randomPositionOfString = Math.floor(Math.random() * charset.length + 1);

    password += charset.charAt(randomPositionOfString);
  }

  return password;
};

const copyTextAll = () => {
  var copyText = document.getElementById("passwordText");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Text has been Copied 😤");
};
