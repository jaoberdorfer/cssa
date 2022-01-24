const atargetDiv = document.getElementById("ashow");
const abtn = document.getElementById("alink");

/*btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  }
  else {
    targetDiv.style.display = "block";
  }
};*/

abtn.onclick = function () {
  if (atargetDiv.style.display == "none") {
    atargetDiv2.style.display = "none";
    atargetDiv3.style.display = "none";
    atargetDiv4.style.display = "none";
    atargetDiv5.style.display = "none";
    atargetDiv6.style.display = "none";
    atargetDiv.style.display = "block";
  }
  else {
    atargetDiv.style.display = "none";
  }
};

const atargetDiv2 = document.getElementById("ashow2");
const abtn2 = document.getElementById("alink2");

abtn2.onclick = function () {
  if (atargetDiv2.style.display == "none") {
     atargetDiv.style.display = "none";
     atargetDiv3.style.display = "none";
     atargetDiv4.style.display = "none";
     atargetDiv5.style.display = "none";
     atargetDiv6.style.display = "none";
     atargetDiv2.style.display = "block";

  }
  else {
    atargetDiv2.style.display = "none";
  }
};

const atargetDiv3 = document.getElementById("ashow3");
const abtn3 = document.getElementById("alink3");

abtn3.onclick = function () {
  if (atargetDiv3.style.display == "none") {
     atargetDiv.style.display = "none";
     atargetDiv2.style.display = "none";
     atargetDiv4.style.display = "none";
     atargetDiv5.style.display = "none";
     atargetDiv6.style.display = "none";
     atargetDiv3.style.display = "block";

  }
  else {
    atargetDiv3.style.display = "none";
  }
};

const atargetDiv4 = document.getElementById("ashow4");
const abtn4 = document.getElementById("alink4");

abtn4.onclick = function () {
  if (atargetDiv4.style.display == "none") {
     atargetDiv.style.display = "none";
     atargetDiv2.style.display = "none";
     atargetDiv3.style.display = "none";
     atargetDiv5.style.display = "none";
     atargetDiv6.style.display = "none";
     atargetDiv4.style.display = "block";

  }
  else {
    atargetDiv4.style.display = "none";
  }
};

const atargetDiv5 = document.getElementById("ashow5");
const abtn5 = document.getElementById("alink5");

abtn5.onclick = function () {
  if (atargetDiv5.style.display == "none") {
     atargetDiv.style.display = "none";
     atargetDiv2.style.display = "none";
     atargetDiv3.style.display = "none";
     atargetDiv4.style.display = "none";
     atargetDiv6.style.display = "none";
     atargetDiv5.style.display = "block";

  }
  else {
    atargetDiv5.style.display = "none";
  }
};

const atargetDiv6 = document.getElementById("ashow6");
const abtn6 = document.getElementById("alink6");

abtn6.onclick = function () {
  if (atargetDiv6.style.display == "none") {
     atargetDiv.style.display = "none";
     atargetDiv2.style.display = "none";
     atargetDiv3.style.display = "none";
     atargetDiv4.style.display = "none";
     atargetDiv5.style.display = "none";
     atargetDiv6.style.display = "block";

  }
  else {
    atargetDiv6.style.display = "none";
  }
};


