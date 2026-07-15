
function calculateAge(day, month, year){
    const date = new Date()
    const currentYear = date.getFullYear()
    if(year > currentYear){
        return "Invalid birth year";
    }

    const currentMonth = date.getMonth() + 1;
    //console.log(currentMonth)

    const currentDate = date.getDate()
    // console.log(currentDate)

    //YEAR CALCULATION Starts here
    let calcYear = currentYear - year;
    if(currentMonth > month){
        console.log(calcYear)
    }
    else if(currentMonth == month){
        if(day <= currentDate){
            console.log(calcYear)
        }
        else{
            console.log(calcYear - 1)
        }
    }
    else{
        
        console.log(calcYear - 1);
    }

    // MONTH Calculation starts here



    //DAYS calculation starts here
}

calculateAge(12,12,2000);