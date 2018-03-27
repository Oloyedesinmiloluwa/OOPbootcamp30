class Person {
  constructor(name,age,address,interest) {
    this.name = name ;
    this.age = age
    this.address = address ;
    this.interest = interest;
  }
  profile(){
    return this.name+' is '+this.age+' years old'+' and lives in '+this.address;
  }
  interestMethod(){
    let displayInterest = 'Interest:';
    this.interest.forEach(element => {
      displayInterest += element + ',';
    });
    return displayInterest;
  }
  }
  class Student extends Person {
    calculateResult(subject,score){
    let totalScore = score.score[0] + score.score[1] + score.score[2] + score.score[3]  ;
    return totalScore;
    }
  }
  class Teacher extends Person {
    constructor(name,age,address,interest,subject,title){
      super(name,age,address,interest);
      this.subject = subject;
      this.title = title;
    }
    profile(){
      let getInterest = super.interestMethod();
      return this.title +' '+ this.name+' is a '+ this.subject + ' teacher and lives in '+this.address+'.\n'+getInterest;
    }
    calculateSalary(basicSalary,benefit){
      let totalSalary = basicSalary + benefit;
      return totalSalary;
    }
  }
  let student = new Person('grace','11','lagos',['music','technology']);
  let juniorStudent = new Student('Grace','11','lagos',['music','technology']);
  let juniorTeacher = new Teacher('Grace','11 ','lagos ',['music','technology'],'mathematics','Mrs');
  juniorStudent.calculateResult({subject:['maths','english','yoruba','french']},{score: [70,30,40,20]});
  juniorTeacher.calculateSalary(50000,500);
  juniorTeacher.profile();
  student.profile();
  // juniorStudent.interestMethod();
  // juniorTeacher.interestMethod();
  
  export { juniorStudent, juniorTeacher};
  