var apikey = "2d3fc2e3e0711ca594c4d9d5c7d37e7f"

function userCity() {

    // Get the entry from the input field.
    let citySearch = document.querySelector("#city").value;

    // Make sure the entry is "valid"
    // Trim off white-space
    // Check length
    // If too short, warn user and return
    // Store to localstorage
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






    // Update the recent searches area


    // Use the entry to call the openweather API


    // Process the results from the API


    // Display the (format) results in the output div


}