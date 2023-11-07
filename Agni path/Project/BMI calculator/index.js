const form = document.querySelector('form')

// This usecase will give you empty value because it load when file run 
//    const height = parseInt(document.querySelector('#height').value)
//    const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else if ((height === '' || height < 0 || isNaN(height)) && (weight === '' || weight < 0 || isNaN(weight))) {
        results.innerHTML = `Please give a valid height ${height} and weight ${weight}`
    }
    else {
        const bmi = (weight / ((height*weight)/10000)).toFixed (2)
          // toFixed (2) for values upto what you need to write 
        
        // show the result
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
        const check = results.innerHTML = `<span>Your BMI is ${bmi}</span>`
    

        // **** BMI Condition ****
        if (bmi < 18.6) {
            check.innerHTML = `You are Underweight`;
            // console.log(`You are Underweight`);
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            check.innerHTML = `You are Normal`;
            // console.log(`You are Normal`);
        }
        else {
            check.innerHTML = `You are Overweight`;
            // console.log(`You are Overweight`);
        }
    }
})


