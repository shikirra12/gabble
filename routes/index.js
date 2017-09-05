const express = require("express");
const models = require("../models/index");
const bcrypt = require('bcrypt');
const passport = require('passport');

const router = express.Router();

const isAuthenticated = function(req, res, next) {
  // console.log(req.isAuthenicated());
  if (req.isAuthenticated()) {
    // req.session = User
    return next()
  }
  req.flash('error', 'You have to be logged in to access the page.')
  res.redirect('/')
}

// user needs to still be logged in for them to have access to it
const requireLogin = function(req, res, next) {
  if(req.user){
    console.log('REQ USER',req.user);
    next();
  } else {
    res.redirect('/');
  }
};

// requires user to login in to access infor
const login = function(req, res, next) {
  if (req.user) {
    res.redirect('/homepage')
  } else {
    next();
  }
};

router.get('/', login, function(req, res) {
  res.render('login');
});

router.post('/', login, passport.authenticate('local', {
  successRedirect: '/homepage',
  failureRedirect: '/',
  failureFlash: true
}));

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.post('/signup', function(req, res) {
  let name = req.body.name
  let username = req.body.username
  let password = req.body.password
  let passwordconfirm = req.body.passwordconfirm
  let match = false;

  if (!username || !password) {
    req.flash('error', 'Please, fill in all the fields.')
    res.redirect('signup')
  } else if (password != passwordconfirm) {
      match = true;
      req.flash('error', 'Please, make sure your passsword matches.')
      res.redirect('signup')
  }

  let salt = bcrypt.genSaltSync(10)
  let hashedPassword = bcrypt.hashSync(password, salt)

  let newuser = {
    name: name,
    username: username,
    salt: salt,
    password: hashedPassword
  }

  models.user.create(newuser)
  .then(function() {
    res.redirect('/')
  })
  .catch(function(error) {
    req.flash('error', 'Please, choose a different username.')
    res.redirect('signup')
  });
});

router.get('/homepage', isAuthenticated, function (req, res) {
  models.message.findAll({
    order: [['updatedAt', 'DESC']],
    include: [
      {model: models.user, as: 'users'},
      {model: models.like, as: 'likes'}
    ]
  })
  .then(function(data) {
    // console.log("This is data:", data);
    res.render('homepage', {username: req.user.username, data: data});
  })
  // res.render('homepage', {username: req.user.username});
});

router.get('/create',isAuthenticated, function(req, res) {
  res.render('homepage');
});

router.post('/create', function(req, res) {

  models.message.create({
    userId: req.user.id,
    text: req.body.newGab,
    // likes: req.like.clicks
  }).then(function(data) {
    // console.log("This is your text: ", data.);
    res.redirect('/homepage');
  })
});

router.get('/delete/:id', function(req, res) {
  // models.message.destroy({
  //   where: {
  //     userId: req.params.id
  //   }
  // })
  models.message.findById(req.params.id)
  .then(function(data) {
    if (req.user.id == data.userId) {
      data.destroy() .then(function() {
        res.redirect('/homepage');
      })
    }
  })
  // console.log("This is deleted:", req.params.id);
  // res.redirect('/homepage');
});

// router.get('/like/:like.id', function(req, res) {
//   models.like.findById(req.like.id)
//   .then(function() {
//     if (req.like.id == req.message.id) {
//       req.like.clicks += 1
//       req.save().then(function() {
//         res.redirect('homepage')
//       })
//     }
//   })
// });

router.get('/like/:likesId', function(req, res) {
console.log(req.user.id, "UserId");
console.log(req.params.messageId, "MessageId");
  models.like.create({
    userId: req.user.id,
    messageId: req.params.messagesId
  })
  .then(function() {
    req.like.clicks +=1
    req.save().then(function() {
      res.redirect('homepage');
    })
    // res.redirect('homepage');
  })
});

router.get('/likeit/:messageId')

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
