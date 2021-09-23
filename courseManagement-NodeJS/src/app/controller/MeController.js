const Course = require("../model/Course");
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require("../../util/mongoose");

class MeController {

    // [GET] /me/storedCourses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted(),])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                    deletedCount,
                });
            })
            .catch(next);

    }

    trashCourses(req, res, next) {
        Course.findDeleted({}).sortable(req)
            .then((courses) => {
                res.render('me/trash-courses', {
                    deletedCourses: multipleMongooseToObject(courses)
                });
            })
            .catch(next)
    }
}

module.exports = new MeController();
