ID = () => {
  return Math.random().toString(6).substr(2, 6);
};

const usersArray = [
  {
    id: ID(),
    name: "Vasya",
    age: 38,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Petya",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 1 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Olya",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 90 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Max",
    age: 39,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Anya",
    age: 33,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 2 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Oleg",
    age: 28,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 22 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Masha",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 12 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
  {
    id: ID(),
    name: "Max",
    age: 31,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
    image: "http://eugenev.000webhostapp.com/xxx/randomwallxxx.php",
  },
];

let sorter = 30;

showAll = () => {
  for (let userAddress of usersArray) {
    if (userAddress.age > sorter) {
      // strings
      let container = document.createElement("div");
      container.setAttribute("id", "container");
      // photo
      let photoString = document.createElement("img");
      photoString.setAttribute("id", "img");
      photoString.src = userAddress.image;
      container.appendChild(photoString);
      // id
      let idString = document.createElement("p");
      idString.setAttribute("id", "id");
      idString.innerText = `ID: ${userAddress.id}`;
      container.appendChild(idString);
      // name
      let nameString = document.createElement("h2");
      nameString.setAttribute("id", "name");
      nameString.innerText = `Name: ${userAddress.name}`;
      container.appendChild(nameString);
      // age&&address
      let ageString = document.createElement("h3");
      ageString.setAttribute("id", "age");
      ageString.innerText = `Age: ${userAddress.age}
      Address: City ${userAddress.address.city}, street ${userAddress.address.street}, house # ${userAddress.address.number}`;
      container.appendChild(ageString);
      // strings
      document.body.appendChild(container);
    }
  }
};
showAll(usersArray);
