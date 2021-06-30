//importing the files
const meme = require("./lib/Meme");
/**
  * @param {string} token | Memer-api Token {string}
  * returns {Memer-Api Class}
 */
function Meme(token) {
    return new meme(token);
}
//add Options to it
Meme.Memer = meme;
Meme.version = require("./package.json").version;
Meme.author = "YASH & Tomato#6966",
//exporting this meme
module.exports = Meme;
