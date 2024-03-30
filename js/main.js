// // ####################_HomeWork_1_####################

class Human {
  constructor(name, floor) {
    this.name = name;
    this.floor = floor;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addLiver(human) {
    this.residents.push(human);
  }
}

class House {
  constructor(capacity) {
    this.apartments = [];
    this.capacity = capacity;
  }

  addApartments(apartment) {
    if (this.apartments.length < this.capacity) {
      this.apartments.push(apartment);
    } else {
      console.error("Error!");
    }
  }
}

let humanOne = new Human("Bobi", "man");
let humanTwo = new Human("Elizabeth", "woman");

let apartmentOne = new Apartment();
let apartmentTwo = new Apartment();

apartmentOne.addLiver(humanOne);
apartmentTwo.addLiver(humanTwo);

let house = new House(2);

house.addApartments(apartmentOne);
house.addApartments(apartmentTwo);

console.log(house);
