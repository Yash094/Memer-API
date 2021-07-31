const base = "http://memerapi.cf";

const fetch = require('snekfetch')

class Meme {
  constructor(token) {
    if (!token) throw new TypeError("Token was not provided!");
    this.token = token;
  }
  /**
   * savehumanity
   * @param {String} text text to generate meme
   */

  savehumanity(text) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")

    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/savehumanity?text=${text}&token=${this.token}`)).then((data) => {
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
      * stonks
      * @param {String} text text to generate meme
      */

  stonks(text) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")

    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/stonks?text=${text}&token=${this.token}`)).then((data) => {
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
  * notstonks
  * @param {String} text text to generate meme
  */

  notstonks(text) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")

    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/notstonks?text=${text}&token=${this.token}`)).then((data) => {
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
* piccolo
* @param {String} text text to generate meme
*/

  piccolo(text) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")

    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/piccolo?text=${text}&token=${this.token}`)).then((data) => {
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
 * tornado
 * @param {String} text text to generate meme
 */

  tornado(text, text2) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")
    if (!text2) throw new SyntaxError("You are Missing the TEXT")
    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/tornado?text=${text}&text2=${text2}&token=${this.token}`)).then((data) => {
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
* ohno
* @param {String} text text to generate meme
*/

  ohno(text) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")

    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/ohno?text=${text}&token=${this.token}`)).then((data) => {
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
* drake
* @param {String} text text to generate meme
*/

  drake(text) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")

    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/drake?text=${text}&token=${this.token}`)).then((data) => {
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
   * abandon
   * @param {String} text text to generate meme
   */

  abandon(text) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
   * pepesign
   * @param {String} text text to generate meme
   */

  pepesign(text) {
    if (!text) throw new SyntaxError("You are Missing the TEXT")

    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/pepesign?text=${text}&token=${this.token}`)).then((data) => {
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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar1) throw new SyntaxError("You are Missing the first AVATAR")
    if (!avatar2) throw new SyntaxError("You are Missing the second AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")
    if (!username) throw new SyntaxError("You are Missing the USERNAME")
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
   * draw25
   * @param {String} avatar
   * @param {String} text
   **/

  draw25(avatar, text) {
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")
    if (!text) throw new SyntaxError("You are Missing the TEXT")

    return new Promise((resolve, reject) => {
      fetch.get(encodeURI(`${base}/draw25?text=${text}&avatars=${avatar}&token=${this.token}`)).then((data) => {
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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!text) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!text) throw new SyntaxError("You are Missing the AVATAR")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")
    if (!username) throw new SyntaxError("You are Missing the USERNAME")
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")
    if (!username) throw new SyntaxError("You are Missing the USERNAME")
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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")
    if (!username) throw new SyntaxError("You are Missing the USERNAME")
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
    if (!avatar) throw new SyntaxError("You are Missing the AVATAR")
    if (!username) throw new SyntaxError("You are Missing the USERNAME")
    if (!text) throw new SyntaxError("You are Missing the TEXT")

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
