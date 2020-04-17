
var storyData = [
    {
        Title: "The man who",
        Name: "Ram",
        Age: "10",
        Country: "America",
        Favorite: "Candy",
        Food: "Soup",
        Path: "Busy Highway"


    },
    {
        
        username: "matt", 
        password: "academy"
    },
    {
        username:"chris",
        password: "forever"
    }

]



function makeStory(){
    var str = " a";
    var random = Math.floor(Math.random * 3);
    var result = "Dan saw flying pizza and thought of Italy. He was taken back to his childhood." + 
        "He remebered certain aromas of all the rich cuisines" + "Dan proceeds with his day by looking left and right " + 
        "and crosses the busy highway to go in to his favorite barbershop. " + " Dan enters the buidling and begins to talk"
        + " to a man in his 20s. Dan was concerned about the color of his hair, he wanted to look younger but was not sure"
        + "on how to go about it. The young man told Dan the he should dye his hair";
    //document.getElementById("storyTitle").innerHTML =
  document.getElementById("storyBody").innerHTML =  result;
    console.log(result);
}