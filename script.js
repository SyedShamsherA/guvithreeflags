document.addEventListener("DOMContentLoaded", function(){
    const flagContainer = document.getElementById("flags");

    fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(data => {
        data.forEach(country => {
            const flagImg = document.createElement("img");
            flagImg.src = country.flag.svg;
            flagImg.alt = `${country.name.common} flag`;
            console.log(flagContainer.appendChild(flagImg))
        });
    })
    .catch(error => {
        console.log('error', error)
    })
})