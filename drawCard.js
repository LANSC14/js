var totalCount = 0;
var ssrCount = 0;
var srCount = 0;
var rCount = 0;
var nCount = 0;
var oCount = 0;
var wallet = 100;
function updateCount() {
  document.getElementById("count").innerHTML = "撒幣統計: " + totalCount +
    "<br>太玄啦否希: " +oCount +
    "<br>習撒幣: " + ssrCount +
    "<br>蔡英九: " + srCount +
    "<br>賴龜龜: " + rCount +
    "<br>核彈吃到飽: " + nCount +
    "<br>海地國庫: $" + wallet;
    
}

function one() {
  if (wallet >= 10) {
    draw(1);
  } else {
    alert("大撒幣以捐光，增加大撒幣繼續供養海地!");
  }
}

function ten() {
  if (wallet >= 100) {
    draw(10);
  } else {
    alert("大撒幣以捐光，增加大撒幣繼續供養海地!");
  }
}

function draw(numDraws) {
  // 清除恭喜图片
  document.getElementById("congrats").innerHTML = "";

  wallet -= numDraws * 10;
  text = "";
  var congrats = false; // 檢查是否抽到O
  for (i = 1; i <= numDraws; i++) {
    x = Math.floor(Math.random() * 100) + 1;
    if (x <= 1) {
      o();
      congrats = true; // 若抽到o則為true
    } else if (x <= 5) {
      ssr();
    } else if (x <= 10) {
      sr();
    } else if (x <= 50) {
      r();
    } else {
      n();
    }
  }
  totalCount += numDraws;
  updateCount();
  document.getElementById("demo").innerHTML = text;

  // 若抽到o恭喜
  if (congrats) {
    setTimeout(function() {
      var congratsImage = document.createElement("img");
      congratsImage.src = "img/6.jpg"; 
      congratsImage.alt = "Congratulations!";
      congratsImage.style.width = "200px";
      congratsImage.style.height = "auto";
      document.getElementById("congrats").appendChild(congratsImage);
    }, 200); // 延遲
  }
}
function ssr() {
  text += "<img src='img/1.jpg' alt='SSR' width='200px' height='200px'>";
  ssrCount++;
}

function sr() {
  text += "<img src='img/2.jpg' alt='SR' width='200px' height='200px'>";
  srCount++;
}

function r() {
  text += "<img src='img/3.jpg' alt='R' width='200px' height='200px'>";
  rCount++;
}

function n() {
  text += "<img src='img/4.jpg' alt='N' width='200px' height='200px'>";
  nCount++;
}

function o() {
  text += "<img src='img/5.jpg' alt='N' width='200px' height='200px'>";
  oCount++;
}

function addFunds() {
  var addedFunds = prompt("為您的海地新增大撒幣:");
  // 檢查輸入是否為大於0的有效整數
  if (addedFunds !== null && addedFunds.trim() !== "" && /^\d+$/.test(addedFunds) && parseInt(addedFunds) > 0) {
    wallet += parseInt(addedFunds);
    updateCount();
    alert("海地已與您成為邦交國!");
  } else {
    alert("輸入錯誤，即將斷交!");
  }
}
