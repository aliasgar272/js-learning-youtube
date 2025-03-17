## Project 2 BMI 
``` javascript
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Take input here in function otherwise on loading it will take empty
    const height = parseInt(document.querySelector('#height').value); //by default gives String
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height <= 0 || height === '' || isNaN(height)) {
      results.innerHTML = `Please give valid height ${height}`;
    } else if (weight <= 0 || weight === '' || isNaN(weight)) {
      results.innerHTML = `Please give valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
      // results.innerHTML = `<span>${bmi}</span>`; // this will give single number not exact guide
      if (bmi < 18.6) {
        results.innerHTML = `<span>Underweight ${bmi}</span>`;
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `<span> Normal ${bmi}</span>`;
      } else {
        results.innerHTML = `<span> Overweight ${bmi}</span>`;
      }
    }
  });

```
## project 3 Clock 

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); // will run in console
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);



```