
//      WHO TO START

var con = require('./connection');
const express = require('express');
const path = require('path');
const app = express();
const port = 1112;

var bodyParser = require("body-parser")
//    Middlewere Function for body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
//    Middlewere Function for public folder
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));




 //      pro
app.get('/', (req, res) => {
  res.render('pro');
});

 //      
 app.get('/admin_login', (req, res) => {
  res.render('admin_login');
});

 //      
 app.get('/about_us', (req, res) => {
  res.render('about_us');
});

 //      
 app.get('/Become_Worker', (req, res) => {
  res.render('Become_Worker');
});

//
app.get('/Book_Now', (req, res) => {
  res.render('Book_Now');
});


//
app.get('/contact_us', (req, res) => {
  res.render('contact_us');
});

//


app.get('/services', (req, res) => {
  res.render('services');
});


//
app.get('/sign_up', (req, res) => {
  res.render('sign_up');
});


// 

app.get('/admin', (req, res) => {
  res.render('admin');
});





   // Display user
app.get('/disuser', function (req, res) {
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('disuser', { result: result });
  });
}); 







// Display worker

app.get('/disworker', function (req, res) {
  con.query("SELECT * FROM worker", function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('disworker', { result: result });
  });
}); 







// Display order
app.get('/disorder', function (req, res) {
  con.query("SELECT * FROM pro.order;", function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('disorder', { result: result });
  });
}); 







//       sign up page

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'sign up.html'))

});

app.post('/signup', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.pass;
  const sql = 'INSERT INTO user (name,email,password) VALUES (?, ?, ?)';

  con.query(sql, [name,email, password], (error, results) => {
    if (error) {
      console.error('Error inserting data into the database:', error);
      res.status(500).send('Error inserting data into the database');
    } else {
      console.log('Data inserted into the database');
      res.send('Data inserted successfully');
    }
  });
});









    //Become worker
app.get('/becomeworker', (req, res) => {
  res.sendFile(path.join(__dirname, 'Become Worker.html'))

});

app.post('/becomeworker', (req, res) => {
  const name = req.body.name;
  const CNIC = req.body.cnic;
  const email = req.body.email;
  const price = req.body.price;
  const service = req.body.servicetype;
  
 

  const sql = 'INSERT INTO worker (name,cnic,email,priceperhour,servicetype) VALUES (?, ?, ?, ?, ?)';

  con.query(sql, [name,CNIC,email,price,service], (error, results) => {
    if (error) {
      console.error('Error inserting data into the database:', error);
      res.status(500).send('Error inserting data into the database');
    } else {
      console.log('Data inserted into the database');
      res.send('Data inserted successfully');
    }
  });
});








       //Book Now
app.get('/booknow', (req, res) => {
  res.sendFile(path.join(__dirname, 'Book Now.html'))

});

app.post('/booknow', (req, res) => {
 
  const pass = req.body.id;
  const wid = req.body.wid;
  const hours = req.body.hours;
  const addres = req.body.addres;
  const city = req.body.city;
 

  const sql = 'INSERT INTO `order` (id, wid, hours, address, city, odate) VALUES (?,?,?,?,?, NOW());';

  con.query(sql, [pass,wid,hours,addres,city], (error, results) => {
    if (error) {
      console.error('Error inserting data into the database:', error);
      res.status(500).send('Error inserting data into the database');
    } else {
      console.log('Data inserted into the database');
      res.send('Data inserted successfully');
    }
  });
});






      //Display
      //delete user
      //update user name

app.get('/duser', (req, res) => {
  con.query('SELECT * FROM user', (err, rows) => {
    if (err) throw err;
    res.render('duser', { rows, selectedRow: null });
  });
});

app.post('/duser/update/:id', (req, res) => {
  const id = req.params.id;
  const newName = req.body.updateName;
///
  con.query('UPDATE user SET name = ? WHERE id = ?', [newName, id], (err) => {
    if (err) throw err;
    res.redirect('/duser');
  });
});

app.get('/duser/update/:id', (req, res) => {
  const id = req.params.id;
  con.query('SELECT * FROM user WHERE id = ?', [id], (err, rows) => {
    if (err) throw err;
    res.render('duser', { rows, selectedRow: rows[0] });
  });
});

app.post('/duser/delete/:id', (req, res) => {
  const id = req.params.id;

  con.query('DELETE FROM user WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.redirect('/duser');
  });
});





        //  Delete worker
app.get('/dworker', (req, res) => {
  con.query('SELECT * FROM worker', (err, rows) => {
    if (err) throw err;
    res.render('dworker', { rows, selectedRow: null });
  });
});
app.post('/dworker/delete/:wid', (req, res) => {
  const wid = req.params.wid; // Update from id to wid
  con.query('DELETE FROM worker WHERE wid = ?', [wid], (err) => {
    if (err) throw err;
    res.redirect('/dworker');
  });
});





          // Delete order
app.get('/dorder', (req, res) => {
  con.query('SELECT * FROM pro.order;', (err, rows) => {
    if (err) throw err;
    res.render('dorder', { rows, selectedRow: null });
  });
});
app.post('/dorder/delete/:oid', (req, res) => {
  const oid = req.params.oid; // Update from id to wid
  con.query('DELETE FROM `order` WHERE oid = ? ', [oid], (err) => {
    if (err) throw err;
    res.redirect('/dorder');
  });
});
// join
app.get('/join', function (req, res) {
  con.query("SELECT u.name , w.name , w.servicetype , o.hours, o.address,o.city, o.odate FROM user u INNER JOIN `order` o ON u.id = o.id INNER JOIN worker w ON w.wid = o.wid;  ", function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('join', { result: result });
  });
}); 

 // front page user display
 app.get('/fuser', function (req, res) {
  con.query("SELECT id , name , email FROM pro.user;", function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('fuser',{ result: result });
  });
}); 


// subquery
app.get('/subquery', function (req, res) {
  con.query("SELECT id, name, email FROM user WHERE id IN (SELECT id FROM `order`);", function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('subquery',{ result: result });
  });
}); 

// having
app.get('/having', function (req, res) {
  con.query("SELECT city, COUNT(*) as order_count FROM `order` GROUP BY city HAVING order_count >= 1;", function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('having',{ result: result });
  });
});

/// Agregatr Function
app.get('/agregate', function (req, res) {
  con.query("SELECT servicetype,count(*) as a FROM worker group by servicetype;", function (err, result, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('agregate',{ result: result });
  });
});

console.log('PORT = ', port)
app.listen(port, () => {
  console.log(`Server started at port:${port} http://localhost:${port}`);
});