const heading = document.querySelector('h1')
const logo = document.querySelector('.logo')
const text = document.querySelector('.text')
const para = document.querySelector('p')
const icons = document.querySelectorAll('.icon')

let tl = new TimelineLite()

tl.from(heading, 2, {marginLeft: -800})
.from(logo, 2, {marginLeft: -820}, 'second')
.from(text, 2, {marginRight: -800}, 'second')
.from(para, 2, {opacity: 0})
.from(icons, 2, {opacity: 0})