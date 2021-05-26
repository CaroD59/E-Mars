const connection = require('./db-config');
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5050;

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log('connected to database with threadId: ' + connection.threadId);
  }
});

app.use(cors());
app.get('/messages', (req, res) => {
  connection.query('SELECT * FROM message', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.status(200).json(result);
    }
  });
});

app.post('/messages', (req, res) => {
  const { name, emessage } = req.body;
  connection.query(
    'INSERT INTO message(name, emessage) VALUES (?, ?)',
    [name, emessage],
    (err, result) => {
      if (err) {
        res.status(500).send('Error saving the message');
      } else {
        res.status(201).send('message successfully saved');
      }
    }
  );
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
