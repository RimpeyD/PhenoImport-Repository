
withConfig(configuration) {
    inline(phase: 'CONVERSION') { source, context, classNode ->
        classNode.putNodeMetaData('projectVersion', '17.1-SNAPSHOT')
        classNode.putNodeMetaData('projectName', 'Rmodules')
        classNode.putNodeMetaData('isPlugin', 'true')
    }
}
