const endDate = "09 November 2023 10:33 AM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")


function clock () {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) /1000;
    console.log(diff);

    // check if the date is passed and it is negative
    if (diff < 0) 
    {
        return;
    }


    // convert into days
    inputs[0].value = Math.floor (diff / 3600 / 24);

    // convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;

    // convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;

    // convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock ()
 

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 secs
 */

// call every second after completion of 1 second


setInterval (clock, 1000)
