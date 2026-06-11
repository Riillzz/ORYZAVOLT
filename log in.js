function login()
{
    const username =
    document.getElementById(
        "username").value;

    const password =
    document.getElementById(
        "password").value;

    if(
        username === "admin"
        &&
        password === "oryzavolt123"
    )
    {
        window.location.href =
        "index.html";
    }
    else
    {
        document.getElementById(
            "error")
            .innerHTML =
            "Username atau Password Salah";
    }
}