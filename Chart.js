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
            label:'Suhu °C',
            data:[]
        }]
    }
});

const voltChart =
new Chart(voltCtx,{
    type:'line',
    data:{
        labels:[],
        datasets:[{
            label:'Tegangan V',
            data:[]
        }]
    }
});