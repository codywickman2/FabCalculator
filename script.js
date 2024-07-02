function calculate() {
  var pSize = document.getElementById("pSize").value;
  var cuts = document.getElementById("cuts").value;
  var thrds = document.getElementById("thrds").value;
  var grv = document.getElementById("grv").value;

  if (pSize == 1) {
    var cutTime = 5;
    var thrdTime = 2;
    var grvTime = 1;
    var totalTime = (cutTime * cuts + thrdTime * thrds + grvTime * grv)/60
    alert("Estimated time: " + totalTime )
  }
}
