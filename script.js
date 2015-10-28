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
    "“They're building a wall to separate the US from the immigrants, which was my idea!”",
    "“Dolphins, eskimos, who cares?”",
    "“If you're worried about criticism, sometimes a diet is the best defense.”",
    "“I like when a woman has ambition. It's like seeing a dog wearing clothes.”",
    "“My fingers are long and beautiful, as it has been very well documented, are various other parts of my body.”",
    "“Money can't buy happiness. It is happiness.”",
    "“They're everywhere. They want to save the earth, but all they do is smoke pot and smell bad.”",
    "“They had to put their cardboard box up for a second mortgage.”",
    "“The woman is on vacation with her husband as we speak. Probably having beach sex. Which is the third best sex after elevator and White House.”",
    "“My IQ is one of the highest—and you all know it! Please don’t feel so stupid or insecure, it’s not your fault.”",
    "“The concept of global warming was created by and for the Chinese”",
    "“If that's a veiled criticism about me, I don't hear it and I won't respond to it.”",
    "“Ladies and gentlemen, I am officially running for president of the United States.”",
    "So embarassing. You're definitely a farmer, aren't you? Lucky for you, even farmers get a vote. Cast yours for Cartman/Donaghy 2016."];
  var currentQuestion = 0;
  var incorrect = 0;
  var correct = 0;
  var nextQuestion = function ( event ) {
    $(".questionStyle").text(questions[currentQuestion]);
    currentQuestion += 1;
//    $(".choices").off("click")
    $("#jack").off("click")
    $("#lucille").off("click")
    $("#cartman").off("click")
    $("#donald").off("click")


// $("#jack").click(function() {
//   $(this).effect( "bounce", "slow" );
// });

  // if (currentQuestion == 1) {
  //   setInterval(function(){
  //     $("#money").toggle(function(){
  //       $("#money").attr("src", "money.png")},function(){
  //       $("money").attr("src", "money-hover.png")
  //     }, 100)
  //   })
  // };

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
      }))
    }

    if (currentQuestion == 2) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
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

    if (currentQuestion == 3) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
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
      }))
    }

    if (currentQuestion == 5) {
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
      }))
    }

    if (currentQuestion == 6) {
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
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 7) {
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
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 8) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
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

    if (currentQuestion == 9) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
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

    if (currentQuestion == 10) {
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
      }))
    }

    if (currentQuestion == 11) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
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

    if (currentQuestion == 12) {
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
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 13) {
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
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 14) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
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

    if (currentQuestion == 15) {
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
      }))
    }

    if (currentQuestion == 16) {
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
      }))
    }

    if (currentQuestion == 17) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
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

    if (currentQuestion == 18) {
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
      }))
    }

    if (currentQuestion == 18) {
      $("#money").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        $("#lucille").attr("src", "farmer.png")
        $("#cartman").attr("src", "farmer.png")
        $("#donald").attr("src", "farmer.png")
        $("body").css("background-image", "url(http://orig07.deviantart.net/24b8/f/2014/107/c/2/abandoned_feat_farm_by_matty4z-d7etllb.png)");
        $("#money").attr("src", "cow.png")
        $("#money").hover(function() {
          $(this).attr("src","cow.png");
        });
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
  "ON CLIMATE CHANGE:",
  "ON IMMIGRATION:",
  "ON CLIMATE CHANGE:",
  "ON FINANCE:",
  "ON RACE RELTIONS:",
  "ON IMMIGRATION:",
  "ON CLIMATE CHANGE:",
  "ON IMAGE:",
  "ON GENDER EQUALITY:",
  "ON IMAGE:",
  "ON FINANCE:",
  "ON LIBERALS:",
  "ON FINANCE:",
  "ON THE WHITE HOUSE:",
  "ON IMMIGRATION:",
  "ON CLIMATE CHANGE:",
  "ON IMAGE:",
  "ON THE WHITE HOUSE:",]
var currentTopic = 0;
var nextTopic = function ( event ) {
  if (currentTopic == 18) {
    topics.push("OOF. YOU HAD " + incorrect + " INCORRECT GUESSES.")
  };
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
