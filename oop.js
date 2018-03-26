class Person {
  constructor(name,age,address) {
    this.name = name ;
    this.age = age
    this.address = address ;
  }
  profile(){
    console.log(this.name+' is '+this.age+' years old'+' and lives in '+this.address);
  }
  }
  let student = new Person('grace','11','lagos');
  student.profile();
  class Student extends Person {
    calculateResult(subject,score){
    let totalScore = score.score[0] + score.score[1]  ;
    console.log(this.name+'\'s'+' totalScore is:',totalScore);
    }
  }
  class Teacher extends Person {
    constructor(name,age,address,subject,title){
      super(name,age,address);
      this.subject = subject;
      this.title = title;
    }
    profile(){
      console.log(this.title +' '+ this.name+' is a '+ this.subject + ' teacher and lives in '+this.address);
    }
    calculateSalary(basicSalary,benefit){
      let totalSalary = basicSalary + benefit;
      console.log('Total Salary for '+ this.name + 'is ' + totalSalary);
    }
  }
  let juniorStudent = new Student('Grace','11','lagos');
  juniorStudent.calculateResult({subject:['maths','english']},{score: [70,30]});
  let juniorTeacher = new Teacher('Grace','11 ','lagos ','mathematics','Mrs');
  juniorTeacher.calculateSalary(50000,500);
  juniorTeacher.profile();
  