window.onload = function() {

    // function to be executed

    // call the h1 tag
    const title = document.querySelector('h1');

    // heading
    title.innerText = 'Magic 8-Ball';

    // call the button tag
    const button = document.querySelector('button');

    button.addEventListener('click', onButtonClick);

    //function for the button
function onButtonClick() {

button.addEventListener('click', function() {
            if (question.value.length < 1) {
                alert('Enter a question')
            } else {
                ball.innerText= "";
                let num = (Math.floor(Math.random()) * Math.floor(answer.length));
                answer.innerText = answers(num);
            }
        });
    }
} 

// define the answers
let answers = [
    "yes",
    "no"
]