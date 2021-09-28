const targetDiv = document.getElementById("mshow");
const btn = document.getElementById("mlink");

/*btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  }
  else {
    targetDiv.style.display = "block";
  }
};*/

btn.onclick = function () {
  if (targetDiv.style.display == "none") {
    targetDiv2.style.display = "none";
    targetDiv3.style.display = "none";
    targetDiv4.style.display = "none";
    targetDiv.style.display = "block";
  }
  else {
    targetDiv.style.display = "none";
  }
};

const targetDiv2 = document.getElementById("mshow2");
const btn2 = document.getElementById("mlink2");

btn2.onclick = function () {
  if (targetDiv2.style.display == "none") {
     targetDiv.style.display = "none";
     targetDiv3.style.display = "none";
     targetDiv4.style.display = "none";
     targetDiv2.style.display = "block";

  }
  else {
    targetDiv2.style.display = "none";
  }
};

const targetDiv3 = document.getElementById("mshow3");
const btn3 = document.getElementById("mlink3");

btn3.onclick = function () {
  if (targetDiv3.style.display == "none") {
     targetDiv.style.display = "none";
     targetDiv2.style.display = "none";
     targetDiv4.style.display = "none";
     targetDiv3.style.display = "block";

  }
  else {
    targetDiv3.style.display = "none";
  }
};

const targetDiv4 = document.getElementById("mshow4");
const btn4 = document.getElementById("mlink4");

btn4.onclick = function () {
  if (targetDiv4.style.display == "none") {
     targetDiv.style.display = "none";
     targetDiv2.style.display = "none";
     targetDiv3.style.display = "none";
     targetDiv4.style.display = "block";

  }
  else {
    targetDiv4.style.display = "none";
  }
};


