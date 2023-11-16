// import { data } from "../../../data.json"
import path from "path"
import fs from "fs"

export const config = {
    api: {
        externalResolver: true,
    },
}


const { promisify } = require("util")
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


async function handler(req, res) {
    // res.status(200).send(JSON.stringify(data, null, 2))

    const method = req?.method
    const id = parseInt(req?.query.id)
    const recordFromBody = req?.body
    const jsonFile = path.resolve("./", "data.json")

    switch (method) {
        case "POST":
            await postMethod();
            break;
        case "PUT":
            await putMethod();
            break;
        case "DELETE":
            await deleteMethod();
            break;
        default:
            res.status(501).send(`Method ${method} not implemented`)
            console.log(`Method ${method} not implemented`);

    }

    async function putMethod(params) {

        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const products = JSON.parse(readFileData).products
            if (!products) {
                res.status(404).send("Error: Request fialed with status code 404")
            } else {
                const newProducts = products.map(function (rec) {
                    return rec.id === id ? recordFromBody : rec
                })
                writeFile(jsonFile, JSON.stringify({ products: newProducts }, null, 2))
                res.setHeader("Content-Type", "application/json")
                res.status(200).send(JSON.stringify(recordFromBody, null, 2))
                console.log(`Put/api/products/ ${id} status: 200`);
            }


        } catch (e) {
            res.status(500).send(`Put/api/products/${id} status: 500 unexpected error`)
            console.log(`PUT/api/products/${id} status:500`, e);
        }

    }


    async function postMethod(params) {

        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const products = JSON.parse(readFileData).products
            if (!products) {
                res.status(404).send("Error: Request fialed with status code 404")
            } else {
                const idNew = products.reduce((accumlator, currentValue) => {
                    const idCurrent = parseInt(currentValue.id)
                    return idCurrent > accumlator ? idCurrent : accumlator
                }, 0) + 1

                const newProductsRec = { ...recordFromBody, id: idNew.toString() }

                const newProducts = [newProductsRec, ...products]
                writeFile(jsonFile, JSON.stringify({ products: newProducts }, null, 2))
                res.setHeader("Content-Type", "application/json")
                res.status(200).send(JSON.stringify(newProductsRec, null, 2))
                console.log(`POST/api/products/ ${id} status: 200`);
            }


        } catch (e) {
            res.status(500).send(`POST/api/products/${id} status: 500 unexpected error`)
            console.log(`POST/api/products/${id} status:500`, e);


        }

    }

    async function deleteMethod(params) {

        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const products = JSON.parse(readFileData).products
            if (!products) {
                res.status(404).send("Error: Request fialed with status code 404")
            } else {
                const newProducts = products.filter(function (rec) {
                    return rec.id != id
                })
                writeFile(jsonFile, JSON.stringify({ products: newProducts }, null, 2))
                res.setHeader("Content-Type", "application/json")
                res.status(200).send(JSON.stringify(products.find(rec => rec.id == id), null, 2))
                console.log(`DELETE/api/products/ ${id} status: 200`);
            }


        } catch (e) {
            res.status(500).send(`DELETE/api/products/${id} status: 500 unexpected error`)
            console.log(`DELETE/api/products/${id} status:500`, e);


        }

    }

}

export default handler