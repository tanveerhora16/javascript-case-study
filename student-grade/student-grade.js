
function School(){
    this.students={};
}

School.prototype.roster = function() {
    
    return this.students;
};
    
School.prototype.add = function(studentName, studentGrade) {
    if (this.students[studentGrade]) {
        this.students[studentGrade].push(studentName);
        this.students[studentGrade].sort();

    } else {
        this.students[studentGrade] = [studentName];
    }

};

School.prototype.grade = function(studentGrade) { 
    if(this.students[studentGrade]) {
        return this.students[studentGrade];
    }
    return [];
};

module.exports=School;


