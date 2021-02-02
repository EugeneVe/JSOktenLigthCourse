//  first type
const BESTCARS = {
  car: [
    { brand: "Audi", engaine: 2.2, color: "grey", price: 30000, availability: true, id: Date.now() },
    { brand: "BMW", engaine: 2.0, color: "black", price: 35000, availability: false, id: Date.now() },
    { brand: "Mazda", engaine: 1.8, color: "magenta", price: 20000, availability: true, id: Date.now() },
    { brand: "Mersedes", engaine: 3.0, color: "white", price: 40000, availability: true, id: Date.now() },
    { brand: "Porshe", engaine: 4.0, color: "green", price: 50000, availability: true, id: Date.now() },
    { brand: "Reno", engaine: 1.6, color: "blue", price: 15000, availability: false, id: Date.now() },
    { brand: "Peugeot", engaine: 1.4, color: "red", price: 16000, availability: true, id: Date.now() },
    { brand: "Lada", engaine: 1.6, color: "grey", price: 7000, availability: true, id: Date.now() },
    { brand: "Niva", engaine: 1.8, color: "murena", price: 10000, availability: false, id: Date.now() },
    { brand: "Kia", engaine: 2.2, color: "darkgrey", price: 18000, availability: true, id: Date.now() },
  ],
};

console.log(BESTCARS);

// first type end

// second type
const CARS = [
  { brand: "Audi", engaine: 2.2, color: "grey", price: 30000, availability: true, id: Date.now() },
  { brand: "BMW", engaine: 2.0, color: "black", price: 35000, availability: false, id: Date.now() },
  { brand: "Mazda", engaine: 1.8, color: "magenta", price: 20000, availability: true, id: Date.now() },
  { brand: "Mersedes", engaine: 3.0, color: "white", price: 40000, availability: true, id: Date.now() },
  { brand: "Porshe", engaine: 4.0, color: "green", price: 50000, availability: true, id: Date.now() },
  { brand: "Reno", engaine: 1.6, color: "blue", price: 15000, availability: false, id: Date.now() },
  { brand: "Peugeot", engaine: 1.4, color: "red", price: 16000, availability: true, id: Date.now() },
  { brand: "Lada", engaine: 1.6, color: "grey", price: 7000, availability: true, id: Date.now() },
  { brand: "Niva", engaine: 1.8, color: "murena", price: 10000, availability: false, id: Date.now() },
  { brand: "Kia", engaine: 2.2, color: "darkgrey", price: 18000, availability: true, id: Date.now() },
];

compare = (a, b) => {
  return a.y - b.y;
};

const WHERE = document.getElementById("cars");
WHERE.innerHTML = JSON.stringify(CARS.sort(compare));

console.log(CARS[0].brand);
console.log(CARS[0].engaine);
console.log(CARS[0].color);
console.log(CARS[0].price + " usd");
console.log(CARS[0].availability);
console.log(CARS[0].id);

console.log(CARS[1].brand);
console.log(CARS[1].engaine);
console.log(CARS[1].color);
console.log(CARS[1].price + " usd");
console.log(CARS[1].availability);
console.log(CARS[0].id);

console.log(CARS[2].brand);
console.log(CARS[2].engaine);
console.log(CARS[2].color);
console.log(CARS[2].price + " usd");
console.log(CARS[2].availability);
console.log(CARS[0].id);

console.log(CARS[3].brand);
console.log(CARS[3].engaine);
console.log(CARS[3].color);
console.log(CARS[3].price + " usd");
console.log(CARS[3].availability);
console.log(CARS[0].id);

console.log(CARS[4].brand);
console.log(CARS[4].engaine);
console.log(CARS[4].color);
console.log(CARS[4].price + " usd");
console.log(CARS[4].availability);
console.log(CARS[0].id);

console.log(CARS[5].brand);
console.log(CARS[5].engaine);
console.log(CARS[5].color);
console.log(CARS[5].price + " usd");
console.log(CARS[5].availability);
console.log(CARS[0].id);

console.log(CARS[6].brand);
console.log(CARS[6].engaine);
console.log(CARS[6].color);
console.log(CARS[6].price + " usd");
console.log(CARS[6].availability);
console.log(CARS[0].id);

console.log(CARS[7].brand);
console.log(CARS[7].engaine);
console.log(CARS[7].color);
console.log(CARS[7].price + " usd");
console.log(CARS[7].availability);
console.log(CARS[0].id);

console.log(CARS[8].brand);
console.log(CARS[8].engaine);
console.log(CARS[8].color);
console.log(CARS[8].price + " usd");
console.log(CARS[8].availability);
console.log(CARS[0].id);

console.log(CARS[9].brand);
console.log(CARS[9].engaine);
console.log(CARS[9].color);
console.log(CARS[9].price + " usd");
console.log(CARS[9].availability);
// second type end
