function Student(name, surname, yearBirth, grades) {
  this.name = name
  this.surname = surname
  this.yearBirth = yearBirth
  this.grades = grades
  this.attendance = new Array(25).fill(null)

  this.getAge = function(){
    const age = new Date().getFullYear() - yearBirth
    return age
  }

  this.getAverageScore = function(){
    if (this.grades.length === 0){
        return 0
    } 
    const sum = grades.reduce((sum, num) => sum + num, 0);
    return Math.round(sum/grades.length)
  }

  this.present = function () {
    const index = this.attendance.indexOf(null)
    if (index !== -1) {
      this.attendance[index] = true
    }
  }

  this.absent = function () {
    const index = this.attendance.indexOf(null)
    if (index !== -1) {
      this.attendance[index] = false
    }
  }

  this.getAttendancePercentage = function(){
    const attended = this.attendance.filter(v => v === true).length
    const classesLeft = this.attendance.filter(v => v == null).length
    if(classesLeft === this.attendance.length) {
        return 0
    }
    return (attended / (this.attendance.length - classesLeft)).toFixed(2)
  }

  this.summary = function() {

    if (this.getAverageScore() > 90 && this.getAttendancePercentage() > 0.9){
        console.log("Молодець!")
    } else if (this.getAverageScore() > 90 || this.getAttendancePercentage() > 0.9) {
        console.log("Добре, але можна краще!")
    } else {
        console.log("Редиска!")
    }
  }
}
const person1 = new Student("Eva", "Terzman", 2000, [90, 89, 96])
person1.present()
person1.present()
person1.present()
person1.absent()
person1.present()
person1.present()
person1.present()
person1.present()
person1.present()
person1.present()
person1.present()

const person2 = new Student("Vadym", "Gonchar", 1991, [])

console.log("Вік студента: ", person1.getAge())
console.log("Середній бал студента: ", person1.getAverageScore())
console.log("Відсоток відвідуваності: ", person1.getAttendancePercentage())
console.log("Відвідуваність:", person1.attendance)
person1.summary()
