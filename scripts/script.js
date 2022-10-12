const Container = document.querySelector('.container');




        const user = {
            data: {
                avatar: "https://reqres.in/img/faces/1-image.jpg",
                email: "george.bluth@reqres.in",
                first_name: "George"
            }
        }

        function addUser(user){
            const card = document.createElement('div'); 

            const photoElem = document.createElement('img');
            photoElem.src = user.data.avatar;

            const emailElem = document.createElement('a');
            emailElem.innerText = user.data.email;
            emailElem.href = `mailto: ${user.data.email};`

            const nameElem = document.createElement('p');
            nameElem.innerText = user.data.first_name;

            card.append(nameElem, emailElem, photoElem);

            Container.append(card);

        }

        function getUser(user_id){
            fetch(`https://reqres.in/api/users/${user_id}`)
            .then(
                 resp => resp.json(),
                 err => console.log(err)
                )
            .then(
                 resp => addUser(resp),
                 err => console.log(err)
    
            );
    
        }


   
        

    // const user = (json) => {
    //     const card = document.createElement('div');
    //     const nameElem = document.createElement('p');
    //     const lastnameElem = document.createElement('p');
    //     const emailElem = document.createElement('a');
    //     const photoElem = document.createElement('img')


    //     nameElem.innerText = `Name: ${json.first_name}`;
    //     lastnameElem.innerText = `Lastname: ${json.last_name}`;
    //     emailElem.innerText = `Phone: ${json.email}`;

    //     photoElem.setAttribute('src', json.avatar);
    //     photoElem.setAttribute('alt','photo');

    //     card.append(nameElem, lastnameElem, emailElem, photoElem);
    //     Container.append(card);
    // }

    // .then (
    //     resp => console.log(resp),
    //     err => console.log(err)
        
    // );