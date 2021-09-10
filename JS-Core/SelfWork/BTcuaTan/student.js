const students = [
    {
        id: 1,
        name: "John",
        age: 26,
        subject: [
            'Math',
            'Physic',
            'Chemistry'
        ],
        type: 'Good',
        money: 10000
    },
    {
        id: 2,
        name: "David",
        age: 21,
        subject: [
            'Math',
            'Physic',
            'Chemistry'
        ],
        type: 'Bad',
        money: 2000,
    },
    {
        id: 3,
        name: "Ethan",
        age: 21,
        subject: [
            'Physic',
            'Chemistry'
        ],
        type: 'Good',
        money: 2000,
    }
];

const allNameStudent = students.map((student) => { return student.name });
console.log(allNameStudent);


const studentsHasAgeOver25 = students.filter((student) => { return student.age > 25 });

console.log(studentsHasAgeOver25);


//const studentsHasAgeOver25AndGood = students.filter((student) => { return student.age > 25 && student.type == 'Good' });
//console.log(studentsHasAgeOver25AndGood);


const studentHasMoneyOver1200 = students.filter((student) => { return student.money > 1200 });
//const sumOfMoney = students.reduce((sum, student) => { sum + student.money }, 0);


const sumOfMoney = students.reduce((sum, student) => {
    return sum + student.money;
}, 0)
console.log(sumOfMoney);

const sumMoneyOfStudentHasAgeOver25 = students.filter((student) => student.age > 25)
    .reduce((sum, currStudent) => { return sum + currStudent.money }, 0);;
console.log(sumMoneyOfStudentHasAgeOver25);


const studentName = students.map((student) => {
    return student.name
}).join('-');
console.log('Student Name ' + studentName);

const studentWithGoodGradeAndStudyMath = students.filter((student, index) => {
    return student.type == 'Good' && student.subject.indexOf('Math') != -1;
}).map((student, index) => { return student.name; });

console.log(studentWithGoodGradeAndStudyMath);


const isEveryStudentGood = students.every((student) => { return student.type == 'Good' })
console.log(isEveryStudentGood);

const isHasStudentBad = students.some((student) => { return student.type == 'Bad' });
console.log(isHasStudentBad);