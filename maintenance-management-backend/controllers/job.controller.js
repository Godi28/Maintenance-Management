// requiring Job model from the models folder
const Job = require("../models/model.js");
// exporting the create CRUD operation
exports.create = {
  // function new job that creates a new document of a job in the database
  newJob: function (req, res) {
    // requiring the job model from models for creating new job
    const jobModel = require("../models/model.js");
    // creating new job from the job model
    let job = new jobModel({
      // setting the description property to the description in the request body from the front end
      description: req.body.description,
      // setting the location property to the location in the request body from the front end
      location: req.body.location,
      // setting the priority property to the priority in the request body from the front end
      priority: req.body.priority,
      // setting the status property to the status in the request body from the front end
      status: req.body.status,
    });
    // saving newly created document
    job.save(function (err, data) {
      /* if statement for error handling that logs the error to the console and sends error code and message
       to front end*/
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ message: "Some error occurred while creating the job." });
        // else statement that prints added document to console and sends message to the front end
      } else {
        console.log(data);
        res.send("The job has been added.");
      }
    });
  },
};

// exporting the update by description CRUD operation
exports.updateManyByDescription = {
  // updateManyEntries function that updates location,priority and status based on the description
  updateManyEntries: function (req, res) {
    // query for update that sets description property to updateDescription from the front end
    let query = { description: req.body.updateDescription };
    // updating document
    Job.updateMany(
      // search query
      query,
      {
        // setting the location property to the updateLocation in the request body from the front end
        location: req.body.updateLocation,
        // setting the priority property to the updatePriority in the request body from the front end
        priority: req.body.updatePriority,
        // setting the status property to the updateStatus in the request body from the front end
        status: req.body.updateStatus,
      },
      { new: true },
      // function for error handling and responding to front end
      function (err, doc) {
        // if statement for error handling thats sends message to console
        if (err) {
          console.log("Something went wrong when updating data.");
        }
        // response message to front end when successful
        res.send("Updated.");
      }
    );
  },
};

// expoting findByStatus CRUD operation
exports.findByStatus = {
  // findOneTyperOfEntry function that find documents based on their status
  findOneTypeOfEntry: function (req, res) {
    // query to find the documents based on the request findStatus from the front end
    let query = { status: req.body.findStatus };
    // finding the job based on the query
    Job.find(
      query,
      // function for error handling and sending response to front end
      function (err, doc) {
        // if statement to send error message to console
        if (err) {
          console.log("Something went wrong when finding data.");
        }
        // sending documents from search to the front end
        res.send(doc);
      }
    );
  },
};
// exporting archive CRUD operation
exports.jobArchive = {
  //archiveOneEntry function that saves a deleted document to a different model(backup)
  archiveOneEntry: function (req, res) {
    // query to search for the document to delete based on archiveDescription request from the front end
    let query = { description: req.body.archiveDescription };
    // Deleting document based on the query
    Job.findOneAndRemove(
      query,
      // function for error handling and to send response to front end
      function (err, doc) {
        // if statement that send error message to the console
        if (err) {
          console.log("Something went wrong when archiving the document.");
        }
        // requiring jobBackUp model from models
        const jobBackUp = require("../models/backup.js");
        // creating new job with the deleted document
        let job = new jobBackUp(doc);
        // setting the job to be new
        job.isNew = true;
        // saving the new job to backup , error handling and sending response to front end
        job.save(function (err, data) {
          // if statement to send error message to console and front end as well as the error code to front end
          if (err) {
            console.log(err);
            res
              .status(500)
              .send({
                message: "Some error occurred while archiving the job.",
              });
            // else statement to sent document to console and sucsess message to front end
          } else {
            console.log(data);
            res.send("The job has been archived.");
          }
        });
      }
    );
  },
};

// exporting updateMultipleStatus CRUD operations
exports.UpdateMultipleStatus = {
  // multipleStatusUpdate function that updates multiple statuses at once
  multipleStatusUpdate: function (req, res) {
    // query to search for statuses to update based on request updateStatuses from the front end
    let query = { status: req.body.updateStatuses };
    // updating many jobs
    Job.updateMany(
      // query for hte update
      query,
      {
        // setting the status property to the newStatus in the request body from the front end
        status: req.body.newStatus,
      },
      { new: true },
      // function for error handling and sending response to front end
      function (err, doc) {
        // if statement to send error message to the console
        if (err) {
          console.log("Something went wrong when updating data.");
        }
        // sending sucsess message to front end
        res.send("Updated.");
      }
    );
  },
};

// epxporting sortByDateAndStatus CRUD operation
exports.sortByDateAndStatus = {
  // sortEntries function that lists and orders documents by status and date
  sortEntries: function (req, res) {
    // finding the documents
    Job.find(function (err, doc) {
      // if statement to send error message to console
      if (err) {
        console.log("Something went wrong when finding data.");
      }
      // sending the sorted list to the front end
      res.send(doc);
      // sorting data by date and status in descending order
    }).sort({ date: "descending", status: "descending" });
  },
};
