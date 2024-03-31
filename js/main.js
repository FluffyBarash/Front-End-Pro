// // ####################_HomeWork_1_####################

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  infoAboutPerson() {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
  }
}

class Car {
  constructor(make, model, yearRegistration, licensePlate) {
    this.make = make;
    this.model = model;
    this.yearRegistration = yearRegistration;
    this.licensePlate = licensePlate;
    this.owner = null;
  }

  assignOwner(human) {
    if (human.age > 18) {
      this.owner = human;
    } else {
      console.log("Владелец должен быть старше 18 лет");
    }
  }

  infoAboutCar() {
    console.log(
      `Марка: ${this.make}, Модель: ${this.model}, Год выписки: ${this.yearRegistration}, Номерной знак: ${this.licensePlate}`
    );
    if (this.owner) {
      this.owner.infoAboutPerson();
    }
  }
}

let humanOne = new Human("Bob", 34);
let humanTwo = new Human("Bill", 19);

let carOne = new Car("BMW", "M5", 2018, "BH4747HD");
let carTwo = new Car("Mercedes", "E-class", 2022, "KA8888AK");

carOne.assignOwner(humanOne);
carTwo.assignOwner(humanTwo);

carOne.infoAboutCar();
carTwo.infoAboutCar();

//////////////////////////////////////////////////////////////////////////////////

// let человек1 = new Человек("Иван", 25);
// let человек2 = new Человек("Елена", 30);

// let автомобиль1 = new Автомобиль("Toyota", "Corolla", 2020, "А123ВС77");
// let автомобиль2 = new Автомобиль("Ford", "Focus", 2018, "В456ДЕ89");

// автомобиль1.присвоитьВладельца(человек1);
// автомобиль2.присвоитьВладельца(человек2);

// автомобиль1.информацияОбАвтомобиле();
// автомобиль2.информацияОбАвтомобиле();

///////////////////////////////////////////////////////////////////////////////////

// Сущность "Человек"
// class Человек {
//   constructor(имя, возраст) {
//     this.имя = имя;
//     this.возраст = возраст;
//   }

//   информацияОЧеловеке() {
//     console.log(`Имя: ${this.имя}, Возраст: ${this.возраст}`);
//   }
// }

// // Сущность "Автомобиль"
// class Автомобиль {
//   constructor(марка, модель, годВыписки, номернойЗнак) {
//     this.марка = марка;
//     this.модель = модель;
//     this.годВыписки = годВыписки;
//     this.номернойЗнак = номернойЗнак;
//     this.владелец = null;
//   }

//   присвоитьВладельца(человек) {
//     if (человек.возраст > 18) {
//       this.владелец = человек;
//     } else {
//       console.log("Владелец должен быть старше 18 лет");
//     }
//   }

//   информацияОбАвтомобиле() {
//     console.log(
//       `Марка: ${this.марка}, Модель: ${this.модель}, Год выписки: ${this.годВыписки}, Номерной знак: ${this.номернойЗнак}`
//     );
//     if (this.владелец) {
//       this.владелец.информацияОЧеловеке();
//     }
//   }
// }

// // Демонстрация
// let человек1 = new Человек("Иван", 25);
// let человек2 = new Человек("Елена", 30);

// let автомобиль1 = new Автомобиль("Toyota", "Corolla", 2020, "А123ВС77");
// let автомобиль2 = new Автомобиль("Ford", "Focus", 2018, "В456ДЕ89");

// автомобиль1.присвоитьВладельца(человек1);
// автомобиль2.присвоитьВладельца(человек2);

// автомобиль1.информацияОбАвтомобиле();
// автомобиль2.информацияОбАвтомобиле();
