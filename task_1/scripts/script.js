// fetch('https://jsonplaceholder.typicode.com/users') // щтправляем запрос
// .then(resp => resp.json()) // получили ответ, преобразовали его в json
// .then(json_data => console.log(json_data))// получили json, вавели данные в консоль



// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(res => res.json())
// .then(json => console.log(json))


// fetch('https://reqres.in/api/users?page=1')
// .then(res => res.json())
// .then(json => console.log(json.data))


const cards_container = document.querySelector('.cards_container');

fetch('https://jsonplaceholder.typicode.com/users/1')
.then(resp => resp.json())
.then(json => render(json))

const render = (json) => {
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const usernameElem = document.createElement('p');
    const phonElem = document.createElement('p');

    nameElem.innerText = `Name: ${json.name}`;
    usernameElem.innerText = `Username: ${json.username}`;
    phonElem.innerText = `Phone: ${json.phone}`;

    card.append(nameElem, usernameElem, phonElem);
    cards_container.append(card);

}