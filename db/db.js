import sqlite3 from "sqlite3"

export const squirrel = {
    createDB: function(dbName) {
        console.log(`creating new database ${dbName}`)
        return new sqlite3.Database(`./db/${dbName}`, (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('Connected to the SQlite database.');
    })},

    createTable: function(dbName, tableName) {
      console.log(`creating new table ${tableName} in db ${dbName}`)
      const db = new sqlite3.Database(`./db/${dbName}.db`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Connected to the SQlite database: ${dbName}.`);
      });
      db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(rowid INTEGERY PRIMARY KEY);`);
      return db;
    },

    addColumn: function(dbName, tableName, columnName, columnType) {
      console.log(`adding new column ${columnName} to table ${tableName} in db ${dbName}`)
      const db = new sqlite3.Database(`./db/${dbName}.db`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Connected to the SQlite database: ${dbName}.`);
      });
      db.run(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType};`);
      return db;
    }

}