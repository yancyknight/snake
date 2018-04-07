let cellType = {
    blank: 0,
    obstacle: 1,
    food: 2,
    snake: 3,
    wall: 4
}

let colors = [
    // blank
    {
        fill: 'rgb(0,0,255)',
        stroke: 'rgb(0,0,255)'
    },
    // obstacle
    {
        fill: 'rgb(0,255,0)',
        stroke: 'rgb(0,255,0)'
    },
    // food
    {
        fill: '#ff9900',
        stroke: '#ff9900'
    },
    // snake
    {
        fill: '#fff',
        stroke: '#000',
    },
    // wall
    {
        fill: 'rgb(255,0,0)',
        stroke: 'rgb(255,0,0)'
    },
    
]

module.exports = {
    cellType,
    colors
}