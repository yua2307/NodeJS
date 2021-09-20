const Course = require("../model/Course");
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require("../../util/mongoose");

class MeController {



    // [GET] /me/storedCourses
    storedCourses(req, res, next) {
        // res.json(res.locals._sort);
        let courseQuery = Course.find({});

        req.query.column
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted(),])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                    deletedCount,
                });
            })
            .catch(next);

    }

    trashCourses(req, res, next) {
        Course.findDeleted()
            .then((courses) => {
                res.render('me/trash-courses', {
                    deletedCourses: multipleMongooseToObject(courses)
                });
            })
            .catch(next)

    }

}

module.exports = new MeController();
