// requiring express to use for the backend
const express = require("express");
// declaring app as the required express function
const app = express();
// requiring cors to use in express server
const cors = require("cors");
// requiring helmet for use in express server
const helmet = require("helmet");
// requiring mongoose to use in express server
const mongoose = require("mongoose");
// requiring CRUD functions from controller
const controller = require("./controllers/job.controller");
// declaring connection uri , to connect to mongodDB, as a variable
const uri =
  "mongodb+srv://Godi28:1Ogodiseng2@my-first-cluster.zti3c4x.mongodb.net/?retryWrites=true&w=majority";
// connecting to MongoDB  
mongoose
  // using uri to connect
  .connect(uri)
  // promise returing connection results and listening on port 4000 then dispalying connection message
  .then((result) => app.listen(4000, () => console.log("Listening engaged")))
  // error handling for the connection 
  .catch((err) => console.log(err));

// using helmet middleware
app.use(helmet());
// middleware to parse JSON in post request
app.use(express.json());
// using cors middleware
app.use(cors());
// newJob post route that has a callback function from the controller to create new document
app.post("/newJob", controller.create.newJob);
// updateMany post route that has a callback function from the controller to update documents
app.post("/updateMany", controller.updateManyByDescription.updateManyEntries);
// findStatus post route that has a callback function from the controller to find a document by status
app.post("/findByStatus", controller.findByStatus.findOneTypeOfEntry);
// backup post route that has a callback function from the controller to archive a document
app.post("/backUp", controller.jobArchive.archiveOneEntry);
/* updateStatuses post route that has a callback function from the controller to update multiple 
statuses of adocument*/
app.post(
  "/updateStatuses",
  controller.UpdateMultipleStatus.multipleStatusUpdate
);
// sortData post route that has a callback function from the controller to sort documents by date and status
app.post("/sortData", controller.sortByDateAndStatus.sortEntries);
// setting the server to listen on port 8000
app.listen(8000, function () {
  // printing message to the console
  console.log("Express listening on port 8000!");
});
