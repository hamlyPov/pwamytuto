var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('demo'));
//app.use(express.static('/demo/js/build'));
//app.use('/js',express.static('demo'));
//app.use(express.static(path.join(__dirname, 'demo')));
app.use('/js/build', express.static(__dirname + '/demo'));

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Demo is running on localhost:'+PORT)
})
// app.listen(process.env.PORT||3000, function() {
//     console.log('Demo is running on localhost:3000');
// });