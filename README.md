THIS VERSION NEEDS A API TOKEN YOU CAN GET IT FROM [MEMER API](https://discord.com/invite/emD44ZJaSA). 
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


<a href="https://www.npmjs.com/package/memer-api"><img src="https://nodei.co/npm/memer-api.png?downloads=true&amp;stars=true" alt="NPM info"></a>

Memer API is a powerful module that allows you to manipulate images very easily.




## **Installation** 
```
npm install memer-api
```
```js
const Meme = require("memer-api");
const memer = new Meme('YOUR API TOKEN');
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
const Meme = require("memer-api"), Discord = require("discord.js"), memer = new Meme('YOUR API TOKEN');

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

![IMAGE](https://cdn.discordapp.com/attachments/806750853947719760/843579019823546368/memer-api_preview.png)


