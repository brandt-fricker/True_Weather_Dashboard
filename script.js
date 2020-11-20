 var apikey = "2d3fc2e3e0711ca594c4d9d5c7d37e7f"



function userCity(citySearch) {
    $(".5days-container").empty()
    // let citySearch = document.querySelector("#city").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid="+apikey;

    
    // Get the entry from the input field.
    // let citySearch = document.querySelector("#city").value;
    
    // Make sure the entry is "valid"
    // Trim off white-space
    // Check length
    // If too short, warn user and return
    // Store to localstorage
    // Update the recent searches area
    if (citySearch !== "" || citySearch !== undefined) {
        citySearch.trim();
        localStorage.setItem("UserCitySelection", JSON.stringify(citySearch));
        var ul = document.getElementById("myUL");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(citySearch));
        li.classList.add("searchTerm")
        ul.appendChild(li);
        $.ajax({
            method: "GET",
            url: queryURL,
        }).then(function (burrito) {
            console.log(burrito)
            var cityTheUserSelected = burrito.name;
            var theTemp = burrito.main.temp;
            var theHumidity = burrito.main.humidity
            var theWindSpeed = burrito.wind.speed
            var latt=burrito.coord.lat
            var long=burrito.coord.lon 
            var weatherIcon = burrito.weather[0].icon
            console.log(cityTheUserSelected)
            var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?lat="+latt+"&lon="+long+"&appid="+apikey;
            $.ajax({
                method:"GET",
                url: uvIndex,
            }).then(function(uv){
                console.log(uv);
                var cityUv = uv.value;
                var d  = new Date();
                //var d = $.format.date(new Date(), 'dd/MM/yyyy');
                var dd = d.getDate(); 
                var mm = d.getMonth() + 1;
                var yyyy = d.getFullYear(); 
                var newHtml = `
                    <h3 class="cardBody" id="cityName">${cityTheUserSelected} (${mm}/${dd}/${yyyy})</h3>
                    <img src=" http://openweathermap.org/img/wn/${weatherIcon}@2x.png">
                    <p class="cardBody">Temperature: ${theTemp}</p>
                    <p class="cardBody">Humidity: ${theHumidity}</p>
                    <p class="cardBody">Wind Speed: ${theWindSpeed} MPH</p>
                    <p class="cardBody">UV Index: ${cityUv}</p>
                    `;
                    
                // Insert HTML into div
                $("#currentWeather").html(newHtml);

                var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid="+apikey;
    
                $.ajax({
                    method:"GET",
                    url: queryURLForecast,
                }).then(function(forecast){
                    var listOfDays = forecast.list
                     console.log(listOfDays[3])
                     var dayAtNoon=""
                     var newTheTemp=""
                     var newTheHumidity=""
                     var newWeatherIcon=""
                     for (let i = 3; i < listOfDays.length; i+=8) {
                        var dayAtNoon = dayAtNoon+ listOfDays[i].dt_txt;
                       var newTheTemp = newTheTemp+ listOfDays[i].main.temp;
                       var newTheHumidity =newTheHumidity+ listOfDays[i].main.humidity;
                      var newWeatherIcon =newWeatherIcon+listOfDays[i].weather[0].icon
                        
                 }
                         
                        
                        

                    new5day = `<h3 class="cardBody" id="cityName">${cityTheUserSelected}</h3>
                    <img src=" http://openweathermap.org/img/wn/${newWeatherIcon}@2x.png">
                    <p class="cardBody">Temp: ${newTheTemp}</p>
                    <p class="cardBody">Humidity: ${newTheHumidity}</p>`
                    $("#5days").html(new5day)
    
    
            });
            })
        
        
        
    })} else {
        alert("Please enter a valid city")
    }
}


$('#searchBtn').on('click', function(){
    var city = $('#city').val();
    userCity(city);
});
$(document).on("click", ".searchTerm", function(event){
    console.log(event);
    var city = event.target.textContent;
    userCity(city);

})



