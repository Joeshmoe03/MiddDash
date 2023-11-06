const mysql = require("mysql2/promise");

// Database connection configuration
const dbConfig = {
  host: "127.0.0.1",
  database: "midddash",
  user: "root",
  password: "MiddDev23",
};

// Need to implement account authetication
const userData = {
  username: "JohnSmith",
  email: "JohnSmith@middlebury.edu",
  password: "1234",
  first_name: "John",
  last_name: "Smith",
  phone_number: "123-456-7890",
  dorm: "Hadley",
};

async function createAccount() {
  try {
    // Create a connection to the database
    const connection = await mysql.createConnection(dbConfig);

    // Ensure all parameters are defined and not undefined
    const {
      username,
      email,
      password,
      first_name,
      last_name,
      phone_number,
      dorm,
    } = userData;

    // Insert user data into the "Users" table
    const [results, fields] = await connection.execute(
      "INSERT INTO Users (username, email, password, first_name, last_name, phone_number, dorm, registration_date) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())",
      [username, email, password, first_name, last_name, phone_number, dorm]
    );

    // Close the database connection
    await connection.end();

    console.log(`User '${username}' account created successfully.`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

createAccount();
