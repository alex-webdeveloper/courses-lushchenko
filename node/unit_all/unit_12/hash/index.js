const config = require('./config');

module.exports = {
   f : function (a) {
       let strRand = "";
       while (strRand.length < a) {
           strRand += config[Math.floor(Math.random() * config.length)];
       }
       return strRand;
   }
}