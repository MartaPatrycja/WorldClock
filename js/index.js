function updateTime() {
    // Vatican
    let vaticanElement = document.querySelector("#vatican");
    if (vaticanElement) {
      let vaticanDateElement = vaticanElement.querySelector(".date");
      let vaticanTimeElement = vaticanElement.querySelector(".time");
      let vaticanTime = moment().tz("Europe/Vatican");
  
      vaticanDateElement.innerHTML = vaticanTime.format("MMMM Do YYYY");
      vaticanTimeElement.innerHTML = vaticanTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    // Jerusalem
    let jerusalemElement = document.querySelector("#jerusalem");
    if (jerusalemElement) {
      let jerusalemDateElement = jerusalemElement.querySelector(".date");
      let jerusalemTimeElement = jerusalemElement.querySelector(".time");
      let jerusalemTime = moment().tz("Asia/Jerusalem");
  
      jerusalemDateElement.innerHTML = jerusalemTime.format("MMMM Do YYYY");
      jerusalemTimeElement.innerHTML = jerusalemTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }
  
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }

  updateTime();
  setInterval(updateTime, 1000);

  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);

