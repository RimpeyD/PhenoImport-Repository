DataUpload.loader <- function (
    command = 'unset'
)
{
    cat('Uploading Phenotips Data\n')
    # cat('Attempting to run command:\n')
    # print(command)
	system(command)
}
