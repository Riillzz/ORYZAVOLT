const tempCtx =
document.getElementById("tempChart");

const voltCtx =
document.getElementById("voltChart");

const tempChart =
new Chart(tempCtx,{
    type:'line',

    data:{
        labels:[],
        datasets:[{
            label:'Suhu Reaktor (°C)',
            data:[],
            borderWidth:3,
            tension:0.3
        }]
    },

    options:{
        responsive:true,

        plugins:{
            legend:{
                display:true
            }
        },

        scales:{
            y:{
                beginAtZero:true,
                suggestedMax:900
            }
        }
    }
});

const voltChart =
new Chart(voltCtx,{
    type:'line',

    data:{
        labels:[],
        datasets:[{
            label:'Tegangan Generator (V)',
            data:[],
            borderWidth:3,
            tension:0.3
        }]
    },

    options:{
        responsive:true,

        plugins:{
            legend:{
                display:true
            }
        },

        scales:{
            y:{
                beginAtZero:true,
                suggestedMax:250
            }
        }
    }
});