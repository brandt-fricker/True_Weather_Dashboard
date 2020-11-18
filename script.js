var apikey = "2d3fc2e3e0711ca594c4d9d5c7d37e7f"
// var citynameTest = "Atlanta"
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citynameTest + "&units=imperial&appid=2d3fc2e3e0711ca594c4d9d5c7d37e7f";


function userCity(citySearch) {
    $(".5days-container").empty()
    // let citySearch = document.querySelector("#city").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&units=imperial&appid=2d3fc2e3e0711ca594c4d9d5c7d37e7f";
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
            console.log(cityTheUserSelected)
            var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?lat="+latt+"&lon="+long+"&appid=2d3fc2e3e0711ca594c4d9d5c7d37e7f"
            $.ajax({
                method:"GET",
                url: uvIndex,
            }).then(function(uv){
                console.log(uv);
            })
        });
        
        
    } else {
        alert("Please enter a valid city")
    }








    // Use the entry to call the openweather API


    // Process the results from the API


    // Display the (format) results in the output div


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



