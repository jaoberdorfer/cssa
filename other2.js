/* BTN FUNCTION FOR CONFERENCE */

const ctargetDiv = document.getElementById("cshow");
const cbtn = document.getElementById("clink");

cbtn.onclick = function () {
  if (ctargetDiv.style.display == "none") {
    ctargetDiv2.style.display = "none";
    ctargetDiv3.style.display = "none";
    ctargetDiv.style.display = "block";
  }
  else {
    ctargetDiv.style.display = "none";
  }
};

const ctargetDiv2 = document.getElementById("cshow2");
const cbtn2 = document.getElementById("clink2");

cbtn2.onclick = function () {
  if (ctargetDiv2.style.display == "none") {
     ctargetDiv.style.display = "none";
     ctargetDiv3.style.display = "none";
     ctargetDiv2.style.display = "block";

  }
  else {
    ctargetDiv2.style.display = "none";
  }
};

const ctargetDiv3 = document.getElementById("cshow3");
const cbtn3 = document.getElementById("clink3");

cbtn3.onclick = function () {
  if (ctargetDiv3.style.display == "none") {
     ctargetDiv.style.display = "none";
     ctargetDiv2.style.display = "none";
     ctargetDiv3.style.display = "block";

  }
  else {
    ctargetDiv3.style.display = "none";
  }
};





