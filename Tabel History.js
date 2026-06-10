function tambahHistory(
    temp,
    volt,
    moist,
    press)
{
    const table =
        document.getElementById(
            "historyTable");

    const row =
        table.insertRow(0);

    const waktu =
        new Date()
        .toLocaleTimeString();

    row.insertCell(0).innerHTML =
        waktu;

    row.insertCell(1).innerHTML =
        temp + " °C";

    row.insertCell(2).innerHTML =
        volt + " V";

    row.insertCell(3).innerHTML =
        moist + " %";

    row.insertCell(4).innerHTML =
        press + " Bar";

    if(table.rows.length > 10)
    {
        table.deleteRow(10);
    }
}