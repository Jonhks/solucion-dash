// function getEnrollment(office, generation) {
//   return data[office][generation]["students"].length;
// }
//
// function getActiveStudentsPerGeneration(office, generation) {
//   var activeCount = 0;
//   var students = data[office][generation]["students"];
//   for (var i = 0; i < students.length; i++) {
//     var student = students[i];
//     if (student.active === true) {
//       activeCount++;
//     }
//   }
//   return activeCount;
// }
//
// function getPercentage(numerator, denominator) {
//   return Math.floor(numerator / denominator * 100);
// }
//
// function getDropout(office, generation) {
//   var totalStudents = getEnrollment(office, generation);
//   var activeStudents = getActiveStudentsPerGeneration(office, generation);
//   var unactiveStudents = totalStudents - activeStudents;
//   return getPercentage(unactiveStudents, totalStudents);
// }
//
// function getNPSOfSprint(office, generation, sprint) {
//   var npsData = data[office][generation]["ratings"][sprint - 1];
//   return npsData.promoters - npsData.detractors;
// }
//
// function getNPS(office, generation) {
//   var sprintNumbersOfGeneration = data[office][generation]["ratings"].length;
//   var npsCount = 0;
//
//   for (var i = 1; i < sprintNumbersOfGeneration; i++) {
//     var npsOfSprint = getNPSOfSprint(office, generation, i);
//     npsCount += npsOfSprint;
//     console.log(npsOfSprint);
//   }
//
//   return npsCount / sprintNumbersOfGeneration;
// }

var select = document.getElementById("select");
select.addEventListener("change", filter);

function filter() {
  //como hacemos para que filter haga una sola cosa?
  var selectedIndex = event.target.selectedIndex;
  var selectedOption = event.target[selectedIndex];
  var office = selectedOption.dataset.sede;
  var generation = selectedOption.dataset.generation;
  var studentsCount = getStudentsCount(office, generation);
  var activeStudents = getActiveStudents(office, generation);
  var tudentsMeetTarget = getStudentMeetTargetTech(office, generation);
  var inactiveStudents = studentsCount - activeStudents;
  var dropoutPercents = Math.round(inactiveStudents / studentsCount * 100);
  document.getElementById("students-enrolled").innerText = studentsCount;
  document.getElementById("students-dropout").innerText = dropoutPercents;
}

function getStudentsCount(office, generation){
  return data[office][generation]["students"].length;
}

function getActiveStudents(office, generation) {
  var students = data[office][generation]["students"];
  var studentActiveCount = 0;
  for (var i = 0; i < students.length; i++) {
    if (students[i]["active"] === true) {
      studentActiveCount++;
    }
  }
  return studentActiveCount;
}

function getStudentMeetTargetTech (office, generation){
  var meetStudents = data[office][generation]["students"][0]["sprints"][0];//["score"]["tech"];
  var students = data[office][generation]["students"];
  for(var i = 0; i < students.length; i++){
  console.log(activeStudents(office, generation));
    
  }
}