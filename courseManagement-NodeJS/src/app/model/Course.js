const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const { TRUE } = require('node-sass');


const Course = new Schema({

    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true }

}, {
    timestamps: true,
});

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all' })


module.exports = mongoose.model('Course', Course);