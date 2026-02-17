const student = {
  firstName: "Nika",
  lastName: "Gelashvili",
  grades: [70, 80, 60],

  getAverage() {
    let sum = 0;
    for (let grade of this.grades) {
      sum += grade;
    }
    return sum / this.grades.length;
  },

  isPassing() {
    return this.getAverage() > 50;
  },
};

student.isPassing();
