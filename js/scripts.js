$(document).ready(function() {

  const sum = function(number01, number02) {
    return number01 + number02;
  }

  
  $("form#triangleForm").submit(function(event) {
    event.preventDefault();
    const side01 = parseInt($("input#side01").val());
    const side02 = parseInt($("input#side02").val());
    const side03 = parseInt($("input#side03").val());
  
    const sum01 = sum(side01, side02);
    const sum02 = sum(side01, side03);
    const sum03 = sum(side02, side03);
  
    if (side01 === side02 && side01 === side03 && side02 === side03) {
      $("#equilateralTriangle").show();
      $("#isoscelesTriangle, #scaleneTriangle, #notTriangle").hide();
    } else if(side01 === side02 && side01 !== side03 || side01 === side03 && side01 !== side02 || side02 === side03 && side02 !== side01) {
      $("#isoscelesTriangle").show();
      $("#equilateralTriangle, #scaleneTriangle, #notTriangle").hide();
    } else if(side01 !== side02 && side01 !== side03 && side02 !== side03) {
      $("#scaleneTriangle").show();
      $("#equilateralTriangle, #isoscelesTriangle, #notTriangle").hide();
    } else if(sum01 <= side03 || sum02 <= side03 || sum03 <= side03){
      $("#notTriangle").show();
      $("#equilateralTriangle, #isoscelesTriangle, #scaleneTriangle").hide();
    }

    $("#triangleOutput").show();
  });
});