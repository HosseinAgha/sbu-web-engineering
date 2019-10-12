const cowsay = require('cowsay');

module.exports = () => {
    console.log(cowsay.say({
        text: "I'm a moooodule"
    }));
}
