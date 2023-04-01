function updateTime() {
    // Vatican
    let vaticanElement = document.querySelector("#vatican");
    let vaticanDateElement = vaticanElement.querySelector(".date");
    let vaticanTimeElement = vaticanElement.querySelector(".time");
    let vaticanTime = moment().tz("Europe/Vatican");
    vaticanDateElement.innerHTML = vaticanTime.format("MMMM Do YYYY");
    vaticanTimeElement.innerHTML = `${vaticanTime.format("HH:mm:ss [<small>]A[</small>]")}`;
  
    // Jerusalem
    let jerusalemElement = document.querySelector("#jerusalem");
    let jerusalemDateElement = jerusalemElement.querySelector(".date");
    let jerusalemTimeElement = jerusalemElement.querySelector(".time");
    let jerusalemTime = moment().tz("Asia/Jerusalem");
    jerusalemDateElement.innerHTML = jerusalemTime.format("MMMM Do YYYY");
    jerusalemTimeElement.innerHTML = `${jerusalemTime.format("HH:mm:ss [<small>]A[</small>]")}`;
  }
  
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    <div class="city">
      <div>
        <h2>${cityTimeZone}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("HH:mm:ss [<small>]A[</small>]")}</div>
    </div>
    ;
  }

  updateTime();
  setInterval(updateTime, 1000);

  let citiesSelectElement = document.querySelector("#cities");
  citiesSelectElement.addEventListener("change", updateCity);
  let intervalHandle = setInterval(updateCity, 1000);

