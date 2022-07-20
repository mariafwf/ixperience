const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const cardBody = document.getElementById('card-body');

submitButton.addEventListener('click', (event) => {
    const guess = guessInput.value;
    const random = parseInt(Math.random() * 10);
    const result = document.createElement('div');
    const compare = document.createElement('div'); 

    if (guess == random) {
        result.innerHTML = "Congratulations! You guessed right!";
        result.classList.add('alert');
        result.classList.add('alert-success');
    }
    else {
        result.innerHTML = "Unfortunately, your guess was not correct.";
        result.classList.add('alert');
        result.classList.add('alert-danger');
    }

    compare.innerHTML = "You guessed " + guess + ". The correct number was " + random;
    compare.classList.add('alert');
    compare.classList.add('alert-warning');

    cardBody.append(result);
    cardBody.append(compare);
});