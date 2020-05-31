const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.use(express.urlencoded({extented: true}));




app.post('/index', function(req, res) {

  if (req.body.nameUs.length > 0 &&  req.body.placeUs.length > 0) {

    const text = {place: req.body.placeUs, name: req.body.nameUs};

    var data = fs.readFileSync("app/data/data.json", "utf8");
    var users = JSON.parse(data);

    users.push(text);
    var data = JSON.stringify(users);

    fs.writeFileSync("app/data/data.json", data);

    res.redirect('/');

  } else {
    res.redirect('/');
  }

});




app.post('/delete', function(req, res) {


  if (req.body.nameUsDel.length > 0) {

    const remove = req.body.nameUsDel;

    var data = fs.readFileSync("app/data/data.json", "utf8");
    var users = JSON.parse(data);

    const findElement = users.findIndex(function(unit) {
      return unit.name === remove
    });

    users.splice(findElement, 1);

    var data = JSON.stringify(users);

    fs.writeFileSync("app/data/data.json", data);


    res.redirect('/');

  } else {
    res.redirect('/');
  }

});



// app.get('/', function(req, res) {
//   res.send("<h2>Hello from Toljan</h2>")
// });




app.use(express.static(__dirname + '/app'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000...');
});
