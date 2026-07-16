const date = new Date()
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDate = date.getDate();

function ageCalculator(birthDate, birthMonth, birthYear){ //main function to take value from form/UI and update the DOM
    if(birthYear > currentYear || birthDate > 31 || birthDate < 1 || birthMonth > 12 || birthMonth < 1){ //return error
        return console.error('Invalid date!');
    }
    let calcYear = yearCalculation(birthDate, birthMonth, birthYear)

    let calcMonths = monthCalculation(birthDate, birthMonth);

    let calcDays = dayCalculation(birthDate)

    if(calcMonths === 0 && calcDays === 0){
        console.log(`Happy Birthday🎉!, you're ${calcYear} years old.`)
    }
    else{
        console.log(calcYear)
        console.log(calcMonths)
        console.log(calcDays)
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

ageCalculator(16,7,2000);