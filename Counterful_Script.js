/*
The script takes a plain text, and it analyzes numbers of characters, words and sentences and returns an HTML string as a result.
A live example can be seen on "counterful.com". It is a simple script that can be used to learn REGEX basics.
*/

function seperatorWords(text){
        return text.split(/[\s,]+/);
    }
    
    function seperatorLines(text){
        return text.split('\n');
    }
    
    function seperatorChars(text){
        return text.split('');
    }
    
    function seperatorSentence(text){
        return text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    }
    
    function sortString(input){
        var words = seperatorWords(input);
        var lines = seperatorLines(input);
        var chars = seperatorChars(input);
        var sentences = seperatorSentence(input);
        
        var result = "<b>Text Analysis Result: </b><br>"+
            "Number of words: <b>"+words.length+"</b>. <br>"+
            "Number of characters: <b>"+chars.length+"</b>. <br>"+
            "Number of characters without space character: <b>"+(chars.length-words.length+1)+"</b>. <br>"+
            "Number of lines: <b>"+lines.length+"</b>. <br>"+
            "Number of sentences: <b>"+sentences.length+"</b>.";
            
        return result;
    }
