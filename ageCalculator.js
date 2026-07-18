const date = new Date()
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDate = date.getDate();

const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn")
const result = document.getElementById("result");
const cards = document.getElementsByClassName("cards");
cards[0].classList.add("hide");
const card_items = document.getElementsByClassName("card-items")
const h1_years = document.getElementById("years");
const h1_months = document.getElementById("month");
const h1_days = document.getElementById("days");

calculateBtn.addEventListener("click", () => {
    const dobValue = dobInput.value;
    // Reset previous error state
    dobInput.style.border = "";
    result.style.color = "";
    result.innerText = "";
    cards[0].classList.add("hide");
    h1_years.innerText = ""
    h1_months.innerText = ""
    h1_days.innerText = ""

    if(!dobValue){
        result.innerText = "Please enter your birth date!";
        result.style.color = "red"
        dobInput.style.border = "2px solid red";
        return;
    }
    
    const parts = dobValue.split("-")
    
    const birthYear = Number(parts[0])
    const birthMonth = Number(parts[1]);
    const birthDate = Number(parts[2]);
    const age = ageCalculator(birthDate, birthMonth, birthYear);
    
    if(age.error){
        result.innerText = `${age.message}`;
        return;
    }
    cards[0].classList.remove("hide");
    h1_years.innerText = age.calcYear;
    h1_months.innerText = age.calcMonths;
    h1_days.innerText = age.calcDays;
    if(age.birthday){
        result.innerText = `Happy Birthday 🎉! you are ${age.calcYear} years old`
        result.classList.add("message")
    }
    else{
        result.innerText = `You are ${age.calcYear} years ${age.calcMonths} months and ${age.calcDays} days old.`
        result.classList.add("message")
    }
})

//reset
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
    dobInput.value = "";
    result.innerText = "";
    dobInput.style.border = "";
    h1_years.innerText = ""
    h1_months.innerText = ""
    h1_days.innerText = ""
    cards[0].classList.add("hide");
});

function ageCalculator(birthDate, birthMonth, birthYear){ //main function to take value from form/UI and update the DOM
    const birth = new Date(birthYear, birthMonth - 1, birthDate);
    const today = new Date(currentYear, currentMonth - 1, currentDate);
    if (
        birth > today ||
        birthDate < 1 ||
        birthMonth < 1 ||
        birthMonth > 12
    ) {
        return {
            error: true,
            message: "Invalid date"
        };
    } 
    let calcYear = yearCalculation(birthDate, birthMonth, birthYear)

    let calcMonths = monthCalculation(birthDate, birthMonth);

    let calcDays = dayCalculation(birthDate)

    if(calcMonths === 0 && calcDays === 0){
        return {
            error:false,
            calcYear,
            calcMonths:0,
            calcDays:0,
            birthday: true
        }
    }
    else{
        return {
            error:false,
            calcYear,
            calcMonths,
            calcDays,
            birthday: false
        }
    }
}

function yearCalculation(birthDate, birthMonth, birthYear){
    let calcYear = currentYear - birthYear;
    if(birthMonth < currentMonth){ //birthday already happened
        return calcYear
    }
    else if(birthMonth === currentMonth){
        if(birthDate > currentDate){
            return calcYear - 1;
        }
        else{
            return calcYear;
        }
    }
    else{
        return calcYear - 1;
    }
}

function monthCalculation(birthDate, birthMonth){
    if(birthMonth < currentMonth){
        if(birthDate > currentDate){
            return currentMonth - birthMonth - 1
        }
        else{ //birth Date LESS than current Date
            return currentMonth - birthMonth;
        }
    }
    else if(birthMonth > currentMonth){
        if(birthDate > currentDate){
            return (12 - birthMonth + currentMonth) - 1;
        }
        else{
             return (12 - birthMonth) + currentMonth;
        }
    }
    else{
        if(birthDate <= currentDate){// birthday done
            return 0;
        }
        else{ //birthday yet to happen
            return 11;
        }
    }
}

function dayCalculation(birthDate){
    if(birthDate > currentDate){
        let daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        return daysInPreviousMonth - birthDate + currentDate;
    }
    else if(birthDate < currentDate){
        return currentDate - birthDate;
    }
    else{
        return 0; 
    }
}
