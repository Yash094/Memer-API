<div align="center">
  <p>
    <img alt="npm" src="https://img.shields.io/npm/dt/memer-api">
  </p>
</div>

# Memer Api - Welcome

Memer API is a powerful module that allows you to manipulate images very easily.

*Current API latency from input to return finished Image: 300-500ms*

## **Installation** 
```
npm install memer-api
```
```js
const Meme = require("meme-api");
const memer = new Meme();
memer.<Method>(<Options>); //returns -> Promise -> <Buffer>
```

**Join our [Discord Server](https://discord.gg/pe3V7uT) for Support**

**Check out the [Example Discord Bot](https://github.com/shinchanOP/example-bot-memer-api) Repository, if you are stuck;)**

## **Features**

* **Super simple**
* **Easy to use** 
* **More than 40 methods.**
* **Beginner-friendly** 
* **Great Support**
* **Flexible**


## Examples

```js
const Meme = require("meme-api"), Discord = require("discord.js"), memer = new Meme();

const avatar = "https://imgur.com/I5DmdNR.png"; //only static images supported / works! no gifs / videos

memer.jail(avatar).then(jail=> {
    //now you have a "BUFFER", for Discord create an attachment
      //var attachment = new Discord.MessageAttachment(image, "bed.png");
      //<Channel>.send(attachment)
})
```

## Credits
[IMGEN](https://github.com/DankMemer/imgen)

[WRAPPER BASED FROM SNOWFLAKES API WRAPPER](https://github.com/DevSnowflake/dankmemer.js#readme)

Made by: [@shinchanOP](https://github.com/shinchanOP), 
Maintained by: [@Tomato6966](https://github.com/Tomato6966) & [@shinchanOP](https://github.com/shinchanOP)

## PREVIEWS

![IMAGE](https://cdn.discordapp.com/attachments/813806041543344218/830053370122862652/example-meme-api.png)

![IMAGE](https://cdn.discordapp.com/attachments/813806041543344218/830053341252943872/facts-1.png)

![IMAGE](https://cdn.discordapp.com/attachments/813806041543344218/830053386946609162/facts-2.png)


