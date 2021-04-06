const meme = require("./lib/Meme");

function Meme(token) {
    return new meme(token);
}

Meme.Memer = meme;
Meme.version = require("./package.json").version;

module.exports = Meme;
