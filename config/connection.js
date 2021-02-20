// Set up MySQL connection.
const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
  // connect to remote db
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
      host: 'd6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      user: 'ezj4pgt73oykwfq3',
      // NOTE: Be sure to add your MySQL password here!
      password: 'opbw1fvexq33ulru',
      database: 'csklpj4rgyotjve7',
    });
};

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
