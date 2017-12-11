%{--include js lib for heatmap dynamically--}%
<r:require modules="data_upload"/>
<r:layoutResources disposition="defer"/>

<div id="analysisWidget">

    <h2>Variable Selection</h2>

    <form id="analysisForm">
		<label>Top Node:</label>
		<input type="text" id="topNode"/>

		<label>Study ID:</label>
		<input type="text" id="studyId"/>

		<label>Study Name:</label>
		<input type="text" id="studyName"/>

		<label>Phenotips Address:</label>
		<input type="text" id="phenoAddress"/>

		<label>Phenotips Username:</label>
		<input type="text" id="phenoUsername"/>

		<label>Phenotips Password:</label>
		<input type="text" id="phenoPassword"/>
	
		<br/>
		<br/>
		<br/>

		<h3>Patients List:</h3><br/>
		<div>
			<input class="col-sm-9" type="text" id="entered_patient_id"/>
			<input type="button" value="Add" onClick="dataUpload.add_patient()"/>
		</div><br/>
		<div id="patientList">No Patients on Upload List</div><br/>
		<input type="button" value="Upload Data" onClick="dataUpload.submit_job(this.form);" class="runAnalysisBtn"/><br/>
	</form>

	<br/>
	<br/>

</div>
