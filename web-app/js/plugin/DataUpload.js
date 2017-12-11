//console.log("CONNECTED TO JAVASCRIPT BABY @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

/**
 * Register drag and drop.
 * Clear out all gobal variables and reset them to blank.
 */
function loadDataUploadView() {
};

// constructor
var DataUploadView = function () {
    RmodulesView.call(this);
	this.display_patients_list();
};

// inherit RmodulesView
DataUploadView.prototype = new RmodulesView();

// correct the pointer
DataUploadView.prototype.constructor = DataUploadView;

// list of patients to add
DataUploadView.prototype.patients = [];

// submit analysis job
DataUploadView.prototype.submit_job = function () {
//	console.log("SUBMITTING JOB BABY @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

    // get formParams
    var formParams = this.get_form_params();
	console.log(formParams);

	// if formParams are submitable
	if (this.parameters_are_valid(formParams)) {
		console.log("TRYING TO SUBMIT FORM @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        submitJob(formParams);
	}
};

// display the listof patients that are going to uploaded
DataUploadView.prototype.display_patients_list = function () {
	if (this.patients.length == 0){
		document.getElementById("patientList").innerHTML = "No Patients to Upload";
	} else {
		document.getElementById("patientList").innerHTML = this.patients;
	}
	
};

// add patient to upload
DataUploadView.prototype.add_patient = function () {
	var new_patient = document.getElementById("entered_patient_id").value;
	document.getElementById("entered_patient_id").value = "";
	if (new_patient != "") {
		this.patients.push(new_patient);
	}
	this.display_patients_list();
};

// get form params
DataUploadView.prototype.get_form_params = function () {
//	console.log("GETTING FORM PARAMETERS BABY @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    return  {
		studyId: document.getElementById('studyId').value,
		topNode: document.getElementById('topNode').value,
		studyName: document.getElementById('studyName').value,
		phenoAddress: document.getElementById('phenoAddress').value,
		phenoUsername: document.getElementById('phenoUsername').value,
		phenoPassword: document.getElementById('phenoPassword').value,
		patientIds: this.patients,
		jobType: 'DataUpload'
    };
};

// check if paramters are valid
DataUploadView.prototype.parameters_are_valid = function(form_params) {
//	console.log("VALIDATING THE FORM DATA BABY @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	var keys = [
		'studyId', 
		'topNode', 
		'studyName', 
		'phenoAddress', 
		'phenoUsername', 
		'phenoPassword',
		'patientIds'
	];
	console.log("keys length: " + keys.length);
	for (var i = 0; i < keys.length; i++){
		console.log("key: " + keys[i]);
		if (form_params.hasOwnProperty(keys[i])){
			if (form_params[keys[i]] == null) {
				console.log("missing value in for: " + keys[i]);
				return false;
			}
		} else {
			console.log("form missing parameters");
			return false;		
		}
	}
	return true;
};

// init heat map view instance
var dataUpload = new DataUploadView();
