// requiring mongoose for use in model
const mongoose = require("mongoose");
// creating a job schema with the necessary properties
let JobSchema = mongoose.Schema({
  // decription property with string type and required set to true
  description: {
    type: String,
    required: true,
  },
  // location property with string type and required set to true
  location: {
    type: String,
    required: true,
  },
  // priority property with string type and required set to true
  priority: {
    type: String,
    required: true,
  },
  // status property with string type and required set to true
  status: {
    type: String,
    required: true,
  },
});
// declaring newly created scchema
let JobBackUp = mongoose.model("JobBackUp", JobSchema);
// exporting it for use in controller
module.exports = JobBackUp;
