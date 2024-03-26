// TEST
// alert ("ciao")

const sendBtnElem = document.getElementById("send-btn") //obeject | null
console.log(sendBtnElem)

sendBtnElem.addEventListener("click", function(){

    // RACCOLTA DATI
    const numberkmInputElem = document.getElementById("numberKm")//obeject | null
    console.log(numberkmInputElem);

    const numberKmValue = parseInt(numberkmInputElem.value) //number
    console.log (numberKmValue);

    const ageUserInputElem = document.getElementById("user-age")//obeject | null
    console.log(ageUserInputElem);

    const ageUserValue = parseInt(ageUserInputElem.value) //number
    console.log (ageUserValue);
    
    // ESECUZIONE DEL PROGRAMMA
    const priceTicket = numberKmValue * 0.21; //number
    console.log(priceTicket, typeof priceTicket);
    
    let finalPrice = priceTicket;
    
    if (ageUserValue < 18) {
        finalPrice = priceTicket - (priceTicket * 20 / 100)
        console.log("Prezzo scontato Minorenne");
    } else if (ageUserValue > 65) {
        finalPrice = priceTicket - (priceTicket * 40 / 100)
        console.log("Prezzo scontato Anziano");
    } else {
        finalPrice = priceTicket;
    }
    
    finalPrice = finalPrice 
    
    console.log(finalPrice.toFixed(2));
    
    document.getElementById("result").innerHTML = finalPrice.toFixed(2);

})
