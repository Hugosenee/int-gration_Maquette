let graph = document.getElementById('graph').getContext('2d');

let newGraph = new Chart(graph, {
    type: 'line',
    data: {
        labels: ['5Nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov', '11Nov', '12Nov', '13Nov', '14Nov', '15Nov'],
        datasets: [
            {
                label: 'ETH',
                data: [100, 120, 110, 100, 150, 250, 300, 400, 600, 620, 600],
                borderColor: '#FAFF00',
                backgroundColor: 'transparent',
            },
            {
                label: 'BTC',
                data: [120, 260, 440, 315, 117, 390, 510, 470, 510, 650, 670],
        borderColor: '#CC00FFBD',
        backgroundColor: 'transparent',
    },
{
    label: 'BNB',
        data: [510, 690, 600, 480, 300, 210, 100, 60, 40, 120, 200],
    borderColor: '#1970D6 ',
        backgroundColor: 'transparent',
}
]
},
options: {
    legend: {
        display: false,
    },
    scales: {
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    return '$ ' + value;
                }
            }
        }]
    }
}
});


let menu = document.getElementById('burger')
let gauche = document.getElementById('gauche')
let milieu = document.getElementById('milieu')
let droite = document.getElementById('droite')
let close = document.getElementById('close')

menu.addEventListener('click', function () {
    gauche.classList.toggle('activeburger')
    milieu.classList.toggle('none')
    droite.classList.toggle('none')
    close.classList.toggle('active')

})

close.addEventListener('click', function () {
    gauche.classList.toggle('activeburger')
    milieu.classList.toggle('none')
    droite.classList.toggle('none')
    close.classList.toggle('active')
})

