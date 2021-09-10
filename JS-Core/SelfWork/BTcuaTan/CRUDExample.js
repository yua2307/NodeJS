const students = [{
    id: 1,
    name: 'Tan',
    type: 'Hoc Sinh',
    isDelete: false
},
{
    id: 2,
    name: 'Viet',
    type: 'Sinh Vien',
    isDelete: false
},
{
    id: 3,
    name: 'Nam',
    type: 'Di Lam',
    isDelete: false
},
{
    id: 4,
    name: 'Duc',
    type: 'Hoc Sinh',
    isDelete: false
},
{
    id: 5,
    name: 'Duc',
    type: 'Hoc Sinh',
    isDelete: true
},
{
    id: 6,
    name: 'Duc',
    type: 'Hoc Sinh',
    isDelete: false
},
{
    id: 7,
    name: 'Duc',
    type: 'Hoc Sinh',
    isDelete: false
},];

function create(student) {
    students.forEach((stu) => {
        if (stu.id === student.id && stu.isDelete === false) {
            console.log("Thêm mới thất bại!");
            return false;
        }
    })
    students.push(student);
    console.log("Thêm mới thành công!")
    return true;
};
var updateStudentExample = {
    id: 5,
    name: 'Duc Anh',
    type: 'Hoc Sinh CNTT',
    isDelete: false
};
function updateStudent(id, updateStudent) {

    let index = students.findIndex((stu) => stu.id == id);

    students[index] = updateStudent;
};

updateStudent(5, updateStudentExample)
console.log(students);
