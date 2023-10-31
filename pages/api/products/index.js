import path from "path"
import fs from "fs"


// export const config = {
//     api: {
//         externalResolver: true,
//     },
// }

const { promisify } = require("util")
const readFile = promisify(fs.readFile)

const delay = (ms) => new Promise((resolve) => { setTimeout(resolve, ms) })


export default async function handler(req, res) {

    const jsonFile = path.resolve("./", "data.json")
    try {
        const readFileData = await readFile(jsonFile)
        // await delay(1000)
        const products = JSON.parse(readFileData)
        if (products) {
            res.setHeader("Content-Type", "application/json")
            res.status(200).send(JSON.stringify(products, null, 2))
            console.log("GET/api/products status: 200");
        }

    } catch (e) {
        console.log("/api/products error", e);
        res.status(404).send("File Not Found on server")
    }
}