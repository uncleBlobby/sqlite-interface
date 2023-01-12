import express from 'express';

import { sqi } from '../db/db.js';

const app = express();

const PORT = 5175;
const ADD = '0.0.0.0';

app.get("/", (req, res) => {
    res.send('Hello, World!');
});

app.get("/db/create", (req, res) => {
    console.log(req);
    const db = sqi.create("testdb.db");
    db.run(`CREATE TABLE IF NOT EXISTS test(rowid INTEGERY PRIMARY KEY);`);
    res.send('Create DB');
})

app.post("/db/create", (req, res) => {
    console.log(req);
    res.send('Create DB');
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});