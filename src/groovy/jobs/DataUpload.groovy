package jobs

import jobs.steps.*
import jobs.steps.helpers.SimpleAddColumnConfigurator
import jobs.steps.helpers.WaterfallColumnConfigurator
import jobs.table.Table
import jobs.table.columns.PrimaryKeyColumn
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Scope
import org.springframework.stereotype.Component

import javax.annotation.PostConstruct

import static jobs.steps.AbstractDumpStep.DEFAULT_OUTPUT_FILE_NAME

@Component
@Scope('job')
class DataUpload extends AbstractAnalysisJob {



    @PostConstruct
    void init() {
        print('.groovy')
        print(params)
    }

    @Override
    protected List<Step> prepareSteps() {
        List<Step> steps = []
        steps << new RCommandsStep(
                temporaryDirectory: temporaryDirectory,
                scriptsDirectory: scriptsDirectory,
                rStatements: RStatements,
                studyName: studyName,
                params: params,
                extraParams: [inputFileName: DEFAULT_OUTPUT_FILE_NAME])

        steps
    }

    @Override
    protected List<String> getRStatements() {
        String source = 'source(\'$pluginDirectory/DataUpload/DataUpload.R\')'

        String arguments = "/home/georgeyuan/Pheno-Import/pheno_import.sh"
        arguments += " '"+params.topNode+"' '"+params.studyId+"' '"+params.studyName+"'"
        arguments += " '"+params.phenoAddress+"' '"+params.phenoUsername+"' '"+params.phenoPassword+"'"

        for (int i = 0; i < params.patientIds.length; i++){
            arguments+=" '"+params.patientIds[i]+"'"
        }

        String uploadData = "DataUpload.loader(command=\""+arguments+"\")"

        [source, uploadData]
    }

    @Override
    protected getForwardPath() {
        "/dataUpload/dataUploadOut?jobName=$name"
    }
}
