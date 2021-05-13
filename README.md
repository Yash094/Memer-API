<div align="center">
  <p>
    <img alt="npm" src="https://img.shields.io/npm/dt/memer-api">
  <a href="https://maintained.cc"><img src="https://maintained.cc/SDBagel/Maintained/1?" alt="Status Badge"></a>
  <a href="https://maintained.cc"><img src="https://maintained.cc/SDBagel/Maintained/2?" alt="Get Started Now"></a>
  <a href=""><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" alt="Open Source"></a>
  
  </p>
</div>


[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


# Memer Api - Welcome

Memer API is a powerful module that allows you to manipulate images very easily.

https://nodei.co/npm/memer-apipng?downloads=true&stars=true


## **Installation** 
```
npm install memer-api
```
```js
const Meme = require("memer-api");
const memer = new Meme();
memer.<Method>(<Options>); //returns -> Promise -> <Buffer>
```

**Join our [Discord Server](https://discord.gg/emD44ZJaSA) for Support**


**For more help view [Documentation ](https://memer-api.js.org)**


## **Features**

* **Super simple**
* **Easy to use** 
* **More than 40 methods.**
* **Beginner-friendly** 
* **Great Support**
* **Flexible**


## Examples

```js
const Meme = require("memer-api"), Discord = require("discord.js"), memer = new Meme();

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

Made by: [@Yash094](https://github.com/Yash094),
Maintained by: [@Tomato6966](https://github.com/Tomato6966) & [@Yash094](https://github.com/Yash094)

## PREVIEWS

![IMAGE](https://cdn.discordapp.com/attachments/813806041543344218/830053370122862652/example-meme-api.png)

![IMAGE](https://cdn.discordapp.com/attachments/813806041543344218/830053341252943872/facts-1.png)

![IMAGE](https://cdn.discordapp.com/attachments/813806041543344218/830053386946609162/facts-2.png)


