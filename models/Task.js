const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TaskSchema = new Schema({
    task: String
});

const TaskModel = model('Task', TaskSchema);

module.exports = TaskModel;