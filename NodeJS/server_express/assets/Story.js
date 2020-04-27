
var storyData = [
    {
        Title: "The Ram Man!",
        Name: "Ram",
        Flying: "Tuna",
        Time: "future",
        Age: "10",
        Country: "America",
        Favorite: "CandyShop",
        Food: "Soup",
        Path: "Busy Highway",
        Direction: "up",
        Trait: "Chest Hair",
        Color: "Blue"

    },
    {
        
        Title: "Tommy Boy Can!",
        Name: "Tom",
        Flying: "Pizza",
        Time: "Taco Bell Hood",
        Age: "55",
        Country: "Asia",
        Favorite: "Barber",
        Food: "Steak",
        Path: "Toaster", 
        Direction: "Left and right",
        Trait: "Eyes",
        Color: "Purple"
    },
    {
        Title: "The Sam Man",
        Name: "Sam",
        Flying: "Tomato",
        Time: "ChildHood",
        Age: "24",
        Country: "Germany",
        Favorite: "Saloon",
        Food: "Lobster",
        Path: "Ocean",
        Direction: "Down",
        Trait: "Hair",
        Color: "Yellow"
    }

]

function makeStory(){
    var str = " a";
    var rand = gen_Nums(12);
    var j_storyTitle ="";
    var j_storyBody = ""
    
    storyTitle = storyData[rand[0]]["Title"];
    j_storyBody= "<b>"+ storyData[rand[1]]["Name"] + "</b>"+ " saw a flying <b>" + storyData[rand[1]]["Flying"] + "</b> and thought of <b>" +
        storyData[rand[2]]["Country"] + "</b>. He was taken back to his <b> " + storyData[rand[3]]["Time"] + 
        "</b>, remembering certain aromas of all the rich <b>" + storyData[rand[5]]["Food"] + "</b>. <b>"+ storyData[rand[1]]["Name"] +
        "</b> proceeds with his day by looking <b>" + storyData[rand[6]]["Direction"] + "</b> and crossed the <b>" + 
        storyData[rand[7]]["Path"] + "</b> to get to his favorite <b> " + storyData[rand[8]]["Favorite"] + "</b>.  <b>" +
        storyData[rand[1]]["Name"] + "</b> Enters the area and begins talking to a man in his <b>" + storyData[rand[9]]["Age"] + "</b>s. <b>"+ 
        storyData[rand[1]]["Name"] + "</b> was concerned about the color of his <b>" + storyData[rand[10]]["Trait"] + "</b> because he" +
        " wanted to look younger but wasn't sure which color to choose. The young man told <b>" + storyData[rand[1]]["Name"] +
        " </b>he should dye his <b>" + storyData[rand[10]]["Trait"] + "</b><b> " + storyData[rand[11]]["Color"] + "</b>.<br><br>"; 
    

    document.getElementById("storyTitle").innerHTML =storyTitle;
    document.getElementById("storyBody").innerHTML =  j_storyBody;
    document.getElementById("success").innerHTML = "Story Generation was a Success!";
    
}

function gen_Nums(num){
    var random = []; 
    for(var i=0; i < num; i++){
        random.push(Math.floor(Math.random() * 2));
    }
    return random;
   

}