const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'b7prrqshtud5jtovtidb-mysql.services.clever-cloud.com',
  user: 'upzskqyyv6wxidw9',
  password: 'r1KcZev4pK6cgA2RlcxAZoot',
  database: 'b7prrqshtud5jtovtidb',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

module.exports = connection;