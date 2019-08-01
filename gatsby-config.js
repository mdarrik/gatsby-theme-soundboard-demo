module.exports = {
    plugins: [
        {
            resolve: "@mdarrik/gatsby-theme-soundboard",
            options: {
                soundPath: "sounds",
                metadataPath: "sound-metadata",
                basePath: "/sounds"
            }
        }
    ]
}