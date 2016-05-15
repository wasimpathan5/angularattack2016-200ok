"use strict";
// Utilities
class Utils {
    // Normalize number 34% of 100% = 30%
    static normalize(value, base, max) {
        return Math.round(100 * value / (base * max)) * base;
    }
    // Display emotion
    static showEmotion(selector, value) {
        let container;
        if (typeof selector == 'object') {
            container = selector;
        }
        else {
            container = document.querySelector(selector);
        }
        if (container) {
            var emotionEl = document.createElement('span');
            emotionEl.setAttribute('class', 'emotion');
            emotionEl.innerHTML = value;
            container.appendChild(emotionEl);
            // animate;
            setTimeout(function () {
                emotionEl.setAttribute('class', 'emotion animate');
            }, 100);
            // remove
            setTimeout(function () {
                emotionEl.parentElement.removeChild(emotionEl);
            }, 2000);
        }
    }
    // Pick random item from the array
    static pickItem(arr) {
        if (!arr.length) {
            return;
        }
        if (arr.length == 1) {
            return arr[0];
        }
        return arr[Math.round(Math.random() * (arr.length - 1))];
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map