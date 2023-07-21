const yourDate = new Date("2023-05-20T00:00:00");
const gkBirthDate = new Date("2003-05-30T00:00:00");
const mlBirthDate = new Date("2004-03-03T00:00:00");
var gkAge, mlAge;
var today = new Date();
// music = ['music'];

document.addEventListener("DOMContentLoaded",function () {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()}-${yourDate.getMonth() > 8? yourDate.getMonth() + 1: "0" + (yourDate.getMonth() + 1)}-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " DAYS";

    gkAge = today.getFullYear() - gkBirthDate.getFullYear();
    mlAge = today.getFullYear() - mlBirthDate.getFullYear();

    //calculate gk age
    if (today.getMonth() < gkBirthDate.getMonth()) {
      gkAge = gkAge - 1;
    } else if (today.getMonth() == gkBirthDate.getMonth()) {
      if (today.getDate() < gkBirthDate.getDate()) {
        gkAge = gkAge - 1;
      }
    }

    //calculate ml age
    if (today.getMonth() < mlBirthDate.getMonth()) {
      mlAge = mlAge - 1;
    } else if (today.getMonth() == mlBirthDate.getMonth()) {
      if (today.getDate() < mlBirthDate.getDate()) {
        mlAge = mlAge - 1;
      }
    }

    document.querySelector("agegk").textContent = gkAge + " ♊︎";
    document.querySelector("ageml").textContent = mlAge + " ♓︎";

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
        sec = Math.floor((today - yourDate) / 1000) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
        min > 9 ? min : "0" + min
      }:${sec > 9 ? sec : "0" + sec}`;
    }
    olock();
    var timer = setInterval(function () {
      olock();
    }, 1000);
    // document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

    // document.getElementsByTagName("body")[0].insertAdjacentHTML(
    //       "beforeend",
    //       "<div id='mask'></div>"
    // );
  },
  false
);
