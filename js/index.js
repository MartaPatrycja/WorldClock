function updateTime() {
    // Vatican
    let vaticanElement = document.querySelector("#vatican");
    let vaticanDateElement = vaticanElement.querySelector(".date");
    let vaticanTimeElement = vaticanElement.querySelector(".time");
    let vaticanTime = moment().tz("Europe/Vatican");
    vaticanDateElement.innerHTML = vaticanTime.format("MMMM Do YYYY");
    vaticanTimeElement.innerHTML = ${vaticanTime.format("HH:mm:ss [<small>]A[</small>]")};
  
    // Jerusalem
    let jerusalemElement = document.querySelector("#jerusalem");
    let jerusalemDateElement = jerusalemElement.querySelector(".date");
    let jerusalemTimeElement = jerusalemElement.querySelector(".time");
    let jerusalemTime = moment().tz("Asia/Jerusalem");
    jerusalemDateElement.innerHTML = jerusalemTime.format("MMMM Do YYYY");
    jerusalemTimeElement.innerHTML = ${jerusalemTime.format("HH:mm:ss [<small>]A[</small>]")};
  }
  
  updateTime();
  setInterval(updateTime, 1000);