const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const { TRUE } = require('node-sass');


const CourseSchema = new Schema({

    _id: { type: Number, },
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true }

}, {
    _id: false,
    timestamps: true,
});

// add plugin
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
// add sequence plugin auto increase ID 
CourseSchema.plugin(AutoIncrement);
// custom query helpers
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {

        const isValidType = ['asc', 'desc'].includes(req.query.type);

        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc'
        });
    }
    return this;
}

module.exports = mongoose.model('Course', CourseSchema);