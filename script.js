

function username()
{
    v = document.getElementById("command").value;

    document.getElementById("message").innerHTML = "Username is: " + v;
}

function password()
{
    v = document.getElementById("command2").value;
    if (v.length > 15)
    {
        alert('That password is too long.');
    }
    else
    {
        document.getElementById("message2").innerHTML = "Password is: **********";
    }
}