ID = () => {
  return Math.random().toString(6).substr(2, 6);
};

const users = [
  { id: ID(), name: "Vasya", age: 31, status: false },
  { id: ID(), name: "Petya", age: 30, status: true },
  { id: ID(), name: "Kolya", age: 29, status: true },
  { id: ID(), name: "Olya", age: 28, status: false },
  { id: ID(), name: "Max", age: 30, status: true },
  { id: ID(), name: "Anya", age: 33, status: false },
  { id: ID(), name: "Oleg", age: 28, status: false },
  { id: ID(), name: "Andrey", age: 29, status: true },
  { id: ID(), name: "Masha", age: 30, status: true },
  { id: ID(), name: "Olya", age: 38, status: false },
  { id: ID(), name: "Max", age: 43, status: true },
];

let oldAge = 30;

showAll = (oldUser) => {
  for (const user of oldUser) {
    if (user.age > oldAge) {
      document.write(
        ` <div class="carList">
        <img class="image" src="https://i.pinimg.com/originals/fe/a0/a1/fea0a18972b59f154e12d6a2c17f97c9.jpg"/>
        <p class="carsId">ID: ${user.id}</p>
        <h2 class="price">${user.name}</h2>
        <h2 class="price">${user.age} - i am not to old yet!</h2>
        <h2 class="price">${user.status}</h2>
        </div>
        `
      );
    }
  }
};
showAll(users);

// for (let user of users) {
//   if (user.age > 30) {
//     document.write(
//       ` <div class="carList">
//       <img class="image" src="https://i.pinimg.com/originals/fe/a0/a1/fea0a18972b59f154e12d6a2c17f97c9.jpg"/>
//       <p class="carsId">ID: ${user.id}</p>
//       <h2 class="price">${user.name}</h2>
//       <h2 class="price">${user.age} - i am not to old yet!</h2>
//       <h2 class="price">${user.status}</h2>
//       </div>
//     `
//     );
//   }
// }

// const usersWithAddress = [
//   { id: ID(), name: "Vasya", age: 31, status: false, address: { city: "Lviv", street: "Shevchenko", number: 16 } },
//   { id: ID(), name: "Petya", age: 30, status: true, address: { city: "Lviv", street: "Shevchenko", number: 1 } },
//   { id: ID(), name: "Kolya", age: 29, status: true, address: { city: "Lviv", street: "Shevchenko", number: 121 } },
//   { id: ID(), name: "Olya", age: 28, status: false, address: { city: "Lviv", street: "Shevchenko", number: 90 } },
//   { id: ID(), name: "Max", age: 30, status: true, address: { city: "Lviv", street: "Shevchenko", number: 115 } },
//   { id: ID(), name: "Anya", age: 31, status: false, address: { city: "Lviv", street: "Shevchenko", number: 2 } },
//   { id: ID(), name: "Oleg", age: 28, status: false, address: { city: "Lviv", street: "Shevchenko", number: 22 } },
//   { id: ID(), name: "Andrey", age: 29, status: true, address: { city: "Lviv", street: "Shevchenko", number: 43 } },
//   { id: ID(), name: "Masha", age: 30, status: true, address: { city: "Lviv", street: "Shevchenko", number: 12 } },
//   { id: ID(), name: "Olya", age: 31, status: false, address: { city: "Lviv", street: "Shevchenko", number: 16 } },
//   { id: ID(), name: "Max", age: 31, status: true, address: { city: "Lviv", street: "Shevchenko", number: 121 } },
// ];

// for (let userAddress of usersWithAddress) {
//   if (userAddress.address.number > 20) {
//     document.write(
//       ` <div class="carList">
//       <img class="image" src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519"/>
//       <p class="carsId">ID: ${userAddress.id}</p>
//       <h2 class="price">Name: ${userAddress.name}</h2>
//       <h2 class="price">Age: ${userAddress.age}</h2>
//       <h2 class="price">Status: ${userAddress.status}</h2>
//       <h2 class="price">House # ${userAddress.address.number} - My house number is higher than 20</h2>
//       </div>
//     `
//     );
//   }
// }
