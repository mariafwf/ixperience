const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
]

const guessInput = document.getElementById('guess');
const hintButton = document.getElementById('hint');
const submitButton = document.getElementById('submit');
const cardBody = document.getElementById('card-body');
let index = parseInt(Math.random() * 10);

function generateMovie() {
    document.getElementById('explanation').innerHTML = movies[index]['explanation'];
}
   
submitButton.addEventListener('click', (event) => {
    const guess = guessInput.value;
    const result = document.createElement('div');
    const correct = movies[index]['title'];
    if (guess == correct) {
        result.innerHTML = "Congratulations! You guessed right!";
        result.classList.add('alert');
        result.classList.add('alert-success');
    }
    else {
        result.innerHTML = "Unfortunately, your guess was not correct. Do you need a hint?";
        result.classList.add('alert');
        result.classList.add('alert-danger');
    }
    cardBody.append(result);
});

hintButton.addEventListener('click', (event) => {

    const hint = document.createElement('div');

    hint.innerHTML = movies[index]['hint'];
    hint.classList.add('alert');
    hint.classList.add('alert-warning');
    cardBody.append(hint);
});

