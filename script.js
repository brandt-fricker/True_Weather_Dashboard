var apikey = "2d3fc2e3e0711ca594c4d9d5c7d37e7f"
let citySearch = document.querySelector("#city").value;
function userCity() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch+ "&units=imperial&appid=2d3fc2e3e0711ca594c4d9d5c7d37e7f";
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + citySearch+ '&units=imperial&appid=2d3fc2e3e0711ca594c4d9d5c7d37e7f')
.then(response => response.json())
.then(data => console.log(data));
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
        ul.appendChild(li);

    } else {
        alert("Please enter a valid city")
    }








    // Use the entry to call the openweather API


    // Process the results from the API


    // Display the (format) results in the output div


}



    