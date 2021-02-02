ID = () => {
  return Math.random().toString(6).substr(2, 6);
};

const CARS = [
  { id: ID(), title: "Audi", price: 30000, image: "https://cdn.motor1.com/images/mgl/mL9jj/s1/2020-audi-a8-l-60-tfsi-e.jpg" },
  { id: ID(), title: "BMW", price: 28000, image: "https://autoiwc.ru/images/bmw/bmw-7.jpg" },
  { id: ID(), title: "Mazda", price: 18000, image: "https://cdn.dvizhenie24.ru/2020/02/2020-mazda-6-rendering.jpg" },
  { id: ID(), title: "Mersedes", price: 40000, image: "https://i.infocar.ua/i/12/6241/1400x936.jpg" },
  { id: ID(), title: "SUBARU", price: 25000, image: "https://cdn.motor1.com/images/mgl/G6XWE/s1/subaru-forester-sport.jpg" },
  { id: ID(), title: "Reno", price: 12000, image: "https://www.sto-saltovskiy.com.ua/wp-content/uploads/2019/09/%D1%80%D0%B5%D0%BD%D0%BE.jpg" },
  { id: ID(), title: "Peugeot", price: 15000, image: "https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2019/December/27/peugeot-508-2.jpg" },
  { id: ID(), title: "Lada", price: "free", image: "https://s.auto.drom.ru/img4/catalog/photos/fullsize/lada/kalina/lada_kalina_145692.jpg" },
  { id: ID(), title: "Niva", price: 500, image: "https://cdn.motor1.com/images/mgl/VmOzG/s3/obnovlennaya-lada-4x4.jpg" },
  { id: ID(), title: "Kia", price: 18000, image: "https://cdn.motor1.com/images/mgl/Kq61b/s3/2020-kia-k5-kdm-spec.jpg" },
];

for (let eachCar of CARS) {
  document.write(
    ` <div class="carList">
      <img class="image" src="${eachCar.image}"/>
      <h2 class="price">${eachCar.title}</h2>
      <h2 class="price">${eachCar.price} USD</h2>
      <p class="carsId">Код товару: ${eachCar.id}</p>
      </div>
    `
  );
}
