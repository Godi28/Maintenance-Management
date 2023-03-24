// importing React for use in the component
import React from "react";
// importing LoadingIcons for loading screen
import LoadingIcons from "react-loading-icons";

//Crud class that performs all the CRUD operations for the maintenance management
class Crud extends React.Component {
  /*
   * constructor setting initial states of res,updateManyRes, newStatus, updateStatuses ,archiveDescription,
   * findStatus,updateStatus,updatePriority,findStatusRes,archiveRes,updateStatusesRes,sortDataRes, description
   * ,location,priority,updateLocation,status,updateDescription and
   * loading with resprective handle functions
   * @param props properties
   */
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      updateManyRes: "",
      findByStatusRes: "",
      archiveRes: "",
      updateStatusesRes: "",
      sortDataRes: "",
      description: "",
      location: "",
      priority: "",
      status: "",
      loading: false,
      updateDescription: "",
      updateLocation: "",
      updatePriority: "",
      updateStatus: "",
      findStatus: "",
      archiveDescription: "",
      updateStatuses: "",
      newStatus: "",
    };
    // functions to handle description property input changes binded to the key word 'this'
    this.handleDescription = this.handleDescription.bind(this);
    // functions to handle location property input changes binded to the key word 'this'
    this.handleLocation = this.handleLocation.bind(this);
    // functions to handle priority property input changes binded to the key word 'this'
    this.handlePriority = this.handlePriority.bind(this);
    // functions to handle status property input changes binded to the key word 'this'
    this.handleStatus = this.handleStatus.bind(this);
    // functions to handle the form submit binded to the key word 'this'
    this.handleSubmit = this.handleSubmit.bind(this);
    // functions to handle updateDescription property input changes binded to the key word 'this'
    this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
    // functions to handle updateLocation property input changes binded to the key word 'this'
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
    // functions to handle updatePriority property input changes binded to the key word 'this'
    this.handleUpdatePriority = this.handleUpdatePriority.bind(this);
    // functions to handle updatseStatus property input changes binded to the key word 'this'
    this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
    // functions to handle the form submit binded to the key word 'this'
    this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
    // functions to handle findStatus property input changes binded to the key word 'this'
    this.handleFindStatus = this.handleFindStatus.bind(this);
    // functions to handle the form submit binded to the key word 'this
    this.handleFindStatusSubmit = this.handleFindStatusSubmit.bind(this);
    // functions to handle archiveDescription property input changes binded to the key word 'this'
    this.handleArchiveDescription = this.handleArchiveDescription.bind(this);
    // functions to handle the form submit binded to the key word 'this
    this.handleArchiveSubmit = this.handleArchiveSubmit.bind(this);
    // functions to handle updatseStatuses property input changes binded to the key word 'this'
    this.handleUpdateStatuses = this.handleUpdateStatuses.bind(this);
    // functions to handle the form submit binded to the key word 'this
    this.handleUpdateStatusesSubmit =
      this.handleUpdateStatusesSubmit.bind(this);
    // functions to handle newStatus property input changes binded to the key word 'this'
    this.handleNewStatus = this.handleNewStatus.bind(this);
    // functions to handle the form submit binded to the key word 'this
    this.handleSortDataSubmit = this.handleSortDataSubmit.bind(this);
  }

  // handle description function that sets the description input to the value entered in the search box
  handleDescription(e) {
    this.setState({ description: e.target.value });
  }
  // handle location function that sets the location input to the value entered in the search box
  handleLocation(e) {
    this.setState({ location: e.target.value });
  }
  // handle priority function that sets the priority input to the value entered in the search box
  handlePriority(e) {
    this.setState({ priority: e.target.value });
  }
  // handle status function that sets the status input to the value entered in the search box
  handleStatus(e) {
    this.setState({ status: e.target.value });
  }
  /* handle updateDescription function that sets the updateDescription input to the value entered in the search
  box*/
  handleUpdateDescription(e) {
    this.setState({ updateDescription: e.target.value });
  }
  /* handle updateLocation function that sets the updateLocation input to the value entered in the search
  box*/
  handleUpdateLocation(e) {
    this.setState({ updateLocation: e.target.value });
  }
  /* handle updatePriority function that sets the updatePriority input to the value entered in the search
  box*/
  handleUpdatePriority(e) {
    this.setState({ updatePriority: e.target.value });
  }
  /* handle updateStatus function that sets the updateStatus input to the value entered in the search
  box*/
  handleUpdateStatus(e) {
    this.setState({ updateStatus: e.target.value });
  }
  /* handle findStatus function that sets the findSatsus input to the value entered in the search
  box*/
  handleFindStatus(e) {
    this.setState({ findStatus: e.target.value });
  }
  /* handle archiveDescription function that sets the archiveDescription input to the value entered in the 
   search box*/
  handleArchiveDescription(e) {
    this.setState({ archiveDescription: e.target.value });
  }
  /* handle updateStatuses function that sets the updateStatuses input to the value entered in the search
  box*/
  handleUpdateStatuses(e) {
    this.setState({ updateStatuses: e.target.value });
  }
  /* handle newStatus function that sets the newStatsus input to the value entered in the search
  box*/
  handleNewStatus(e) {
    this.setState({ newStatus: e.target.value });
  }
  /* handle submit function to make fetch calls to the backend to create new job by sending information
   *
   */
  handleSubmit(e) {
    // preventing the page reload
    e.preventDefault();
    // storing description state as a variable
    const description = this.state.description;
    // storing location state as a variable
    const location = this.state.location;
    // storing priority state as a variable
    const priority = this.state.priority;
    // storing status state as a variable
    const status = this.state.status;
    /* setting loading state for loading icon to true and making a fetch call to the backend via the newJob
     * route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route newJob
      fetch("/newJob", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          description,
          location,
          priority,
          status,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.text())
        // 'res' state set to consumed javascript string response
        .then((result) => {
          this.setState({ res: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });
  }

  /* handle submitUpdate function to make fetch calls to the backend to create new job by sending information
   *
   */
  handleSubmitUpdate(e) {
    // preventing the page reload
    e.preventDefault();
    // storing updateDescription state as a variable
    const updateDescription = this.state.updateDescription;
    // storing updateLocation state as a variable
    const updateLocation = this.state.updateLocation;
    // storing updatePriority state as a variable
    const updatePriority = this.state.updatePriority;
    // storing updateStatus state as a variable
    const updateStatus = this.state.updateStatus;

    /* setting loading state for loading icon to true and making a fetch call to the backend via the updateMany
     * route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route updateMany
      fetch("/updateMany", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          updateDescription,
          updateLocation,
          updatePriority,
          updateStatus,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.text())
        // 'updateManyRes' state set to consumed javascript string response
        .then((result) => {
          this.setState({ updateManyRes: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });
  }

  /* handle FindStatusSubmit function to make fetch calls to the backend to create new job by sending
   *  information
   */
  handleFindStatusSubmit(e) {
    // preventing the page reload
    e.preventDefault();
    // storing findStatus state as a variable
    const findStatus = this.state.findStatus;
    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * findByStatus route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route findByStatus
      fetch("/findByStatus", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          findStatus,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.text())
        // 'findByStatusRes' state set to consumed javascript string response
        .then((result) => {
          this.setState({ findByStatusRes: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });
  }

  /* handle archiveSubmit function to make fetch calls to the backend to create new job by sending
   *  information
   */
  handleArchiveSubmit(e) {
    // preventing the page reload
    e.preventDefault();
    // storing archiveDescription state as a variable
    const archiveDescription = this.state.archiveDescription;
    /* setting loading state for loading icon to true and making a fetch call to the backend via the backUp
     * route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route user
      fetch("/backUp", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          archiveDescription,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.text())
        // 'archiveRes' state set to consumed javascript string response
        .then((result) => {
          this.setState({ archiveRes: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });
  }

  /* handle updateStatusesSubmit function to make fetch calls to the backend to create new job by sending
   *  information
   */
  handleUpdateStatusesSubmit(e) {
    // preventing the page reload
    e.preventDefault();
    // storing updateStatuses state as a variable
    const updateStatuses = this.state.updateStatuses;
    // storing newStatus state as a variable
    const newStatus = this.state.newStatus;
    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * updateStatuses route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route updateStatuses
      fetch("/updateStatuses", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          updateStatuses,
          newStatus,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.text())
        // 'updateStatusesRes' state set to consumed javascript string response
        .then((result) => {
          this.setState({ updateStatusesRes: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });
  }

  /* handle sortDataSubmit function to make fetch calls to the backend to create new job by sending
   *  a request
   */
  handleSortDataSubmit(e) {
    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * sortData route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route user
      fetch("/sortData", {
        // fetch method
        method: "POST",
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.text())
        // 'sortData' state set to consumed javascript string response
        .then((result) => {
          this.setState({ sortDataRes: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });
  }

  render() {
    // server response res state stored in variable for use in html
    let res = this.state.res;
    // server response loadinng state stored in variable for use in html
    let loading = this.state.loading;
    // server response updateManyRes state stored in variable for use in html
    let updateManyRes = this.state.updateManyRes;
    // server response findStatusRes state stored in variable for use in html
    let findByStatusRes = this.state.findByStatusRes;
    // server response archiveRes state stored in variable for use in html
    let archiveRes = this.state.archiveRes;
    // server response updateStatusesRes state stored in variable for use in html
    let updateStatusesRes = this.state.updateStatusesRes;
    // server response sortDataRes state stored in variable for use in html
    let sortDataRes = this.state.sortDataRes;
    // html to print the form for user input and call the respective functions appropriately
    return (
      // rendering loading icon when api is loading
      loading ? (
        <LoadingIcons.SpinningCircles />
      ) : (
        <div key={4}>
          <br />
          <br /> <h1>Maintenance Management</h1>
          <br />
          <h2>Create a Job</h2>
          <form onSubmit={this.handleSubmit}>
            <h5>Enter job description:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter job description"
              value={this.state.description}
              onChange={this.handleDescription}
            />
            <h5>Enter job location:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter job location"
              value={this.state.location}
              onChange={this.handleLocation}
            />
            <h5>Enter job priority:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter job priority"
              value={this.state.priority}
              onChange={this.handlePriority}
            />
            <h5>Enter job status:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter job status"
              value={this.state.status}
              onChange={this.handleStatus}
            />
            <button id="post" type="submit">
              Submit
            </button>
          </form>
          <p>{res}</p>
          <br />
          <form onSubmit={this.handleSubmitUpdate}>
            <h2>Update a Job</h2>
            <h5>Job description to update:</h5>
            <input
              id="inp2"
              type="text"
              placeholder="enter job description to update"
              value={this.state.updateDescription}
              onChange={this.handleUpdateDescription}
            />
            <h5>Update job location:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="update job location"
              value={this.state.updateLocation}
              onChange={this.handleUpdateLocation}
            />
            <h5>Update job priority:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="update job priority"
              value={this.state.updatePriority}
              onChange={this.handleUpdatePriority}
            />
            <h5>Update Status:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="update status"
              value={this.state.updateStatus}
              onChange={this.handleUpdateStatus}
            />
            <button id="post" type="submit">
              Update
            </button>
          </form>
          <p>{updateManyRes}</p>
          <br />
          <form onSubmit={this.handleFindStatusSubmit}>
            <h2>Find a Job</h2>
            <h5>Find by Status:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter status"
              value={this.state.findStatus}
              onChange={this.handleFindStatus}
            />
            <button id="post" type="submit">
              Find
            </button>
          </form>
          <p>{findByStatusRes}</p>
          <br />
          <form onSubmit={this.handleArchiveSubmit}>
            <h2>Archive a Job</h2>
            <h5>Enter Job to Archive:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter description"
              value={this.state.archiveDescription}
              onChange={this.handleArchiveDescription}
            />
            <button id="post" type="submit">
              Archive
            </button>
          </form>
          <p>{archiveRes}</p>
          <br />
          <form onSubmit={this.handleUpdateStatusesSubmit}>
            <h2>Status Batch Update</h2>
            <h5>Enter Status to Update in All Documents:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter status"
              value={this.state.updateStatuses}
              onChange={this.handleUpdateStatuses}
            />
            <h5>Enter New Status:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter status"
              value={this.state.newStatus}
              onChange={this.handleNewStatus}
            />
            <button id="post" type="submit">
              Update
            </button>
          </form>
          <p>{updateStatusesRes}</p>
          <form onSubmit={this.handleSortDataSubmit}>
            <h2>List Jobs Ordered by Status and Date</h2>
            <h5>Click to Get Documents Sorted by Date and Status </h5>
            <button id="post" type="submit">
              List Sorted Data
            </button>
            <p>{sortDataRes}</p>
          </form>
        </div>
      )
    );
  }
}

// exporting Crud component for rendering in index.js
export { Crud };
