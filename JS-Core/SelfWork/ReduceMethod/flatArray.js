'use strict'
let deptArray = [1, 2, [3, 4], 5, 6, [7, 8, 9], 10, 11, 12, 13, 14, 15];

const flatArray = deptArray.reduce(
    (flatArray, currentItem) => {
        return flatArray.concat(currentItem);
    }, []

)


console.log(flatArray);

let courses = [
    {
        id: 1,
        name: "Front-end",
        price: 10,
    },
    {
        id: 2,
        name: "Back-end",
        price: 20,
    }
]
// html rendering

// var htmls = courses.map(
//     (course) => {
//         let htmlRender = `
//         <div>
//             <h2> ID :${course.id}</h2>
//             <p>Name : ${course.name}</p>
//             <p>price : ${course.price}</p>
//         </div>` ;
//         return htmlRender;
//     }
// )


var htmls = courses.map(
    (course) => {
        let htmlRender = `
        <div>
            <h2> ID :${course.id}</h2>
            <p>Name : ${course.name}</p>
            <p>price : ${course.price}</p>
        </div>` ;
        return htmlRender;
    }
)

document.querySelector("#abc").innerHTML = htmls.join('');
