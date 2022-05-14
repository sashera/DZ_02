for (let i = 1; i <= 7; i++) {
    console.log('*'.repeat(i))
}

fizzBuzz(100);

function fizzBuzz(num) {
     for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log('fizzbuzz');
        }
        else if (i % 3 === 0) {
          console.log('fizz');
        }
        else if (i % 5 === 0) {
          console.log('buzz');
        }
        else {
          console.log(i);
        }
     }

}
