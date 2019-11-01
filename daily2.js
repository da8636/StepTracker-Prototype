curDay = 28;
$('#next').hide();
allDays = [];
prepData(data2);

var goalPercentage = 0;
var ctx = document.getElementById('dayGraph').getContext('2d');

var config = {
        plugins: [{
            afterDraw: function(chartInstance) {
                chartInstance.ctx.fillStyle = "black";
                ctx.fillText(goalPercentage + "% of Daily Goal", chartInstance.width/2 - 58, chartInstance.width/2, 200);
                if(goalPercentage>100) {
                    ctx.fillText("Great Work!", chartInstance.width/2 - 34, chartInstance.width/2+14, 200);
                }
            }
        }],
        type: 'doughnut',
        data: {
            datasets: [{
                data: [1627,9373],
                backgroundColor: ["red","gray"],
                label: "Feb " + curDay
            }],
            labels: [
                "Steps",
                "Goal"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Invalid Day'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
var chart = new Chart(ctx, config);

function prepData(text) {
    var textLines = text.split(/\r\n|\n/);
    var activeHours = 0;
    var totalSteps = 0;
    for (var i = 31*24; i < textLines.length; i++) {
        var line = textLines[i].split(',');
        totalSteps += parseInt(line[2]);
        if(line[2]>0) {activeHours++;}
        if(line[1]==23) {
            var newDay = {"day": line[0], "steps" : totalSteps, "active" : (activeHours>9 ? true : false)};
            allDays.push(newDay);
            console.log(newDay);
            activeHours = 0;
            totalSteps = 0;
        }
    }
}
updatePie();

function updatePie() {
    document.getElementById("dayname").innerHTML = "Feb " + curDay + " 2017";
    var difference = goal2 - allDays[curDay-1].steps;
    if(difference < 0) difference = 0;
    goalPercentage = (allDays[curDay-1].steps*100/goal2).toFixed(1);

    chart.data.datasets[0].data[0] = allDays[curDay-1].steps;
    chart.data.datasets[0].data[1] = difference;
    chart.options.title.text = (allDays[curDay-1].active? "Valid Day" : "Invalid Day");
    chart.data.datasets[0].backgroundColor[0] = (allDays[curDay-1].active? "blue" : "red");

    chart.update();
}

$('#prev').click(function() {
    curDay--;

	if(curDay < 28) {
		$('#next').show();
	};
	if(curDay == 1) {
        $('#prev').hide();
	};

    updatePie();
});

$('#next').click(function() {
    curDay++;

    if(curDay==28){
            $('#next').hide();
    }
    if(curDay>1) {
        $('#prev').show();
	};

    updatePie();
});
