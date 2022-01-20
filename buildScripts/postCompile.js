const fs = require("fs-extra");
// const libName = process.env.LIB_NAME;
const libName = "";

(async function build() {
    const pkg = require("../package.json");
    // pkg["peerDependencies"] = pkg["dependencies"];
    // delete pkg["dependencies"];

    // If standalone build required from Phoenix for Widgets and Components
    if (libName) {
        pkg["name"] = `${pkg["name"]}-${libName}`;
    }

    // Keep only the needed folders
    if (libName === "widgets") {
        fs.removeSync("lib/components");
    }

    if (libName === "components") {
        fs.removeSync("lib/widgets");
    }

    pkg["main"] = "widgets/index.ts";
    pkg["types"] = "types/index.d.ts";

    // Prepare the package.json for release
    fs.writeFileSync("lib/package.json", JSON.stringify(pkg, null, 2));

    // Prepare .npmrc for release
    fs.copyFileSync(".npmrc", "lib/.npmrc");
    fs.copySync("types", "lib/types");
})();
