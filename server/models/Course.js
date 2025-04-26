const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  students: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  isPublished: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual populate for content
CourseSchema.virtual('content', {
  ref: 'Content',
  localField: '_id',
  foreignField: 'course',
  justOne: false
});

// Cascade delete content when a course is deleted
CourseSchema.pre('remove', async function(next) {
  await this.model('Content').deleteMany({ course: this._id });
  next();
});

module.exports = mongoose.model('Course', CourseSchema);