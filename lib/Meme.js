const base = "https://aztexapi.herokuapp.com";
const fetch = require("snekfetch");

class Meme {

    /**
     * @constructor
     * @param {string} token API token
     */

    c
    /**
     * abandon
     * @param {String} text text to generate meme
     */

    async abandon(text) {
        let data = await fetch.get(`${base}/abandon?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * aborted
     * @param {String} avatar avatar
     */

    async failure(avatar) {
        let data = await fetch.get(`${base}/failure?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * affect
     * @param {String} avatar avatar
     */

    async trash(avatar) {
        let data = await fetch.get(`${base}/trash?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * airpods
     * @param {String} avatar avatar
     */

    async satan(avatar) {
        let data = await fetch.get(`${base}/satan?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * america
     * @param {String} avatar avatar
     */

    async stroke(text) {
        let data = await fetch.get(`${base}/stroke?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * armor
     * @param {String} text text
     */

    async roblox(avatar) {
        let data = await fetch.get(`${base}/roblox?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * balloon
     * @param {String} text text
     */

    async hitler(avatar) {
        let data = await fetch.get(`${base}/balloon?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * bed
     * @param {String} avatar1 avatar1
     * @param {String} avatar2 avatar2
     */

    async bed(avatar1, avatar2) {
        let data = await fetch.get(`${base}/bed?avatars=${avatar1},${avatar2}`, {

        });
        return data.raw;
    }

    /**
     * bongocat
     * @param {String} avatar1 avatar1
     */

    async jail(avatar) {
        let data = await fetch.get(`${base}/jail?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * boo
     * @param {String} text text
     */

    async delete(avatar) {
        let data = await fetch.get(`${base}/delete?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * brain
     * @param {String} text text
     */

    async emergencymeeting(text) {
        let data = await fetch.get(`${base}/emergencymeeting?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * brazzers
     * @param {String} avatar1 avatar1
     */


    /**
     * byemom
     * @param {String} avatar1 avatar1
     * @param {String} username1 username1
     * @param {String} text text
     */

    async byemom(avatar, username, text) {
        let data = await fetch.get(`${base}/byemom?text=${text}&avatars=${avatar}&usernames=${username}`, {

        });
        return data.raw;
    }

    /**
     * cancer
     * @param {String} avatar1 avatar1
     */

    async walking(text) {
        let data = await fetch.get(`${base}/walking?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * changemymind
     * @param {String} text text
     */

    async keepdistance(text) {
        let data = await fetch.get(`${base}/keepdistance?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * cheating
     * @param {String} text text
     */

    async fakenews(avatar) {
        let data = await fetch.get(`${base}/fakenews?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * citation
     * @param {String} text text
     */

    /**
     * communism
     * @param {String} avatar1 avatar1
     */

    async wanted(avatar) {
        let data = await fetch.get(`${base}/wanted?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * confusedcat
     * @param {String} text text
     */

    async godwhy(text) {
        let data = await fetch.get(`${base}/godwhy?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * corporate
     * @param {String} avatar1 avatar1
     */

    async violence(text) {
        let data = await fetch.get(`${base}/corporate?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * crab
     * This endpoint returns an MP4 file. Make sure your application knows how to handle this format. Malformed requests count against your ratelimit for this endpoint. Separate text with a comma.
     * @param {String} text text
     */


    /**
     * cry
     * @param {String} text text 
     */

    //// Dank Memer \\\\
    /**
     * dab
     * @param {String} avatar1 avatar 
     */

    async ipad(avatar) {
        let data = await fetch.get(`${base}/ipad?avatar=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * dank
     * @param {String} avatar1 avatar 
     */


    /**
     * deepfry
     * @param {String} avatar1 avatar 
     */


    /**
     * delete
     * @param {String} avatar1 avatar 
     */

    async laid(avatar) {
        let data = await fetch.get(`${base}/laid?avatar=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * disability
     * @param {String} avatar1 avatar 
     */

    async ugly(avatar) {
        let data = await fetch.get(`${base}/ugly?avatar=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * doglemon
     * @param {String} text text 
     */

    async shit(text) {
        let data = await fetch.get(`${base}/shit?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * door
     * @param {String} avatar1 avatar1 
     */

    async humansgood(text) {
        let data = await fetch.get(`${base}/humansgood?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * egg
     * @param {String} avatar1 avatar1 
     */

    async whodidthis(avatar) {
        let data = await fetch.get(`${base}/whodidthis?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * excuseme
     * @param {String} text text 
     */

    async floor(text,avatar) {
        let data = await fetch.get(`${base}/floor?text=${text}&avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * expanddong
     * @param {String} text text 
     */

    async obama(avatar,text) {
        let data = await fetch.get(`${base}/obama?text=${text}&avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * facts
     * @param {String} text text 
     */

    async note(text) {
        let data = await fetch.get(`${base}/note?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * failure
     * @param {String} avatar1 avatar1 
     */

    async abandon(text) {
        let data = await fetch.get(`${base}/abandon?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * fakenews
     * @param {String} avatar1 avatar1 
     */

    async airpods(avatar) {
        let data = await fetch.get(`${base}/airpods?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * fedora
     * @param {String} avatar1 avatar1 
     */

    async america(avatar) {
        let data = await fetch.get(`${base}/america?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * floor
     * @param {String} avatar1 avatar1 
     * @param {String} text text
     */

    async aborted(avatar) {
        let data = await fetch.get(`${base}/aborted?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * fuck
     * @param {String} text text
     */

    async affect(avatar) {
        let data = await fetch.get(`${base}/affect?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * garfield
     * @param {String} avatar1 avatar
     * @param {String} text text
     */

    async armor(text) {
        let data = await fetch.get(`${base}/armor?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * gay
     * @param {String} avatar1 avatar
     */

    async facts(text) {
        let data = await fetch.get(`${base}/facts?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * goggles
     * @param {String} avatar1 avatar
     */

    async bongocat(avatar) {
        let data = await fetch.get(`${base}/goggles?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * hitler
     * @param {String} avatar1 avatar
     */

    async brazzers(avatar) {
        let data = await fetch.get(`${base}/brazzers?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * humansgood
     * @param {String} text text
     */

    async cancer(avatar) {
        let data = await fetch.get(`${base}/cancer?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * inator
     * @param {String} text text
     */

    async changemymind(text) {
        let data = await fetch.get(`${base}/changemymind?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * invert
     * @param {String} avatar1 avatar1
     */

    async communism(avatar) {
        let data = await fetch.get(`${base}/communism?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * jail
     * @param {String} avatar1 avatar1
     */

    async corporate(avatar1) {
        let data = await fetch.get(`${base}/corporate?avatar1=${avatar1}`, {

        });
        return data.raw;
    }

    /**
     * justpretending
     * @param {String} text text
     */

    async cry(text) {
        let data = await fetch.get(`${base}/cry?text=${text}`, {

        });
        return data.raw;
    }

    /**
     * kimborder
     * @param {String} avatar1 avatar1
     */

    async dab(avatar) {
        let data = await fetch.get(`${base}/dab?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * knowyourlocation
     * @param {String} text text
     */

    async disability(avatar) {
        let data = await fetch.get(`${base}/disability?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * kowalski
     * @param {String} text text
     */

    async door(avatar) {
        let data = await fetch.get(`${base}/door?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * laid
     * @param {String} avatar1 avatar1
     */

    async egg(avatar) {
        let data = await fetch.get(`${base}/egg?avatars=${avatar}`, {

        });
        return data.raw;
    }

    /**
     * lick
     * @param {String} text text
     */

    async excuseme(text) {
        let data = await fetch.get(`${base}/excuseme?text=${text}`, {

        });
        return data.raw;
    }
}
module.exports = Meme;