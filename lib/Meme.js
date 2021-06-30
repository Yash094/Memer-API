//Import the Utils
const base = "https://memerapi.cf";
const fetch = require('snekfetch')
//create the Class
class Meme {
    constructor(token) {
        //if no token granted return error
        if (!token) throw new TypeError("Token was not provided!");
        //if not a string, return error
        if (typeof token !== "string") {
            throw new SyntaxError(`Passed in ${typeof token} but a String would be required for the TOKEN`);
        }
        //set the token to the token
        this.token = token;
        //set the global memer variable for the version
        this.version = require("../package.json").version;
        //set the author variable for the creators
        this.author = "YASH & Tomato#6966";
        //set the base information
        this.baseurl = base;
        //if no method added, use this, throw error
        if(!this.constructor && !this.constructor.name){
            throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
        }
    }

    /**
     * abandon
     * @param {String} text text to generate meme
     */

    abandon(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/abandon?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }
    /**
    * vr
    * @param {String} text text to generate meme
    */
    vr(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/vr?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                console.log(data.body)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }
    /**
    * search
    * @param {String} text text to generate meme
    */
    search(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/isearch?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }
    /**
     * failure
     * @param {String} avatar url to generate meme
     */

    failure(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/failure?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * trash
     * @param {String} avatar url to generate meme
     */

    trash(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/trash?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * satan
     * @param {String} avatar url to generate meme
     */

    satan(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/satan?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * stroke
     * @param {String} text to generate meme
     */

    stroke(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/stroke?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * roblox
     * @param {String} avatar
     */

    roblox(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
         //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/roblox?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * hitler
     * @param {String} avatar
     */

    hitler(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/hitler?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * bed
     * @param {String} avatar1 avatar1
     */

    bed(avatar1, avatar2) {
        if (!avatar1) throw new SyntaxError("A String is required for the SECOND AVATAR");
        if (!avatar2) throw new SyntaxError("A String is required for the SECOND AVATAR");
        

        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/bed?avatars=${avatar1},${avatar2}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * jail
     * @param {String} avatar
     */

    jail(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/jail?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * delete
     * @param {String} avatar
     */

    delete(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/delete?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * emergencymeeting
     * @param {String} text 
     */

    emergencymeeting(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/emergencymeeting?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * byemom
     * @param {String} avatar
     * @param {String} username
     * @param {String} text
     **/

    byemom(avatar, username, text) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //if no username added, return error
        if (!username) {
            throw new SyntaxError("You are Missing the USERNAME");
        }
        //if no username in a string format added, return error
        if(typeof username !== "string") {
            throw new SyntaxError(`Passed in ${typeof username} but a String would be required for the USERNAME`);
        }
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/byemom?text=${text}&avatars=${avatar}&usernames=${username}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * walking
     * @param {String} text
     */

    walking(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/walking?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * keepdistance
     * @param {String} text 
     */

    keepdistance(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/keepdistance?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * fakenews
     * @param {String} avatar url
     */

    fakenews(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/fakenews?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * wanted
     * @param {String} avatar url
     */

    wanted(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/wanted?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * godwhy
     * @param {String} text 
     */

    godwhy(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/godwhy?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * violence
     * @param {String} text
     */

    violence(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/violence?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * ipad
     * @param {String} avatar
     */

    ipad(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/ipad?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * laid
     * @param {String} avatar url
     */

    laid(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/laid?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * ugly
     * @param {String} avatar
     */

    ugly(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/ugly?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * shit
     * @param {String} text 
     */

    shit(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/shit?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * humansgood
     * @param {String} text
     */

    humansgood(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/humansgood?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * whodidthis
     * @param {String} avatar
     */

    whodidthis(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
     return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/whodidthis?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * floor
     * @param {String} avatar
     * @param {String} text 
     */

    floor(text, avatar) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/floor?text=${text}&avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * @param {String} avatar
     * @param {String} text 
     */

    obama(text, avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/obama?text=${text}&avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * note
     * @param {String} text
     */

    note(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/note?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * airpods
     * @param {String} avatar url  
     */

    airpods(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/airpods?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * america
     * @param {String} avatar url 
     */

    america(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/america?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * aborted
     * @param {String} avatar url
     */

    aborted(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/aborted?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * affect
     * @param {String} avatar url
     */

    affect(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/affect?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * armor
     * @param {String} text
     */

    armor(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/armor?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * facts
     * @param {String} text
     */

    facts(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/facts?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * bongocat
     * @param {String} avatar
     */

    bongocat(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/bongocat?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * brazzers
     * @param {String} avatar
     */

    brazzers(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/brazzers?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * cancer
     * @param {String} avatar url 
     */

    cancer(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/cancer?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * changemymind
     * @param {String} text 
     */

    changemymind(text) {

        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/changemymind?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * communism
     * @param {String} avatar url
     */

    communism(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/communism?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * corporate
     * @param {String} avatar url
     */

    corporate(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/corporate?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * cry
     * @param {String} text 
     */

    cry(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/cry?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * dab
     * @param {String} avatar url
     */

    dab(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/dab?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * disability
     * @param {String} avatar url
     */

    disability(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/disability?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * door
     * @param {String} avatar url
     */

    door(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/door?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * egg
     * @param {String} avatar url
     */

    egg(avatar) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/egg?avatars=${avatar}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
     * excuseme
     * @param {String} text 
     */

    excuseme(text) {
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/excuseme?text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }
    /**
    * youtube
    * @param {String} avatar
    * @param {String} username
    * @param {String} text 
    */

    youtube(avatar, username, text) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //if no username added, return error
        if (!username) {
            throw new SyntaxError("You are Missing the USERNAME");
        }
        //if no username in a string format added, return error
        if(typeof username !== "string") {
            throw new SyntaxError(`Passed in ${typeof username} but a String would be required for the USERNAME`);
        }
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/youtube?avatars=${avatar}&usernames=${username}&text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }
    /**
    * welcome
    * @param {String} avatar
    * @param {String} username
    * @param {String} background
    */

    welcome(username, avatar, background) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //if no username added, return error
        if (!username) {
            throw new SyntaxError("You are Missing the USERNAME");
        }
        //if no username in a string format added, return error
        if(typeof username !== "string") {
            throw new SyntaxError(`Passed in ${typeof username} but a String would be required for the USERNAME`);
        }
        if (!background) throw new SyntaxError("You are Missing the BACKGROUND")
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/welcomeimage?av=${avatar}&usernames=${username}&background=${background}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }
    /**
       * leave
       * @param {String} avatar
       * @param {String} username
       * @param {String} background
       */

    leave(username, avatar, background) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //if no username added, return error
        if (!username) {
            throw new SyntaxError("You are Missing the USERNAME");
        }
        //if no username in a string format added, return error
        if(typeof username !== "string") {
            throw new SyntaxError(`Passed in ${typeof username} but a String would be required for the USERNAME`);
        }
        if (!background) throw new SyntaxError("You are Missing the BACKGROUND")
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/leaveimage?av=${avatar}&usernames=${username}&background=${background}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }

    /**
        * tweet
        * @param {String} avatar
        * @param {String} username
        * @param {String} text 
        */

    tweet(avatar, username, text) {
        //if no avatar added, return error
        if (!avatar) {
            throw new SyntaxError("A String/File is required for the AVATAR");
        }
        //if no username added, return error
        if (!username) {
            throw new SyntaxError("You are Missing the USERNAME");
        }
        //if no username in a string format added, return error
        if(typeof username !== "string") {
            throw new SyntaxError(`Passed in ${typeof username} but a String would be required for the USERNAME`);
        }
        //if no text added, return error
        if (!text) {
            throw new SyntaxError("A String is required for the TEXT");
        }
        //if no text in a string format added, return error
    	if(typeof text !== "string") {
            throw new SyntaxError(`Passed in ${typeof text} but a String would be required for the TEXT`);
        }
        //create the Promise
        return new Promise((resolve, reject) => {
            fetch.get(encodeURI(`${base}/tweet?avatars=${avatar}&usernames=${username}&text=${text}&token=${this.token}`)).then((data) => {
                //send data back
                resolve(data.raw)
                return;
            }).catch(error => {
                //if error reject the error
                reject(error)
            })
        })
    }
}
module.exports = Meme;
