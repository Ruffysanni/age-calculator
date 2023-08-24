let userInput = document.getElementById("date");
let btnEl = document.querySelector("button");
let resultEl = document.querySelector("#result");
userInput.max = new Date().toISOString().split("T")[0];

//Create the function to calculate the age
function calculateAge(){
    let birthday = new Date(userInput.value);

    //get the variable for the month, year and date=
    let date1 = birthday.getDate();
    let month1 = birthday.getMonth() + 1;
    let year1 = birthday.getFullYear();

    //get today's date
    let today = new Date();
    //get variable for the current month, year and date
    let date2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    let yearDiff, monthDiff, dateDiff;

    //Calculate year difference
    yearDiff = year2 - year1;

    //Check the month difference
    if(month2 >= month1){
        monthDiff = month2 - month1;
    } else {
        yearDiff--;
        monthDiff = 12 + month2 - month1;
    }

    //Check the days difference
    if(date2 >= date1){
        dateDiff = date2 - date1;
    } else {
        monthDiff--;
        dateDiff = getDaysInMonth(year1, month1) + date2 - date1;
    }
    if(monthDiff < 0){
        monthDiff = 11;
        yearDiff--
    }
    console.log(dateDiff, monthDiff, yearDiff);
    resultEl.innerHTML = `You're currently <span>${yearDiff}</span> years, <span>${monthDiff}</span> months and <span>${dateDiff}</span> days old!`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
btnEl.addEventListener("click", function(){
    calculateAge();
})
