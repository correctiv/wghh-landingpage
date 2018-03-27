document.addEventListener("DOMContentLoaded", loadProgressBar);

var startDate = new Date("April 5, 2018");
var endDate = new Date("June 16, 2018");
var milestone = new Date("May 4, 2018");

function loadProgressBar(){
  var entirePeriod = endDate.getTime() - startDate.getTime();

  // set progress
  var today = new Date();
  var timeElapsed = today.getTime() - startDate.getTime();
  var timeElapsedPercentage = Math.round(timeElapsed / entirePeriod * 100);
  var progressElem = document.getElementById("progressContainer");
  progressElem.style.width = timeElapsedPercentage + '%';

  // set start point (with label)
  var startElem = document.getElementById('start');
  startElem.style.left = "2.5%"; //start of progressbar, since it's container takes 95% of width and it's centered

  var startLabelElem = document.getElementById("start__label");
  startLabelElem.innerHTML = startDate.toLocaleDateString("de");
  startLabelElem.style.left = '0.5%';

  // set end point (with label)
  var endElem = document.getElementById('end');
  var outerElem = document.getElementById('outerContainer');
  endElem.style.right = "2.5%"; //same as start

  var endLabelElem = document.getElementById("end__label");
  //endLabelElem.innerHTML = endDate.toLocaleDateString("de");
  endLabelElem.innerHTML = "Juni 2018";
  endLabelElem.style.right = '0.5%';

  // set milestone
  var milestoneElem = document.getElementById('milestone');
  var milestonePeriod = milestone.getTime() - startDate.getTime();
  var milestonePosition = Math.round(milestonePeriod / entirePeriod * 95);
  var milestoneRight = Math.round((1 - milestonePeriod / entirePeriod) * 95);
  milestoneElem.style.left = milestonePosition + 2.5 + '%';
  milestoneElem.style.right = milestoneRight + 2.5 + '%';

  // set milestone label
  var milestoneLabelElem = document.getElementById("milestone__label");
  milestoneLabelElem.innerHTML = milestone.toLocaleDateString("de");
  var milestoneLabelPosition = Math.round(milestonePeriod / entirePeriod * 100);
  milestoneLabelElem.style.left = milestoneLabelPosition - 3.5 + '%';

  // set segment label positions
  var leftLabelElem = document.getElementsByClassName('segment__label--left')[0];
  var rightLabelElem = document.getElementsByClassName('segment__label--right')[0];
  leftLabelElem.style.width = milestonePosition / 0.95 + '%';
  rightLabelElem.style.width = (100 - milestonePosition / 0.95) + '%';
}
