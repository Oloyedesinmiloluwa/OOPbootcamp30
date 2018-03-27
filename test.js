import {assert} from 'chai';
import {juniorTeacher, juniorStudent} from './oop';
describe('School Management System', function() {

    it('should return addition of basic salary & benefits', function() {
      assert.equal(juniorTeacher.calculateSalary(4000,400),4400);
    });
    it('should return total score of student', function() {
      assert.equal(juniorStudent.calculateResult({subject:['maths','english','yoruba','french']},{score: [70,30,20,40]}),160);
    });
    it('should return profile of studemt', function() {
      assert.isString(juniorStudent.profile());
    });
    it('should return profile of Teacher', function() {
      assert.isString(juniorTeacher.profile());
    });
    
  });
