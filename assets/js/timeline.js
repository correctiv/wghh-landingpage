document.addEventListener("DOMContentLoaded", loadProgressBar);

var startDate = new Date("April 3, 2018");
var endDate = new Date("June 18, 2018");
var milestones = [new Date("April 5, 2018"),new Date("May 4, 2018"),new Date("June 16, 2018")];
var segments = ["Eigentümer erheben", "Daten auswerten"];
var segmentWidth = [];

function loadProgressBar(){
  var entirePeriod = endDate.getTime() - startDate.getTime();

  // set progress bar
  var today = new Date();
  var timeElapsed = today.getTime() - startDate.getTime();
  var timeElapsedPercentage = Math.round(timeElapsed / entirePeriod * 100);
  var progressElem = document.getElementById("progressContainer");
  progressElem.style.width = timeElapsedPercentage + '%';

  milestones.forEach( function(milestone) {

    // milestone
    var milestoneElem = document.createElement('div');
    var milestonePeriod = milestone.getTime() - startDate.getTime();
    var milestonePosition = Math.round((milestonePeriod / entirePeriod) * 100);
    milestoneElem.className = "milestone";
    document.getElementById('progressContainer').appendChild(milestoneElem);
    milestoneElem.style.left = milestonePosition + '%';
    segmentWidth.push(milestonePosition);

    // label
    var milestoneLabelElem = document.createElement('div');
    var milestoneLabelPosition = 2;
    milestoneLabelElem.className = "label";
    milestoneLabelElem.innerHTML = milestone.toLocaleDateString("de");
    document.getElementById('label-container').appendChild(milestoneLabelElem);
    milestoneLabelElem.style.left = milestonePosition + '%';
  });


  // set segments
  segments.forEach( function(segment) {
    var segmentElem = document.createElement('div');
    var segmentStart = segmentWidth.shift();
    var segmentEnd = (segmentWidth[0]);
    var segmentElemWidth = segmentEnd - segmentStart;
    segmentElem.className = "segment";
    document.getElementById('label-segments').appendChild(segmentElem);
    segmentElem.innerHTML = segment;
    segmentElem.style.width = segmentElemWidth + '%';
  });
}
