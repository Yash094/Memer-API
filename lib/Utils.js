class Util {

    /**
     * Memer Api Util, by Tomato#6966
     * Use if you want, but give credits!
     * npm i memer-api/utils
     * @hideconstructor
     */
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
    }
  
    
    /**
     * Validates a String/Array to be a URL or not
     * @param {string} hex Hex code to validate
     * @returns {boolean/url}
     */
    static isValidURL(input) {
      let url;
      if(Array.isArray(string)) {
          for(const arg of string){
            try {
              url = new URL(arg);
              url = url.protocol === "http:" || url.protocol === "https:";
              break;
            } catch (_) {
              url = false;
            }
          }
          return url;
      } else {
        try {
          url = new URL(input);
          url = url.protocol === "http:" || url.protocol === "https:";
          break;
        } catch (_) {
          url = false;
        }
        return url;
      }
    };
    
    /**
     * Validates hex
     * @param {string} hex Hex code to validate
     * @returns {boolean}
     */
    static validateHex(hex) {
        if (!hex || typeof hex !== "string") return false;
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    }

    /**
     * Converts regular timestamp to discord like time
     * @param {Date|number} time Timestamp to convert
     * @returns {string}
     */
    static discordTime(time = new Date()) {
        let date = time && time  instanceof Date ? time : new Date();
        let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        return `Today at ${hours}:${minutes}`;
    }

    /**
     * Formats time
     * @param {number} time Time to format in milliseconds
     * @returns {array} of Days - Seconds, but only those who are not 0
     */
    static formatTime(duration, useMilli = false) {
      let remain = duration
      //calc the days
      let days = Math.floor(remain / (1000 * 60 * 60 * 24))
      remain = remain % (1000 * 60 * 60 * 24)
      //calc the hours
      let hours = Math.floor(remain / (1000 * 60 * 60))
      remain = remain % (1000 * 60 * 60)
      //calc the minutes
      let minutes = Math.floor(remain / (1000 * 60))
      remain = remain % (1000 * 60)
      //calc the seconds
      let seconds = Math.floor(remain / (1000))
      remain = remain % (1000)
      //define the milliseconds
      let milliseconds = remain;
      //create an object
      let o = {
        days,
        hours,
        minutes,
        seconds,
        milliseconds
      };
      //create the returning array
      let parts = []
      //add days if needed
      if (o.days) {
        let ret = o.days + ' Day'
        if (o.days !== 1) {
          ret += 's'
        }
        parts.push(ret)
      }
      //add hours if needed
      if (o.hours) {
        let ret = o.hours + ' Hr'
        if (o.hours !== 1) {
          ret += 's'
        }
        parts.push(ret)
      }
      //add minutes if needed
      if (o.minutes) {
        let ret = o.minutes + ' Min'
        if (o.minutes !== 1) {
          ret += 's'
        }
        parts.push(ret)
      }
      //add seconds if needed
      if (o.seconds) {
        let ret = o.seconds + ' Sec'
        if (o.seconds !== 1) {
          ret += 's'
        }
        parts.push(ret)
      }
      //if option is enabled, use it
      if (useMilli && o.milliseconds) {
        let ret = o.milliseconds + ' ms'
        parts.push(ret)
      }
      //if no length, it means instant or undefined
      if (parts.length === 0) {
        //return instantly
        return 'instantly'
      } else {
        //return the duration
        return parts
      }
    }

    /**
     * Shorten text.
     * @param {string} text Text to shorten 
     * @param {number} len Max Length
     * @returns {string}
     */
    static shorten(text, len) {
        if (typeof text !== "string") return "";
        if (text.length <= len) return text;
        return text.substr(0, len).trim() + "...";
    }

    /**
     * Converts numbers into units like `1K`, `1M`, `1B` etc.
     * @param {number} num
     * @param {number} optional, defines how many digits it should have: 1.23k
     * @returns {string}
     */
      static nFormatter(num, digits = 2) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      }


    /**
     * Returns formatted hex code
     * @param {string} hex Hex code to format
     * @param {string} alt Alt color
     * @returns {string}
     */
    static formatHex(hex, alt = "#000000") {
        if (!hex || typeof hex !== "string") return alt || "#000000";
        hex = hex.replace("#", "");
        if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        if (hex.length !== 6) return alt || "#000000";
        //return the hex code
        return `#${hex}`;
    }

    /**
     * Inverts hex color
     * @param {string} hex Hex color code to invert
     * @returns {string}
     */
    static invertColor(hex) {
        if (!hex || typeof hex !== "string") return "#FFFFFF";
        hex = hex.replace("#", "");

        // match hex color
        if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        if (hex.length !== 6) return "#FFFFFF";

        // invert colors
        const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
        const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
        const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

        // return new hex
        const pad = (txt, length) => {
            length = length || 2;
            let arr = [length].join("0");
            return (arr + txt).slice(-length);
        };

        const finalHex = `#${pad(r)}${pad(g)}${pad(b)}`;
        return finalHex;
    }
}

module.exports = Util;
