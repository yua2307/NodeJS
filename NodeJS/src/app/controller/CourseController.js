const Course = require("../model/Course");
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require("../../util/mongoose");

class CourseController {

    showDetail(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                })
            })
            .catch(next);
    }
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    edit(req, res, next) {

        Course.findById({ _id: req.params.id })
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                })
            })

    }

    update(req, res, next) {
        Course.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/storedCourses'))
            .catch(next);
    }

    // [DELETE] 
    destroy(req, res, next) {

        /// console.log('Arrives')
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }



    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {

            });
    }
}

module.exports = new CourseController();
