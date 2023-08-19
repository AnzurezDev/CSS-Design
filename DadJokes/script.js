const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

// Using .then()
function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
            .then(data => jokeDiv.innerHTML=data.joke);
}

// Using async / await
// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     const response  = await fetch('https://icanhazdadjoke.com', config);
//     const data      = await response.json();

//     jokeDiv.innerHTML = data.joke;
// }