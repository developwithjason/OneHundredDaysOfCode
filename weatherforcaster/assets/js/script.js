window.addEventListener('load', () => {
    const temp = document.getElementById('temp')
    const degree = document.getElementById('degree')
    const icon = document.querySelector('.icon')
    const desc = document.getElementById('desc')
    const area = document.querySelector('.area')
    const main = document.getElementById('main')
     

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            const proxy = 'https://cors-anywhere.herokuapp.com/'

            const api = `${proxy}https://api.darksky.net/forecast/20ab458d16e8ada526c0b2f52ad4dc50/${lat},${long}`

            fetch(api)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    const {icon, summary, temperature} = data.currently
                    // Set DOM Elements
                    console.log(data)
                    temp.textContent = temperature
                    desc.textContent = summary
                    area.textContent = data.timezone
                    // Set Icon
                    setIcons(icon, document.getElementById('icon'))
                    switch(summary) {
                        case "Clear":
                            main.style.backgroundImage = 'url("../assets/images/clear.jpg")'
                            break
                        case "Mostly Cloudy":
                            main.style.backgroundImage = 'url("../assets/images/mostly-cloudy.jpg")'
                            break
                        case "Rainy":
                            main.style.backgroundImage = 'url("../assets/images/rain.jpg")'
                            break
                        case "Sunny":
                            main.style.backgroundImage = 'url("../assets/images/sunny.jpg")'
                            break
                        case "Cloudy":
                            main.style.backgroundImage = 'url("../assets/images/cloudy.jpg")'
                        case "Partly Cloudy":
                            main.style.backgroundImage = 'url("../assets/images/partly-cloudy.jpg")'
                    }
                    
                })

        }) 
    } 
    function setIcons(icon, iconID) {
        const skycons = new Skycons({color: '#f2f2f2'})
        const currentIcon = icon.replace(/-/g,"_").toUpperCase()
        skycons.play()
        return skycons.set(iconID, Skycons[currentIcon])
    }

}) 