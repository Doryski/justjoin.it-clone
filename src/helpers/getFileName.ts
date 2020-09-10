const getFileName = (filename: string) =>
    filename.substring(
        filename.lastIndexOf('\\') + 1,
        filename.length
    )

export default getFileName
