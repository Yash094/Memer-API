# Documentation

Memer-API is a powerful module that allows you to manipulate images very easily.


## Install the Api-Module:
```npm install memer=api```

## Use the Api-Module
```
const Meme = require("memer-api");
const memer = new Meme();


//Little Example: 
const avatar = "https://imgur.com/I5DmdNR.png"; //only static images 
memer.dab(avatar).then(image => {
    //now you have a "BUFFER", for Discord create an attachment
      //const attachment = new Discord.MessageAttachment(image, "dab.png");
      //<Channel>.send(attachment) 
})
```

