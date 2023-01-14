import express from 'express';

import fs from 'fs';
import path from 'path';

import { squirrel } from '../db/db.js';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 5175;
const ADD = '0.0.0.0';

app.get("/", (req, res) => {
    res.send('Hello, World!');
});

app.get("/db/create", (req, res) => {
    console.log(req);
    const db = squirrel.createDB("testdb.db");
    db.run(`CREATE TABLE IF NOT EXISTS test(rowid INTEGERY PRIMARY KEY);`);
    db.close();
    res.send('Create DB');
})

app.get("/db/create/:dbName", (req, res) => {
    console.log(req);
    console.log(req.params.dbName)
    const db = squirrel.createDB(req.params.dbName + ".db");
    db.run(`CREATE TABLE IF NOT EXISTS test(rowid INTEGERY PRIMARY KEY);`);
    db.close();
    res.send(`Created DB: ${req.params.dbName}.db`);
})

app.post("/db/create/:dbName", (req, res) => {
    console.log(req);
    console.log(req.params.dbName)
    const db = squirrel.createDB(req.params.dbName + ".db");
    db.run(`CREATE TABLE IF NOT EXISTS test(rowid INTEGERY PRIMARY KEY);`);
    db.close();
    res.send(`Created DB: ${req.params.dbName}.db`);
})

app.get("/db/:dbName/createTable/:tableName", (req, res) => {
    const db = squirrel.createTable(req.params.dbName, req.params.tableName);
    db.close();
    res.send(`Created table: ${req.params.tableName} in ${req.params.dbName}.db`);
})

app.get("/db/:dbName/table/:tableName/addColumn/:columnName/:columnType", (req, res) => {
    const db = squirrel.addColumn(req.params.dbName, req.params.tableName, req.params.columnName, req.params.columnType);
    db.close();
    res.send(`Added column: ${req.params.columnName} to table ${req.params.tableName} in ${req.params.dbName}.db`);
})

app.post("/db/create", (req, res) => {
    console.log(req);
    res.send('Create DB');
})

/*
app.get("/db/find", (req, res) => {
    console.log(req);

    const directoryPath = path.join(__dirname, 'db');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach((file) => {
            console.log(file);
        });
    });
    res.send('Find DB');
})
*/

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});