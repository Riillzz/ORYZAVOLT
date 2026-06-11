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
        "Dashboard.html";
    }
    else
    {
        document.getElementById(
            "error")
            .innerHTML =
            "Username atau Password Salah";
    }
}

function togglePassword()
{
    const password =
        document.getElementById(
            "password");

    if(password.type === "password")
    {
        password.type = "text";
    }
    else
    {
        password.type = "password";
    }
}

function togglePassword()
{
    const password =
    document.getElementById(
        "password");

    const eyeIcon =
    document.getElementById(
        "eyeIcon");

    eyeIcon.classList.add("fa-eye-slash");
    
    if(password.type === "password")
    {
        password.type = "text";

        eyeIcon.classList.remove(
            "fa-eye-slash");

        eyeIcon.classList.add(
            "fa-eye");
    }
    else
    {
        password.type =
            "password";

        eyeIcon.classList.remove(
            "fa-eye");

        eyeIcon.classList.add(
            "fa-eye-slash");
    }
}