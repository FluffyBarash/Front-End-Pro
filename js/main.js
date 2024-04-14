// // ####################_HomeWork_1_####################

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    const emptyIndex = this.attendance.findIndex((value) => value === null);
    if (emptyIndex !== -1) {
      this.attendance[emptyIndex] = true;
    }
  }

  absent() {
    const emptyIndex = this.attendance.findIndex((value) => value === null);
    if (emptyIndex !== -1) {
      this.attendance[emptyIndex] = false;
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRatio =
      this.attendance.filter((value) => value === true).length /
      this.attendance.length;

    if (averageGrade > 90 && attendanceRatio > 0.9) {
      return "Молодец!";
    } else if (averageGrade > 0 || attendanceRatio > 0) {
      return "Хорошо, но можно лучше";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Иван", "Иванов", 2000);
student1.addGrade(85);
student1.addGrade(92);
student1.present();
student1.present();
console.log(
  `Студент ${student1.firstName} ${
    student1.lastName
  }, возраст: ${student1.getAge()} лет`
);
console.log(`Средний балл: ${student1.getAverageGrade()}`);
console.log(`Посещаемость: ${student1.attendance}`);
console.log(`Оценка: ${student1.summary()}`);

const student2 = new Student("Мария", "Петрова", 2001);
student2.addGrade(95);
student2.addGrade(88);
student2.absent();
console.log(
  `Студент ${student2.firstName} ${
    student2.lastName
  }, возраст: ${student2.getAge()} лет`
);
console.log(`Средний балл: ${student2.getAverageGrade()}`);
console.log(`Посещаемость: ${student2.attendance}`);
console.log(`Оценка: ${student2.summary()}`);
