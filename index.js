//importing the files
const meme = require("./lib/Meme");
const Utils = require("./lib/Utils");
/**
  * @ {*} param token | Memer-api Token {string}
  * returns {Memer-Api Class}
 */
function Meme(token) {
    return new meme(token);
}
//add Options to it
Meme.Memer = meme;
Meme.Utils = Utils;
Meme.version = require("./package.json").version;
Meme.author = "YASH & Tomato#6966",

//exporting this meme
module.exports = Meme;
module.exports.Utils = Utils;
