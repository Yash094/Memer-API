const base = "https://aztexapi.herokuapp.com";
const fetch = require("snekfetch");

class Meme {

    /**
     * @constructor
     * @param {string} token API token
     */


    /**
     * abandon
     * @param {String} text text to generate meme
     */

    async abandon(text) {

        let data = await fetch.get(encodeURI(`${base}/abandon?text=${text}`))
        return data.raw;
    }

    /**
     * failure
     * @param {String} avatar url to generate meme
     */

    async failure(avatar) {

        let data = await fetch.get(`${base}/failure?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * trash
     * @param {String} avatar url to generate meme
     */

    async trash(avatar) {

        let data = await fetch.get(`${base}/trash?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * satan
     * @param {String} avatar url to generate meme
     */

    async satan(avatar) {

        let data = await fetch.get(`${base}/satan?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * stroke
     * @param {String} text to generate meme
     */

    async stroke(text) {
        let data = await fetch.get(`${base}/stroke?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * roblox
     * @param {String} avatar
     */

    async roblox(avatar) {
        let data = await fetch.get(`${base}/roblox?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * hitler
     * @param {String} avatar
     */

    async hitler(avatar) {
        let data = await fetch.get(`${base}/balloon?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * bed
     * @param {String} avatar1 avatar1
     */

    async bed(avatar1, avatar2) {
        let data = await fetch.get(`${base}/bed?avatars=${avatar1},${avatar2}`, {

        });
        return data.raw;
    }

    /**
     * jail
     * @param {String} avatar
     */

    async jail(avatar) {
        let data = await fetch.get(`${base}/jail?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * delete
     * @param {String} avatar
     */

    async delete(avatar) {
        let data = await fetch.get(`${base}/delete?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * emergencymeeting
     * @param {String} text 
     */

    async emergencymeeting(text) {
        let data = await fetch.get(`${base}/emergencymeeting?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * byemom
     * @param {String} avatar
     * @param {String} username
     * @param {String} text
     **/

    async byemom(avatar, username, text) {
        let data = await fetch.get(encodeURI(`${base}/byemom?text=${text}&avatars=${avatar}&usernames=${username}`))
        return data.raw;
    }

    /**
     * walking
     * @param {String} text
     */

    async walking(text) {
        let data = await fetch.get(`${base}/walking?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * keepdistance
     * @param {String} text 
     */

    async keepdistance(text) {
        let data = await fetch.get(`${base}/keepdistance?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * fakenews
     * @param {String} avatar url
     */

    async fakenews(avatar) {
        let data = await fetch.get(`${base}/fakenews?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * wanted
     * @param {String} avatar url
     */

    async wanted(avatar) {
        let data = await fetch.get(`${base}/wanted?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * godwhy
     * @param {String} text 
     */

    async godwhy(text) {
        let data = await fetch.get(`${base}/godwhy?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * violence
     * @param {String} text
     */

    async violence(text) {
        let data = await fetch.get(`${base}/violence?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * ipad
     * @param {String} avatar
     */

    async ipad(avatar) {
        let data = await fetch.get(`${base}/ipad?avatar=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * laid
     * @param {String} avatar url
     */

    async laid(avatar) {
        let data = await fetch.get(`${base}/laid?avatar=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * ugly
     * @param {String} avatar
     */

    async ugly(avatar) {
        let data = await fetch.get(`${base}/ugly?avatar=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * shit
     * @param {String} text 
     */

    async shit(text) {
        let data = await fetch.get(`${base}/shit?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * humansgood
     * @param {String} text
     */

    async humansgood(text) {
        let data = await fetch.get(`${base}/humansgood?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * whodidthis
     * @param {String} avatar
     */

    async whodidthis(avatar) {
        let data = await fetch.get(`${base}/whodidthis?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * floor
     * @param {String} avatar
     * @param {String} text 
     */

    async floor(text, avatar) {
        let data = await fetch.get(`${base}/floor?text=${text}&avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * @param {String} avatar
     * @param {String} text 
     */

    async obama(avatar, text) {
        let data = await fetch.get(`${base}/obama?text=${text}&avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * note
     * @param {String} text
     */

    async note(text) {
        let data = await fetch.get(`${base}/note?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * abandon
     * @param {String} text
     */

    async abandon(text) {
        let data = await fetch.get(`${base}/abandon?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * airpods
     * @param {String} avatar url  
     */

    async airpods(avatar) {
        let data = await fetch.get(`${base}/airpods?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * america
     * @param {String} avatar url 
     */

    async america(avatar) {
        let data = await fetch.get(`${base}/america?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * aborted
     * @param {String} avatar url
     */

    async aborted(avatar) {
        let data = await fetch.get(`${base}/aborted?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * affect
     * @param {String} avatar url
     */

    async affect(avatar) {
        let data = await fetch.get(`${base}/affect?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * armor
     * @param {String} text
     */

    async armor(text) {
        let data = await fetch.get(`${base}/armor?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * facts
     * @param {String} text
     */

    async facts(text) {
        let data = await fetch.get(`${base}/facts?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * bongocat
     * @param {String} avatar
     */

    async bongocat(avatar) {
        let data = await fetch.get(`${base}/goggles?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * brazzers
     * @param {String} avatar
     */

    async brazzers(avatar) {
        let data = await fetch.get(`${base}/brazzers?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * cancer
     * @param {String} avatar url 
     */

    async cancer(avatar) {
        let data = await fetch.get(`${base}/cancer?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * changemymind
     * @param {String} text 
     */

    async changemymind(text) {
        let data = await fetch.get(`${base}/changemymind?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * communism
     * @param {String} avatar url
     */

    async communism(avatar) {
        let data = await fetch.get(`${base}/communism?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * corporate
     * @param {String} avatar url
     */

    async corporate(avatar1) {
        let data = await fetch.get(`${base}/corporate?avatar1=${avatar1}`, {

        });
        return data.raw;
    }

    /**
     * cry
     * @param {String} text 
     */

    async cry(text) {
        let data = await fetch.get(`${base}/cry?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * dab
     * @param {String} avatar url
     */

    async dab(avatar) {
        let data = await fetch.get(`${base}/dab?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * disability
     * @param {String} avatar url
     */

    async disability(avatar) {
        let data = await fetch.get(`${base}/disability?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * door
     * @param {String} avatar url
     */

    async door(avatar) {
        let data = await fetch.get(`${base}/door?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * egg
     * @param {String} avatar url
     */

    async egg(avatar) {
        let data = await fetch.get(`${base}/egg?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * excuseme
     * @param {String} text 
     */

    async excuseme(text) {
        let data = await fetch.get(`${base}/excuseme?text=${text}`, {

        });
        return data.raw;
    }
    /**
    * youtube
    * @param {String} avatar
    * @param {String} username
    * @param {String} text 
    */

    async youtube(avatar, username, text) {
        let data = await fetch.get(encodeURI(`${base}/youtube?avatars=${avatar}&usernames=${username}&text=${text}`))
        return data.body;
    }
    /**
        * tweet
        * @param {String} avatar
        * @param {String} username
        * @param {String} text 
        */

    async tweet(avatar, username, text) {
        let data = await fetch.get(encodeURI(`${base}/tweet?avatars=${avatar}&usernames=${username}&text=${text}`));
        return data.body;
    }
}
module.exports = Meme;
