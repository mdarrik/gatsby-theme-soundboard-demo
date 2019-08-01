module.exports = {
    plugins: [
        {
            resolve: "gatsby-theme-soundboard",
            options: {
                soundPath: "sounds",
                metadataPath: "sound-metadata",
                basePath: "/sounds"
            }
        }
    ]
}