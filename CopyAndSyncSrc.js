const fs = require("fs-extra");
const copyDir = require("copy-dir");
const defaultOption = {
    utimes: true,
    mode: true,
    cover: true,
};

const copyDirSync = (srcFolders, rootSrc, rootDest, option = {}) => {
    srcFolders.forEach(folder => {
        copyDir.sync(`${rootSrc}/${folder}`, `${rootDest}/${folder}`, {
            ...defaultOption,
            ...option,
        });
    });
};

const snapCoreFolders = [""];
fs.ensureDirSync("./react-web-simple-widgets");
copyDirSync(
    snapCoreFolders,
    ".",
    "./react-web-simple-widgets",
    {
        filter: function(stat, filepath, filename) {
            // do not want copy .git directories
            if (stat === "directory" && filename === "node_modules") {
                return false;
            }

            if (stat === "directory" && filename === ".git") {
                return false;
            }

            if (filename === "yarn.lock") {
                return false;
            }

            if (stat === "directory" && filename === "react-web-simple-widgets") {
                return false;
            }

            if (stat === "directory" && filename === "examples") {
                return false;
            }

            return true; // remind to return a true value when file check passed.
        },
    }
);
