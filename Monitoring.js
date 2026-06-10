const monitoringRef =
    db.ref("ORYZAVOLT");

monitoringRef.on(
    "value",
    (snapshot)=>
{
    const data =
        snapshot.val();

    if(data)
    {
        document.getElementById(
            "temperature")
            .innerHTML =
            data.temperature + " °C";

        document.getElementById(
            "voltage")
            .innerHTML =
            data.voltage + " V";

        document.getElementById(
            "moisture")
            .innerHTML =
            data.moisture + " %";

        document.getElementById(
            "pressure")
            .innerHTML =
            data.pressure + " Bar";

        document.getElementById(
            "status")
            .innerHTML =
            data.status;

        tambahHistory(
            data.temperature,
            data.voltage,
            data.moisture,
            data.pressure
        );
    }
});

const now =
new Date().toLocaleTimeString();

tempChart.data.labels.push(now);
tempChart.data.datasets[0].data.push(
    data.temperature
);

voltChart.data.labels.push(now);
voltChart.data.datasets[0].data.push(
    data.voltage
);

if(tempChart.data.labels.length > 20)
{
    tempChart.data.labels.shift();
    tempChart.data.datasets[0]
    .data.shift();
}

if(voltChart.data.labels.length > 20)
{
    voltChart.data.labels.shift();
    voltChart.data.datasets[0]
    .data.shift();
}

tempChart.update();
voltChart.update();