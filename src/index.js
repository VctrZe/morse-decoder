const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // 
    // write your solution here         10 = '.'    11 = '-'
    let str = '';
    let result = '';

    for (let i = 0; i < expr.length; i++) {
        str += expr[i];

        if (str.length == 10) {
            if (str === '**********') {
                result += ' ';
            }
            else {
                let key = '';
                for (let j = 0; j < str.length - 1; j+=2) {
                    if (str[j] === '1' && str[j+1] === '0') {
                        key += '.';
                    } 
                    else if (str[j] === '1' && str[j + 1] === '1') {
                        key += '-';
                    }
                }
                result += MORSE_TABLE[key];
            }
            str = '';
        }

   }
    return result;
}

// console.log(decode('0000001111**********000000001000000011110000000010'));

module.exports = {
    decode
}
