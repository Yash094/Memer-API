"use strict";
exports.__esModule = true;
var base = "https://aztexapi.herokuapp.com";
var fetch = require("snekfetch");
var Meme = /** @class */ (function () {
    function Meme() {
    }
    /**
     * abandon
     * @param {String} text text to generate meme
     */
    Meme.prototype.abandon = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/abandon?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * failure
     * @param {String} avatar url to generate meme
     */
    Meme.prototype.failure = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/failure?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * vr
     * @param {String} avatar url to generate meme
     */
    Meme.prototype.vr = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/vr?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * search
     * @param {String} avatar url to generate meme
     */
     Meme.prototype.search = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/isearch?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * trash
     * @param {String} avatar url to generate meme
     */
    Meme.prototype.trash = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/trash?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * satan
     * @param {String} avatar url to generate meme
     */
    Meme.prototype.satan = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/satan?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * stroke
     * @param {String} text to generate meme
     */
    Meme.prototype.stroke = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/stroke?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * roblox
     * @param {String} avatar url to generate meme
     */
    Meme.prototype.roblox = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/roblox?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * hitler
     * @param {String} avatar url to generate meme
     */
    Meme.prototype.hitler = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/hitler?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * bed
     * @param {String} avatar1  url to generate meme
     */
    Meme.prototype.bed = function (avatar1, avatar2) {
        if (!avatar1)
            throw new SyntaxError("You are Missing the first AVATAR");
        if (!avatar2)
            throw new SyntaxError("You are Missing the second AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/bed?avatars=" + avatar1 + "," + avatar2)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * jail
     * @param {String} avatar  url to generate meme
     */
    Meme.prototype.jail = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/jail?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * delete
     * @param {String} avatar url to generate meme
     */
    Meme.prototype["delete"] = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/delete?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * emergencymeeting
     * @param {String} text text to generate meme
     */ 
    Meme.prototype.emergencymeeting = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/emergencymeeting?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * byemom
     * @param {String} avatar url to generate meme
     * @param {String} username Username to genereate the Meme
     * @param {String} text Text to genereate the Meme
     **/
    Meme.prototype.byemom = function (avatar, username, text) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        if (!username)
            throw new SyntaxError("You are Missing the USERNAME");
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/byemom?text=" + text + "&avatars=" + avatar + "&usernames=" + username)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * walking
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.walking = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/walking?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * keepdistance
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.keepdistance = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/keepdistance?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * fakenews
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.fakenews = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/fakenews?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * wanted
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.wanted = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/wanted?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * godwhy
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.godwhy = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/godwhy?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * violence
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.violence = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/violence?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * ipad
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.ipad = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/ipad?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * laid
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.laid = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/laid?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * ugly
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.ugly = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/ugly?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * shit
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.shit = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/shit?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * humansgood
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.humansgood = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/humansgood?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * whodidthis
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.whodidthis = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/whodidthis?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * floor
     * @param {String} avatar Url to genereate the Meme
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.floor = function (text, avatar) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/floor?text=" + text + "&avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * @param {String} avatar Url to genereate the Meme
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.obama = function (text, avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/obama?text=" + text + "&avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * note
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.note = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/note?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * airpods
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.airpods = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/airpods?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * america
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.america = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/america?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * aborted
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.aborted = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/aborted?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * affect
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.affect = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/affect?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * armor
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.armor = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/armor?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * facts
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.facts = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/facts?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * bongocat
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.bongocat = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/bongocat?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * brazzers
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.brazzers = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/brazzers?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * cancer
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.cancer = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/cancer?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * changemymind
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.changemymind = function (text) {
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/changemymind?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * communism
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.communism = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/communism?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * corporate
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.corporate = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/corporate?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * cry
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.cry = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/cry?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * dab
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.dab = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/dab?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * disability
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.disability = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/disability?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * door
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.door = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/door?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * egg
     * @param {String} avatar Url to genereate the Meme
     */
    Meme.prototype.egg = function (avatar) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/egg?avatars=" + avatar)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
     * excuseme
     * @param {String} text Text to genereate the Meme
     */
    Meme.prototype.excuseme = function (text) {
        if (!text)
            throw new SyntaxError("You are Missing the AVATAR");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/excuseme?text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
    * youtube
    * @param {String} avatar Url to genereate the Meme
    * @param {String} username Url to genereate the Meme
    * @param {String} text Text to genereate the Meme
    */
    Meme.prototype.youtube = function (avatar, username, text) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        if (!username)
            throw new SyntaxError("You are Missing the USERNAME");
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/youtube?avatars=" + avatar + "&usernames=" + username + "&text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    /**
        * tweet
        * @param {String} avatar Url to genereate the Meme
        * @param {String} username Url to genereate the Meme
        * @param {String} text Text to genereate the Meme
        */
    Meme.prototype.tweet = function (avatar, username, text) {
        if (!avatar)
            throw new SyntaxError("You are Missing the AVATAR");
        if (!username)
            throw new SyntaxError("You are Missing the USERNAME");
        if (!text)
            throw new SyntaxError("You are Missing the TEXT");
        return new Promise(function (resolve, reject) {
            fetch.get(encodeURI(base + "/tweet?avatars=" + avatar + "&usernames=" + username + "&text=" + text)).then(function (data) {
                //send data back
                resolve(data.raw);
                return;
            })["catch"](function (error) {
                //if error reject the error
                reject(error);
            });
        });
    };
    return Meme;
}());
module.exports = Meme;
