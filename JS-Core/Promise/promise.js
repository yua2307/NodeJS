// // //1  pending
// // // 2 fullfill
// // var promise = new Promise(
// //     // Executor 
// //     function (resolve, reject) {
// //         // logic 


// //         // success 

// //         // fail
// //         reject();
// //     }

// // );



// // promise
// //     .then(function () {
// //         console.log('Successfully');
// //     })
// //     .catch(function () {
// //         console.log('Failture');
// //     })
// //     .finally(function () {
// //         console.log('Done');
// //     })
// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//     const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//         return response.json();
//     });
// };
// const getCountryData = function (country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(response => {

//             console.log(response);
//             return response.json();
//         })
//         .then(data => {
//             renderCountry(data[0]);

//             const neighbour = data[0].border[0]
//             if (!neighbour) return;

//             fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data[0], 'neighbour'));
// };


// getCountryData('portugal')

var users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'John Dang'
    }
];

var comments = [
    {
        id: 1,
        userId: 1,
        content: 'Sao chua ra video'
    },
    {
        id: 2,
        userId: 2,
        content: 'Vua ra xong em oi'
    },
    {
        id: 3,
        userId: 1,
        content: 'Em cam on anh'
    }
];
// fake API 

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000)
    })
}
function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        var results = users.filter((user) => {
            return userIds.includes(user.id);
        })
        setTimeout(() => {
            resolve(results)
        }, 1000);
    })
}
var commentBlock = document.querySelector('#comment-block');
getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => {
            return comment.userId;
        });
        console.log(userIds);
        return getUsersByIds(userIds)
            .then((users) => {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then((data) => {
        console.log(data);
        var html = '';
        var commentBlock = document.getElementById('commentBlock');
        var html = '';
        data.comments.forEach((comment) => {
            var user = users.find(user => {
                return user.id == comment.userId;
            });

            console.log(user);
            html += `<li><b>${user.name}</b> : ${comment.content}</li>`;

        });

        commentBlock.innerHTML = html;
    })
