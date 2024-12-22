/* Elements */
var Save_Button = document.getElementById("Save_Button")


/* Script */
Save_Button.onclick = function() 
{

    Save_Data()
    
}

Load_Data()



/* Functions */
function Save_Data() 
{
    try {
        localStorage.setItem("Cookies_Data",Cookies)
        localStorage.setItem("Clicks",Quantities.Clicks)
        localStorage.setItem("Grandmas",Quantities.Grandmas)
    } catch (error) {
        console.error("Data Error" + error)
    }
}

function Load_Data() 
{
    Cookies = parseInt(localStorage.getItem("Cookies_Data"))
    Quantities.Clicks = parseInt(localStorage.getItem("Clicks"))
    Quantities.Grandmas = parseInt(localStorage.getItem("Grandmas"))
}