const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const { TRUE } = require('node-sass');
mongoose.plugin(slug);


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



module.exports = mongoose.model('Course', Course);