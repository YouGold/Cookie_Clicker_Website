/* Elements */
var Cookie = document.getElementById("Cookie")
var Cookies_Display = document.getElementById("Cookies_Display")
var Purchase_Buttons = document.getElementsByClassName("Purchase_Button")
var h4_elements = document.getElementsByTagName("h4")

/* Values */
let Cookies = 0

let Quantities = 
{
["Existing_Quantities"]: 
{
[0]: 
{
["GetName"]: "Clicks",
["Cost"]: 100,
},

[1]: 
{
["GetName"]: "Grandmas",
["Cost"]: 250,
},
},

["Clicks"]: 0,
["Grandmas"]: 0
}

/* Script */
for (let index = 0; index < Purchase_Buttons.length; index++) {
    Set_Purchase_Button(Purchase_Buttons[index],Quantities["Existing_Quantities"][index], Quantities["Existing_Quantities"][index].Cost)
}

setInterval("Change_Text_Display()",50)
setInterval("Give_Cookies()",0.01)

Cookie.onclick = function() 
{
    let Quantity_Amount = 0
    for (let index = 0; index < Purchase_Buttons.length; index++) 
        {
            Quantity_Amount += Quantities[Quantities["Existing_Quantities"][index].GetName];
        }

        Cookies = Cookies + (Quantity_Amount * Quantity_Amount) + 1 
}

/* Functions */

function Change_Text_Display() 
{
    Cookies_Display.textContent = "Cookies: " + Cookies

    let Quantity_Amount = 0
    for (let index = 0; index < Purchase_Buttons.length; index++) {
        Quantity_Amount = Quantities[Quantities["Existing_Quantities"][index].GetName];
        Purchase_Buttons[index].value = "Purchase a " + Quantities["Existing_Quantities"][index].GetName.replace(/s$/, "") + " here: Costs " + (Quantity_Amount + 1) * Quantities["Existing_Quantities"][index].Cost * 2 + " Cookies"
        h4_elements[index].textContent = Quantities["Existing_Quantities"][index].GetName + ": " + Quantity_Amount
    }
}

function Give_Cookies() 
{

    let Quantity_Amount = 0
    for (let index = 0; index < Purchase_Buttons.length; index++) 
        {
            Quantity_Amount = Quantity_Amount + Quantities[Quantities["Existing_Quantities"][index].GetName];
            Cookies = Cookies + (Quantity_Amount * Quantity_Amount / 4) * Quantities["Existing_Quantities"][index].Cost * 0.1
        }
}

function Purchase_Quantity(Quantity_Amount, Quantity, Cost)
{

    if (Cookies >= (Quantity_Amount + 1) * Quantity.Cost * 2) 
        {
            Quantities[Quantity.GetName] += 1
            Cookies -= (Quantity_Amount + 1) * Quantity.Cost * 2
        }
}

function Set_Purchase_Button(Button, Quantity, Cost)
{Button.onclick = function() 
{
    
    let Quantity_Amount = Quantities[Quantity.GetName]; 
    
    Purchase_Quantity(Quantity_Amount,Quantity,Cost)
}}