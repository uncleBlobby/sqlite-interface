import sqlite3 from "sqlite3"

export const sqi = {
    create: function(dbName) {
        console.log(`creating new database ${dbName}`)
        return new sqlite3.Database(`./db/${dbName}`, (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('Connected to the SQlite database.');
    })}
}