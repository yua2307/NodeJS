// call back la gi ?

// 1. la ham 
// 2.  truyen qua doi so 
// 3. duoc goi lai (trong ham nhan doi so)

var courses = ['Java', 'PHP', 'Ruby'];

// my map() method

Array.prototype.map2 = function (callback) {
    let output = [], lengthArray = this.length;
    for (var i = 0; i < lengthArray; i++) {
        var res = callback(this[i], i); // current item , index
        output.push(res);
        // console.log('res :', res);
    }
    return output;
}

var courses = ['Java', 'PHP', 'Ruby'];

var htmls = courses.map2(function (course) {
    return `<h2>${course}</h2>`;
})

//console.log(htmls.join(''));


// my forEach() method 
Array.prototype.forEach2 = function (callback) {
    let length = this.length;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};


courses.forEach2(function (course, index, originArray) {
    console.log(course, index, originArray);
})
//  my filter() method

var newCourse = [
    {
        id: 1,
        name: 'Java Core',
        coin: 20,
    },
    {
        id: 2,
        name: 'Java Scripts',
        coin: 22,
    }
];
// console.log("orginal");
// console.log(newCourse.filter(
//     (course, index, originArray) => {
//         return course.coin > 20
//     }
// ))

console.log("My method");

Array.prototype.filter2 = function (callback) {
    output = [];
    for (var index in this) {

        if (this.hasOwnProperty(index)) {
            const res = callback(this[index], index, this);
            if (res) {
                output.push(this[index]);
            }
        }
    }

    return output;
}

const filterCourse = newCourse.filter2((course, index, originArray) => {
    return course.coin > 20;
});
console.log(filterCourse);
// my some method

Array.prototype.some2 = function (callback) {
    let length = this.length;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this))
                return true;
        }
    }
    return false;
};

var bool = newCourse.some2((course, index, originArray) => {
    return course.coin <= 19;
});
console.log(bool);

// my ey

Array.prototype.every2 = function (callback) {

    var result = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], index, this)) {
                result = false;
                break;
            }
        }
    }
    return result;
}

console.log(newCourse.every2((course, index, originArray) => {
    return course.coin >= 21;
}));

console.log(newCourse.every2((course, index, originArray) => {
    return course.coin >= 22;
}));