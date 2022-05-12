const container = document.getElementById('container')
const colors = ['#F73D93','#16003B','#FFE59D','#EC994B','#F32424','#F9D923','#800000', '#FF0000', '#800080','#FF00FF','#008000','#00FF00','	#FFFF0','#00FFFF']
const circles = 500

for(let i = 0; i < circles; i++){
    const circle = document.createElement('div')
    circle.classList.add('circle')

    circle.addEventListener('mouseover', () => setColor(circle))

    circle.addEventListener('mouseout', () => removeColor(circle))

    container.appendChild(circle)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2 px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2pz #000'

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}