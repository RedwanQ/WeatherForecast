const button = document.querySelector('.button')
const InputValue = document.querySelector(".inputValue")
const name = document.querySelector(".name")
const desc = document.querySelector(".desc")
const temp = document.querySelector(".temp")
const hum = document.querySelector(".humidity")

button.addEventListener('click', function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${InputValue.value}&appid=0f957aabcd525cf16c95bb84b6ba5f3d&units=imperial`)
    .then(res => res.json())
    .then(data => {
        const nameValue = data['name'];
        const tempValue = data['main']['temp'];
        const descValue = data['weather'][0]['description'];
        const humValue = data['main']['humidity']

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        hum.innerHTML = humValue;
    })
    
.catch(err => alert("Wrong City Name"))
});

