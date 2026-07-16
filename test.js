const date = new Date()
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDate = date.getDate();

function ageCalculator(birthDate, birthMonth, birthYear){ //main function to take value from form/UI and update the DOM
    let calcYear = yearCalculation(birthDate, birthMonth, birthYear)
    console.log(calcYear)

    let calcMonth = monthCalculation(birthDate, birthMonth);
    console.log(calcMonth)
}

function yearCalculation(birthDate, birthMonth, birthYear){
     // year Calculation starts here
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
        else{
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

ageCalculator(15,3,2000);