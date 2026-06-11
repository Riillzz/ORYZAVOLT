const monitoringRef =
    db.ref("ORYZAVOLT");

monitoringRef.on(
    "value",
    (snapshot) =>
{
    const data = snapshot.val();

    if(!data) return;

    const temperature =
        Number(data.temperature || 0);

    const voltage =
        Number(data.voltage || 0);

    const moisture =
        Number(data.moisture || 0);

    const pressure =
        Number(data.pressure || 0);

    document.getElementById(
        "temperature").innerHTML =
        temperature.toFixed(1) + " °C";

    document.getElementById(
        "voltage").innerHTML =
        voltage.toFixed(0) + " V";

    document.getElementById(
        "moisture").innerHTML =
        moisture.toFixed(1) + " %";

    document.getElementById(
        "pressure").innerHTML =
        pressure.toFixed(1) + " Bar";

        document.getElementById(
        "biomass").innerHTML =
        Number(data.biomass).toFixed(1) + " kg";

    const statusElement =
        document.getElementById(
            "status");

    statusElement.innerHTML =
        data.status || "OFF";

    // UPDATE CHART

    const now =
        new Date()
        .toLocaleTimeString();

    tempChart.data.labels.push(now);
    tempChart.data.datasets[0]
        .data.push(temperature);

    voltChart.data.labels.push(now);
    voltChart.data.datasets[0]
        .data.push(voltage);

    if(
        tempChart.data.labels.length > 20
    )
    {
        tempChart.data.labels.shift();

        tempChart.data.datasets[0]
            .data.shift();
    }

    if(
        voltChart.data.labels.length > 20
    )
    {
        voltChart.data.labels.shift();

        voltChart.data.datasets[0]
            .data.shift();
    }

    tempChart.update();
    voltChart.update();
});