const LanguageDetect = require("languagedetect");
const lngDetector = new LanguageDetect();

//OR

console.log(lngDetector.detect("es macht gut", 1));
console.log(lngDetector.detect("dobra prace", 1));
console.log(lngDetector.detect("gwaith da", 1));