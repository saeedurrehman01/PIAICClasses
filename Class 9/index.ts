type CarType = { company: string; color: string; model: number };

var car: CarType = {
  company: "Honda",
  color: "Black",
  model: 2009,
};
var car1: CarType = {
  company: "Corolla",
  color: "White",
  model: 2013,
};

var cars: CarType[] = [
  {
    company: "Corolla",
    color: "White",
    model: 2013,
  },
  {
    company: "Honda",
    color: "Black",
    model: 2009,
  },
];

console.log("Car ", car.color);

