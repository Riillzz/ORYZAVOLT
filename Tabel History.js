function tambahHistory(
    temp,
    volt,
    moist,
    press)
{
    const table =
        document.getElementById(
            "historyTable");

    if(!table) return;

    const row =
        table.insertRow(0);

    const waktu =
        new Date()
        .toLocaleTimeString();

    row.insertCell(0).innerHTML =
        waktu;

    row.insertCell(1).innerHTML =
        Number(temp).toFixed(1) + " °C";

    row.insertCell(2).innerHTML =
        Number(volt).toFixed(0) + " V";

    row.insertCell(3).innerHTML =
        Number(moist).toFixed(1) + " %";

    row.insertCell(4).innerHTML =
        Number(press).toFixed(1) + " Bar";

    if(table.rows.length > 10)
    {
        table.deleteRow(10);
    }
}