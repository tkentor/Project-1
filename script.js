$(document).ready(function(){
  var questions = ["question 1", "question 2", "question 3"];
  var currentQuestion = 0;
  var nextQuestion = function ( event ) {
    $("h2").text(questions[currentQuestion]);
    currentQuestion += 1;
  }

$("input").on("click", nextQuestion);

});

// //question1
//   $("#donald1").click(function(){
//     $(this).attr('src',"money.png");
//     $("#jack1").attr('src',"");
//     $("#lucille1").attr('src',"");
//   });
//
//   $("#jack1").click(function(){
//     $(this).attr('src',"farmer.png");
//     $("#lucille1").attr('src',"");
//     $("#donald1").attr('src',"");
//   });
//
//   $("#lucille1").click(function(){
//     $(this).attr('src',"farmer.png");
//     $("#donald1").attr('src',"");
//     $("#jack1").attr('src',"");
//   });
//
//   //question1
//     $("#donald2").click(function(){
//       $(this).attr('src',"farmer.png");
//       $("#jack2").attr('src',"");
//       $("#lucille2").attr('src',"");
//     });
//
//     $("#jack2").click(function(){
//       $(this).attr('src',"money.png");
//       $("#lucille2").attr('src',"");
//       $("#donald2").attr('src',"");
//     });
//
//     $("#lucille2").click(function(){
//       $(this).attr('src',"farmer.png");
//       $("#donald2").attr('src',"");
//       $("#jack2").attr('src',"");
//     });
//
// });


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
// // CM Everyone knows only poor people get lice.
//
// DT My fingers are long and beautiful, as it has been very well documented, are various other parts of my body.
//
// DT The concept of global warming was created by and for the Chinese
//
// DT my IQ is one of the highest—and you all know it! Please don’t feel so stupid or insecure, it’s not your fault.
//
// If that's a veiled criticism about me, I don't hear it and I won't respond to it.
