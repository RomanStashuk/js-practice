const makeCensored = (str, censoredWords, replacement = '$#%!') => {
    let words = str.split(' ');
    let result = words.map(function(item) {
        return censoredWords.includes(item) ? replacement : item;
    })
    return result.join(' ');
}

// Tests
const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
// '$#%! chicken? chicken! $#%!';
console.log(result);
console.log(result2);
