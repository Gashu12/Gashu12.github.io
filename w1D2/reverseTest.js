/* global assert isVowel*/
/* reverse() that takes a string of words and returns the reversed version of that string of words. */

describe("reverese", function(){
    it(" 'hello World!' is '!dlroW olleh' ", function(){
        assert.equal('!dlroW olleh', reverse('hello World!'))
    });

    it(" 'hey you' is 'uoy yeh' ", function(){
        assert.equal('uoy yeh', reverse('hey you'))
    });

    it(" 'good' is 'doog' ", function(){
        assert.equal('doog', reverse('good'))
    });
});

describe("filterLongWords", function(){
    it(" ['hello', 'good bye', 'how are you', 'how is CS303'], 8 is ['how are you', 'how is CS303'] ", function(){
        assert.equal(['how are you', 'how is CS303'], filterLongWords(['hello', 'good bye', 'how are you', 'how is CS303'], 8))
    });

    it(" ['hello', 'good bye', 'how are you', 'how is CS303'], 6 is ['good bye', 'how are you', 'how is CS303'] ", function(){
        assert.equal(['good bye', 'how are you', 'how is CS303'], filterLongWords(['hello', 'good bye', 'how are you', 'how is CS303'], 6))
    });

    it(" ['hello', 'good bye', 'how is CS303'], 9 is ['how is CS303'] ", function(){
        assert.equal(['how is CS303'], filterLongWords(['hello', 'good bye', 'how is CS303'], 9))
    });
});