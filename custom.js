let btn = document.querySelector(".button-click");
btn.addEventListener("click", () => {
  const loginArea = document.querySelector("#login-area");
  loginArea.style.display = "none";
  const tranjectionARea = document.querySelector(".tranjection-area");
  tranjectionARea.style.display = "block";
});

// deposit btn

let depositBtn = document.querySelector(".deposit-btn");
depositBtn.addEventListener("click", () => {
  let depositAmmount = parseFloat(document.getElementById("deposit").value);

  let currentDepositAmount = parseFloat(
    document.getElementsByClassName("curresnt-deposit")[0].innerText
  );

  let depostCurAmount = depositAmmount + currentDepositAmount;
  document.getElementsByClassName("curresnt-deposit")[0].innerText =
    depostCurAmount;

  let TotalDepositAmount = parseFloat(
    document.getElementsByClassName("total-deposit")[0].innerText
  );

  let totalCurAmount = depositAmmount + TotalDepositAmount;
  document.getElementsByClassName("total-deposit")[0].innerText =
    totalCurAmount;
});

// widthraw btn

let widthrawBtn = document.querySelector(".widthraw-btn");
widthrawBtn.addEventListener("click", () => {
  let widthrawAmmount = parseFloat(document.getElementById("widthraw").value);

  let currentWidthrawAmount = parseFloat(
    document.getElementsByClassName("withdraw-deposit")[0].innerText
  );

  let widthrawCurAmount = currentWidthrawAmount + widthrawAmmount;
  document.getElementsByClassName("withdraw-deposit")[0].innerText =
    widthrawCurAmount;

  let TotalwidthrawAmount = parseFloat(
    document.getElementsByClassName("total-deposit")[0].innerText
  );

  let totalCurAmount = TotalwidthrawAmount - widthrawAmmount;
  document.getElementsByClassName("total-deposit")[0].innerText =
    totalCurAmount;
});
