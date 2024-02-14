document.addEventListener('DOMContentLoaded', function () {
    var studentCounter = document.getElementById('studentCounter');
    var teacherCounter = document.getElementById('teacherCounter');
    var classroomCounter = document.getElementById('classroomCounter');
    var subjectCounter = document.getElementById('subjectCounter');

    var counters = [
        { element: studentCounter, target: 1000, intervalTime: 5  }, // Speed up the student counter
        { element: teacherCounter, target: 50, intervalTime: 150 },
        { element: classroomCounter, target: 30, intervalTime: 200 },
        { element: subjectCounter, target: 12, intervalTime: 200 }
    ];

    counters.forEach(function (counterObj) {
        var count = parseInt(counterObj.element.innerText);
        var target = counterObj.target;
        var intervalTime = counterObj.intervalTime;
        var interval = setInterval(function () {
            if (count >= target) {
                clearInterval(interval); // Stop the interval when count reaches target
            } else {
                count++;
                counterObj.element.innerText = count + "+"  ;
            }
        }, intervalTime); // Change the interval time as needed
    });
});