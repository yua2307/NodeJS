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

    // [DELETE]   soft delete
    destroy(req, res, next) {
        /// console.log('Arrives')
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE]
    deleteForever(req, res, next) {
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
            .then(() => res.redirect('/me/storedCourses'))
            .catch(next);
    }
    // [PATCH] /courses/restore/:id // restore course
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /courses/handleFormAction 

    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json({ message: 'Invalid action' })
        }
    }
}

module.exports = new CourseController();
