const express = require("express");
const message = require("../models/index").message;
const bcrypt = require('bcrypt');
const passport = require('passport');

const router = express.Router();

// const isAuthenticated = function(req, res, next) {
//   // console.log(req.isAuthenicated());
//   if (req.isAuthenticated()) {
//     return next()
//   }
//   req.flash('error', 'You have to be logged in to access the page.')
//   res.redirect('/')
// }
//
// // user needs to still be logged in for them to have access to it
// const requireLogin = function(req, res, next) {
//   if(req.user){
//     console.log('REQ USER',req.user);
//     next();
//   } else {
//     res.redirect('/');
//   }
// };
//
// // requires user to login in to access infor
// const login = function(req, res, next) {
//   if (req.user) {
//     res.redirect('/homepage')
//   } else {
//     next();
//   }
// };
//
//
// router.get('/create',isAuthenticated, function(req, res) {
//   res.render('create');
// });
//
// router.post('/create', requireLogin, isAuthenticated, function(req, res) {
//   models.messages.create({
//     newGab: req.body.newGab
//   })
//   res.redirect('homepage', {messages: req.messages.text});
// });
//
//

router.get

module.exports = router;
