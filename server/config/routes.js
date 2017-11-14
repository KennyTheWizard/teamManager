const mongoose = require('mongoose');
const players = require('../controllers/players.js')
module.exports = function(app) {

  app.get('/', (req, res) => {
    res.render('index');
  });
  app.get('/players', (req, res)=>{
    players.show(req, res);
  });
  
  app.post('/players', (req, res)=>{
    players.create(req, res);
  });
  
  app.delete('/players/destroy/:id',(req,res)=>{
    players.destroy(req, res);
  });
  
  app.put('/players/edit/:id',(req,res)=>{
    players.update(req, res);
  });

  app.get('*', (req, res) =>{
    res.redirect('/');
  })
}