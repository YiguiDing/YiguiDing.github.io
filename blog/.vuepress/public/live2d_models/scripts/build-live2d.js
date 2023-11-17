import { execa } from "execa";
import path from "path";

let cwd = process.cwd()
let proj_root = path.resolve(cwd.slice(0, cwd.indexOf(".vuepress")), "../")

main()

async function main() {
    await buildModels();
}

async function buildModels() {
    try {
        const { stdout } = await execa(
            "node",
            [
                path.resolve(proj_root, "./node_modules/live2d-static-api/build.js"),
                "fromBasePath=models",
                "toBasePath=indexes",
                "isCompress=false"
            ]
        );
        console.log(stdout);
        console.log("buildModels successfully.");
    } catch (error) {
        console.error(`ERROR:${error}`);
    }
}