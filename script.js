$(document).ready(function(){

  $("#money").hover(function() {
		$(this).attr("src","money-hover.png");
  }, function() {
		$(this).attr("src","money.png");
  });

  var questions = [
    "“It's freezing and snowing in New York. We need global warming!”",
    "“They didn't sneak into this country to be your friends.”",
    "“I don't have friends at NASA. Bunch of nerds.”",
    "“Black guys counting my money! I hate it. The only kind of people I want counting my money are little short guys that wear yarmulkes every day.”",
    "“I have a great relationship with the blacks.”",
    "“My IQ is one of the highest—and you all know it! Please don’t feel so stupid or insecure, it’s not your fault.”",
    "“Dolphins, eskimos, who cares?”",
    "“If you're worried about criticism, sometimes a diet is the best defense.”",
    "“I like when a woman has ambition. It's like seeing a dog wearing clothes.”",
    "“The woman is on vacation with her husband as we speak. Probably having beach sex. Which is the third best sex after elevator and White House.”",
    "“Money can't buy happiness. It is happiness.”",
    "“They're everywhere. They want to save the earth, but all they do is smoke pot and smell bad.”",
    "“They had to put their cardboard box up for a second mortgage.”",
    "“My fingers are long and beautiful, as it has been very well documented, are various other parts of my body.”",
    "“They're building a wall to separate the US from the immigrants, which was my idea!”",
    "“The concept of global warming was created by and for the Chinese”",
    "“If that's a veiled criticism about me, I don't hear it and I won't respond to it.”",
    "“Ladies and gentlemen, I am officially running for president of the United States.”",
    "That's the end. This quiz is missing scoring functionality, but I can assure you, you're a farmer."];
  var currentQuestion = 0;
  var nextQuestion = function ( event ) {
    $(".questionStyle").text(questions[currentQuestion]);
    currentQuestion += 1;
  var incorrect = 0;
  var correct = 0;

    if (currentQuestion == 1) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
        correct ++;
        console.log(correct, "correct")
      }))
    }

    if (currentQuestion == 2) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect += 1;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
        correct += 1;
        console.log(correct, "correct")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect += 1;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect += 1;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 3) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
        correct ++;
        console.log(correct, "correct")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 4) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 5) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 6) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 7) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 8) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 9) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 10) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 11) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 12) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 13) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 14) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 15) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 16) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 17) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
      }))
    }

    if (currentQuestion == 18) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 18) {
      $("#money").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        $("#lucille").attr("src", "farmer.png")
        $("#cartman").attr("src", "farmer.png")
        $("#donald").attr("src", "farmer.png")
      }))
    }

  }

$("#money").on("click", nextQuestion);

$("#money").on("click", (function(){
  $("#jack").attr("src", "jack.png");
  $("#lucille").attr("src", "lucille.png");
  $("#cartman").attr("src", "cartman.png");
  $("#donald").attr("src", "donald.png");
}));

var topics = [
  "ON GLOBAL WARMING:",
  "ON IMMIGRATION:",
  "ON GLOBAL WARMING:",
  "ON FINANCE:",
  "ON RACE RELTIONS:",
  "ON IMAGE:",
  "ON GLOBAL WARMING:",
  "ON IMAGE:",
  "ON GENDER EQUALITY:",
  "ON THE WHITE HOUSE:",
  "ON FINANCE:",
  "ON LIBERALS:",
  "ON FINANCE:",
  "ON IMAGE:",
  "ON IMMIGRATION:",
  "ON GLOBAL WARMING:",
  "ON IMAGE:",
  "ON THE WHITE HOUSE:",
  "OOF. LOOKS LIKE YOU'RE A FARMER."]
var currentTopic = 0;
var nextTopic = function ( event ) {
  $(".topicStyle").text(topics[currentTopic]);
  currentTopic += 1;

}

$("#money").on("click", nextTopic)

});



// DT It's freezing and snowing in New York. We need global warming!
//
// JD I don't have friends at NASA. Bunch of nerds.
//
// LB They didn't sneak into this country to be your friends.
//
// DT Black guys counting my money! I hate it. The only kind of people I want counting my money are little short guys that wear yarmulkes every day.
//
// DT I have a great relationship with the blacks.
//
// LB If you're worried about criticism, sometimes a diet is the best defense.
//
// JD I like when a woman has ambition. It's like seeing a dog wearing clothes.
//
// JD The woman is on vacation with her husband as we speak. Probably having beach sex. Which is the third best sex after elevator and White House.
//
// JD Money can't buy happiness. It is happiness.
//
// // LB They're building a wall to separate the US from the immigrants, which was my idea!
//
// CM "Dolphins, eskimos, who cares?"
//
// CM They had to put their cardboard box up for a second mortgage.
//
// CM They're everywhere. They want to save the earth, but all they do is smoke pot and smell bad.
//
// DT My fingers are long and beautiful, as it has been very well documented, are various other parts of my body.
//
// DT The concept of global warming was created by and for the Chinese
//
// DT my IQ is one of the highest—and you all know it! Please don’t feel so stupid or insecure, it’s not your fault.
//
// LB If that's a veiled criticism about me, I don't hear it and I won't respond to it.
