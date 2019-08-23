const path = require("path")

module.exports = {
entry:path.join(_dirname,"src/index.js"),
output: {
    filename: "bundle.js",
    path: path.join(_dirname,"dist")
}
}