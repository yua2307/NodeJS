var courseAPI = 'http://localhost:3000/courses';
function start() {
    getCourses(renderCourses)

    handleCreateForm();

}
function handleCreateForm() {
    var btnSubmit = document.querySelector('#createBtn');
    btnSubmit.onclick = function () {

        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var objAdd = {
            name: name,
            description: description
        };

        console.log(name, description);
        createCourse(objAdd, renderAddCourse(objAdd))
    }
}

function createCourse(course, callback) {
    fetch(courseAPI, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then(callback);
}
function getCourses(callback) {
    fetch('http://localhost:3000/courses')
        .then((response) => response.json())
        .then(callback)
}
function renderAddCourse(course) {
    var listCoursesBlock = document.querySelector('#listCourseBlock li:last-child');

    var html = `<li>
    <h4>${course.name}</h4>
    <p>${course.description}</p>
    <button onclick="deleteCourse(${course.id})">Xoa</button>
</li>`;
    //listCoursesBlock.innerHTML = listCoursesBlock.append(html)
}
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#listCourseBlock');

    var htmls = courses.map((course) => {
        return `<li class="course-item-${course.id}"</li>
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick="deleteCourse(${course.id})">Xoa</button>
                </li>`
    })

    listCoursesBlock.innerHTML = htmls.join('');
}

function deleteCourse(id) {

    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(courseAPI + "/" + id, options)
        .then((response) => response.json())
        .then(function () {
            var courseItem = document.querySelector('.course-item-' + id)
            if (courseItem) {
                courseItem.remove();
            }
        })
}

start();



