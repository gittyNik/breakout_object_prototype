
function Living () {}

Living.prototype.consciousness=true;

function Humans (firstName, lastName) {
	Living.call(this);
	this.firstName = firstName;
	this.lastName = lastName;
}

Humans.prototype = Object.create(Living.prototype);
Humans.constructor = Humans;

Humans.prototype.fullName = function () {
	return `${this.firstName} ${this.lastName}`;
}

function Teachers (firstName, lastName, subject) {
	Humans.call (this, firstName, lastName);
	this.subject = subject;
}

Teachers.prototype = Object.create(Humans.prototype);
Teachers.constructor = Teachers;

Teachers.prototype.profession = 'Teacher';

var teacher1 = new Teachers ("Nik", "Sharma", "CSE");
console.log(teacher1.subject, teacher1.profession, teacher1.firstName, teacher1.lastName);
console.log(teacher1.consciousness, teacher1.fullName());