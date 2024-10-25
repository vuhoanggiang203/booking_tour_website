import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const url = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

// Tạo kết nối 
const connection = mysql.createConnection(url);

// Hàm kết nối 
async function connect() {
    return new Promise((resolve, reject) => {
        connection.connect(error => {
            if (error) {
                console.error('Connect Database Failure!!!', error);
                reject(error);
            } else {
                console.log('Connect Database Successfully!!!');
                resolve(connection);
            }
        });
    });
}

export { connect, connection as db };