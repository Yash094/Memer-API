//importing the files
const meme = require("./lib/Meme");
const Util = require("./lib/Util");
/**
  * @ {*} param token | Memer-api Token {string}
  * returns {Memer-Api Class}
 */
function Meme(token) {
    return new meme(token);
}
//add Options to it
Meme.Memer = meme;
Meme.Util = Util;
Meme.version = require("./package.json").version;
Meme.author = "YASH & Tomato#6966",

//exporting this meme
module.exports = Meme;
module.exports.Util = Util;
