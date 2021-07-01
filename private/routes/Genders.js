const express = require('express');
const router = express.Router();
const pool = require('../connection/connection');

/* GET method */
router.get('/genders', (req, res) => {
  try{
    pool.query('SELECT * FROM genders', function (error, results, fields) {
            if (error) {
                res.send(error);
            }
            res.send(results);
    });
  } catch (error) {
    if (error) console.error(`Error: ${error.message}`);
  }
});

/* Specific GET method */
router.get('/genders/:id', (req, res) => {
  try {
    pool.query(
      `SELECT * FROM genders WHERE id=${req.params.id}`,
      (error, results) => {
        res.send(results);
      }
    );
  } catch (error) {
    console.error(`Error ${error}`);
  }
});

/* POST method */
router.post('/genders', (req, res) => {
  try {
    pool.query(
      `INSERT INTO genders (creationDate, fullName) 
      VALUES ('${req.body.creationDate}',
    '${req.body.fullName}'),
    '${req.body.gender}')`,
      () => {
        res.send('Posted successfully.');
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* PUT method */
router.put('/genders/:id', (req, res) => {
  try {
    pool.query(
      `
    UPDATE users SET
    street='${req.body.creationDate}',
    street_no='${req.body.fullName}'
    street_no='${req.body.gender}'
    `,
      () => {
        res.send('Updated entry.');
        //pool.end();
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* DELETE method */
router.delete('/genders/:id', (req, res) => {
  try {
    pool.query(`DELETE FROM genders WHERE id=${req.params.id}`, () => {
      res.send('Deleted entry.');
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;