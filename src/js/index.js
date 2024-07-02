// El styles lo importamos aquí, ya se carga después al compilar todo
import { data } from 'autoprefixer';
import '../scss/styles.scss';

const rootStyles = document.documentElement.style
const hourElement = document.getElementById('hour')
const minutesElement = document.getElementById('minutes')
const dayElement = document.getElementById('day')
const dateElement = document.getElementById('date')
const monthElement = document.getElementById('month')
const yearElement = document.getElementById('year')

const pointerHourElement = document.getElementById('pointer--hour')
const pointerMinuteElement = document.getElementById('pointer--minutes')
const pointerSecondElement = document.getElementById('pointer--seconds')

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const changeDate = () => {
    const date = new Date()
    
    console.log(date.getMinutes())
    if(date.getMinutes().toString().length < 2) {
        minutesElement.textContent = '0' + date.getMinutes()
    } else {
        minutesElement.textContent = date.getMinutes()
    }

    if(date.getHours().toString().length < 2) {
        hourElement.textContent = '0' + date.getHours()
    } else {
        hourElement.textContent = date.getHours()
    }



    dayElement.textContent = daysOfWeek[date.getDay() - 1]
    dateElement.textContent = date.getDate()
    monthElement.textContent = months[date.getMonth()]
    yearElement.textContent = date.getFullYear()

    const degSeconds = date.getUTCSeconds() * 6
    const degMinutes = date.getUTCMinutes() * 6
    const degHours = date.getHours() * 30
    rootStyles.setProperty('--rotate-second', degSeconds + 'deg')
    rootStyles.setProperty('--rotate-minute', degMinutes + 'deg')
    rootStyles.setProperty('--rotate-hour', degHours + 'deg')
    console.log()
}

const changeInfo = setInterval(() => {
    changeDate()
}, 1000)