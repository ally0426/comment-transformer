document.querySelector("textarea").addEventListener("click", function () {
	this.placeholder = "Make it a good one!";
})
var adesign = " ";
var newComment = [];

function convert() {
	
    var acomment = document.getElementById('comment').value;
    var iterate = acomment.length;
    acomment = acomment.split('');
    newComment = [];
    adesign = " ";

    // LETTER TRANSLATER LOOP
	for (var i=0;i<iterate;i++) {
        switch (acomment[i]) {
            case 'A': 
                newComment.push([
                    "&nbsp__&nbsp;",
                    "|&nbsp;&nbsp;|",
                    "|__|",
                    "|&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;|"
                ]);
                break;
            case 'B':
                newComment.push([
                    "&nbsp__&nbsp;",
                    "|&nbsp;&nbsp;\\",
                    "|__/",
                    "|&nbsp;&nbsp;\\",
                    "|__/"
                ]);
                break;
        
            case 'C': 
                newComment.push([
                    "&nbsp;__&nbsp;",
                    "|&nbsp;&nbsp;\\",
                    "|&nbsp;&nbsp;&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;",
                    "|__/"
                ]);
                break;
        
            case 'D': 
                newComment.push([
                    "&nbsp__&nbsp;",
                    "|&nbsp;&nbsp;\\",
                    "|&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;|",
                    "|__/"
                ]);
                break;
        
            case 'E': 
                newComment.push([
                    "&nbsp___",
                    "|&nbsp;&nbsp;&nbsp;",
                    "|__&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;",
                    "|___"
                ]);
                break;
        
            case 'F': 
                newComment.push([
                    "&nbsp___",
                    "|&nbsp;&nbsp;&nbsp;",
                    "|__&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;"
                ]);
                break;
        
            case 'G': 
                newComment.push([
                    "&nbsp;__&nbsp;",
                    "|&nbsp;&nbsp;\\",
                    "|&nbsp;__",
                    "|&nbsp;&nbsp;|",
                    "|__/"
                ]);
                break;
        
            case 'H': 
                newComment.push([
                    "&nbsp&nbsp;&nbsp;&nbsp;&nbsp",
                    "|&nbsp;&nbsp;&nbsp;|",
                    "|___|",
                    "|&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;|"
                ]);
                break;
        
            case 'I': 
                newComment.push([
                    "_____",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;",
                    "__|__"
                ]);
                break;
        
            case 'J': 
                newComment.push([
                    "_____",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;",
                    "__/&nbsp;&nbsp;"
                ]);
                break;
        
            case 'K': 
                newComment.push([
                    "|&nbsp;&nbsp;/",
                    "|&nbsp;/&nbsp;",
                    "|\\&nbsp;&nbsp;",
                    "|&nbsp;\\&nbsp;",
                    "|&nbsp;&nbsp;\\"
                ]);
                break;
                
            case 'L': 
                newComment.push([
                    "|&nbsp;&nbsp;&nbsp;&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;",
                    "|____"
                ]);
                break;
                
            case 'M': 
                newComment.push([
                    "|\\&nbsp;&nbsp;&nbsp;/|",
                    "|&nbsp;\\_/&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|"
                ]);
                break;
        
            case 'N': 
                newComment.push([
                    "|\\&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;\\&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;\\&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;\\&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;\\|"
                ]);
                break;
        
            case 'O': 
                newComment.push([
                    "&nbsp;_____&nbsp;",
                    "/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "\\_____/"
                ]);
                break;
        
            case 'P': 
                newComment.push([
                    "_____&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;\\",
                    "|____/",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                ]);
                break;
        
            case 'Q': 
                newComment.push([
                    "&nbsp;_____&nbsp;",
                    "/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;\\|",
                    "\\_____\\"
                ]);
                break;
        
            case 'R': 
                newComment.push([
                    "____&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;\\",
                    "|___/",
                    "|&nbsp;&nbsp;\\&nbsp;",
                    "|&nbsp;&nbsp;&nbsp;\\"
                ]);
                break;
        
            case 'S':
                newComment.push([
                    "&nbsp;____&nbsp;",
                    "/&nbsp;&nbsp;&nbsp;&nbsp;\\",
                    "|____&nbsp;",
                    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\",
                    "\\____/"
                ]);
                break;
        
            case 'T': 
                newComment.push([
                    "_______",
                    "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;"
                ]);
                break;
        
            case 'U': 
                newComment.push([
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|", 
                    "|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|",
                    "\\_____/"
                ]);
                break;
        
            case 'V': 
                newComment.push([
                    "\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/",
                    "&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;",
                    "&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;&nbsp;\\/&nbsp;&nbsp;&nbsp;&nbsp;"   
                ]);
                break;
        
            case 'W': 
                newComment.push([
                    "_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_",
                    "&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;",
                    "&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;/\\&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;/&nbsp;&nbsp;\\&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;&nbsp;\\/&nbsp;&nbsp;&nbsp;&nbsp;\\/&nbsp;&nbsp;&nbsp;&nbsp;"   
                ]);
                break;
        
            case 'X': 
                newComment.push([
                    "\\&nbsp;&nbsp;&nbsp;/",
                    "&nbsp;\\&nbsp;/&nbsp;",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;" ,
                    "&nbsp;/&nbsp;\\&nbsp;",
                    "/&nbsp;&nbsp;&nbsp;\\" 
                ]);
                break;
        
            case 'Y': 
                newComment.push([
                    "\\&nbsp;&nbsp;&nbsp;/",
                    "&nbsp;\\&nbsp;/&nbsp;",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;",
                    "&nbsp;&nbsp;|&nbsp;&nbsp;" 
                ]);
                break;
        
            case 'Z': 
                newComment.push([
                    "_____&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;",
                    "&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;",
                    "&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;",
                    "&nbsp;/_____"
                ]);
                break;
            case '1': 
                newComment.push([
                    "/|&nbsp",
                    "&nbsp|&nbsp",
                    "&nbsp|&nbsp",
                    "&nbsp|&nbsp",
                    "_|_"
                ]);
                break;
            case '2': 
                newComment.push([
                    "&nbsp_&nbsp",
                    "/&nbsp\\",
                    "&nbsp&nbsp|",
                    "&nbsp/&nbsp",
                    "/__"
                ]);
                break;
            case '3': 
                newComment.push([
                    "&nbsp_&nbsp",
                    "/&nbsp\\",
                    "&nbsp_/",
                    "&nbsp&nbsp\\",
                    "\\_/"
                ]);
                break;
            case '4': 
                newComment.push([
                    "&nbsp&nbsp/",
                    "&nbsp/|",
                    "/_|",
                    "&nbsp&nbsp|",
                    "&nbsp&nbsp|"
                ]);
                break;
            case '5': 
                newComment.push([
                    "___",
                    "|&nbsp&nbsp",
                    "|_&nbsp",
                    "&nbsp&nbsp\\",
                    "\\_/"
                ]);
                break;
            case '6': 
                newComment.push([
                    "&nbsp&nbsp&nbsp/",
                    "&nbsp&nbsp/&nbsp",
                    "&nbsp/_&nbsp",
                    "/&nbsp&nbsp\\",
                    "\\__/"
                ]);
                break;
            case '7': 
                newComment.push([
                    "____",
                    "&nbsp&nbsp&nbsp/",
                    "&nbsp_/_",
                    "&nbsp/&nbsp&nbsp",
                    "/&nbsp&nbsp&nbsp"
                ]);
                break;
            case '8': 
                newComment.push([
                    "&nbsp_&nbsp",
                    "/&nbsp\\",
                    "\\_/",
                    "/&nbsp\\",
                    "\\_/"
                ]);
                break;
            case '9': 
                newComment.push([
                    "&nbsp&nbsp_&nbsp",
                    "&nbsp/&nbsp\\",
                    "&nbsp\\_/",
                    "&nbsp&nbsp/&nbsp",
                    "&nbsp/&nbsp&nbsp"
                ]);
                break;
            case '0': 
                newComment.push([
                    "&nbsp__&nbsp",
                    "/&nbsp&nbsp\\",
                    "|&nbsp/|",
                    "|/&nbsp|",
                    "\\__/"
                ]);
                break;
            case ' ': 
                newComment.push([
                    "&nbsp;&nbsp;",
                    "&nbsp;&nbsp;",
                    "&nbsp;&nbsp;",
                    "&nbsp;&nbsp;",
                    "&nbsp;&nbsp;"
                ]);
                break;
            case '!': 
                newComment.push([
                    "&nbsp;|&nbsp;",
                    "&nbsp;|&nbsp;",
                    "&nbsp;|&nbsp;",
                    "&nbsp;|&nbsp;",
                    "&nbsp;o&nbsp;"
                ]);
                break;
            case '?': 
                newComment.push([
                    "&nbsp_&nbsp;",
                    "/&nbsp\\",
                    "&nbsp&nbsp/",
                    "&nbsp;|&nbsp;",
                    "&nbsp;o&nbsp;"
                ]);
                break;
            case ',': 
                newComment.push([
                    "&nbsp;&nbsp;",
                    "&nbsp;&nbsp;",
                    "&nbsp;&nbsp;",
                    "&nbsp;&nbsp;",
                    ")&nbsp;"
                ]);
                break;
            case "'": 
                newComment.push([
                    ")",
                    "&nbsp;",
                    "&nbsp;",
                    "&nbsp;",
                    "&nbsp;"
                ]);
                break;
            default:
                newComment.push([
                    "X",
                    "X",
                    "X",
                    "X",
                    "X"
                ]);
                break;
        }
    }
    // COMMENT OUTPUT LOOP
    for (i=0;i<5;i++) {
    	for (var j=0;j<iterate;j++) {
    		adesign += newComment[j][i] + "&nbsp;";
    		console.log("3) " + adesign)
    	}
    	adesign += "<br />";
    	console.log("4) " + adesign);
    }
    // PRINT TO PAGE
    document.getElementById('design').innerHTML = adesign;

}