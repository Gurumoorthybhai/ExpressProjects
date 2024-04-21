// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/hello', (req, res) => {
//     res.status(200);
//     res.send('Hello World');
// });

// app.listen(3000, () => {
//     console.log(`Server is running on port 3000`);
    
// })

class Database {

    constructor() {
        this.connection = null;
    }

    static getInstance() {

        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    connect() {
        this.connection = 'Connected';
    }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1.connect();

console.log(db1.connection);
console.log(db1 === db2);
