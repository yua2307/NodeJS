const Course = require("../model/Course");
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require("../../util/mongoose");

class CourseController {

    show(req, res, next) {

        // console.log(req.params.slug);

        // Course.findOne({ "slug": "html-css" })
        //     .then((course) => {

        //         console.log(course)
        //         res.json(course)
        //     })
        //     .catch(next);
        // res.send(req.params.slug);

        const query = Course.findOne({ "slug": "html-css" })
        query.exec(function (err, course) {
            if (err) console.log(err);
            else {
                res.json(course)
            }

        });
    }
}

module.exports = new CourseController();
