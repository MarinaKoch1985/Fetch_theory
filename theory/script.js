let a = 10;

        // setTimeout(() => {
        //     a = 34;          // переопределили переменную
        //     console.log(a)   // в консоле ваведит 34 с задержкой в 2 секунды
        // }, 2000);  // 2000- задержка в 2 секунды

        // console.log(a);  // в консоле выведет 10 


// let example = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(a = 34);
//     }, 2000)
// })
//  example.then(() => console.log(a));

const random_num = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a >= 0.5) {
        resolve(a)
    } else {
        reject(a)
    }
})

random_num.then(
    (value) => console.log(`${value} >= 0,5`),
    (value) => console.log(`${value} < 0,5`)
)