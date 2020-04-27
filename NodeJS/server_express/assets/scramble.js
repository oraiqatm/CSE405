

function scram(){
    var statement = document.getElementById("frame");
    var sep_state = statement.elements[0].value;
    var split_sep = sep_state.split(" ");
    var test = split_sep[0];
    var result = "";
    for(var i=0; i<split_sep.length; i++ ){
        if(split_sep[i].length > 3){
           var middle = split_sep[i].substr(1,split_sep[i].length -2);
           var char_arr = middle.split("");
           for (var j = 0; j < char_arr.length; j++){
                //Inducing the randomness
                var r = Math.floor(Math.random() * (char_arr.length));
                
                var t = char_arr[j]; 
                char_arr[j] = char_arr[r]; 
                char_arr[r]= t; //swap
            }
            var assem_middle = char_arr.join("");
            var assem_word = (split_sep[i].substr(0,1) + assem_middle + split_sep[i].substr(split_sep[i].length -1) + " " );
            result += assem_word;
            //console.log(assem_word);


        }else{
            result += split_sep[i] + " ";
        }
    }

    document.getElementById("scrambled").innerHTML = result;
}
