var curWeek = 0;
var weeks = [
    "Feb 27 - Mar 5",
    "Feb 20 - Feb 26",
    "Feb 13 - Feb 19",
    "Feb 6 - Feb 12",
    "Jan 30 - Feb 5",
    "Jan 23 - Jan 29",
    "Jan 16 - Jan 22",
    "Jan 9 - Jan 15",
    "Jan 2 - Jan 8",
    "Dec 26 - Jan 1",
];
$('#next').hide();
$(".help-tip").css("top", "220px");
var daysInWeek = []
prepData(data1);

var ctx = document.getElementById('weekGraph').getContext('2d');

var labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var chart = new Chart(ctx, {
    plugins: [{
        afterDraw: function(chartInstance) {
            var yScale = chartInstance.scales["y-axis-0"];

            chartInstance.ctx.lineWidth = 2;
            chartInstance.ctx.beginPath();
            chartInstance.ctx.moveTo(0, yScale.getPixelForValue(goal1));
            chartInstance.ctx.lineTo(document.getElementById('weekGraph').width, yScale.getPixelForValue(goal1));
            chartInstance.ctx.strokeStyle = "yellow";
            chartInstance.ctx.stroke();

            chartInstance.ctx.fillStyle = "yellow";
            chartInstance.ctx.fillText("Goal", 0, yScale.getPixelForValue(goal1) - 7);
        }
    }],
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: "Week",
            backgroundColor: 'rgb(255, 99, 132)',
            data: [10886, 1627, 0, 0, 0, 0, 0]
        }]
    },
    options: {
        legend: {
            display: false
         },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 10
                }
            }]
        }
    }
});

updateBar();

function prepData(text) {
    var textLines = text.split(/\r\n|\n/);
    for(var i = 26; i < 32; i++) {
         var fillerDay = {"day": i+"/12/16", "steps":0,"active":false};
         daysInWeek.push(fillerDay);
    }
    var activeHours = 0;
    var totalSteps = 0;
    for (var i = 1; i < textLines.length; i++) {
        var line = textLines[i].split(',');
        totalSteps += parseInt(line[2]);
        if(line[2]>0) {activeHours++;}
        if(line[1]==23) {
            var newDay = {"day": line[0], "steps" : totalSteps, "active" : (activeHours>9 ? true : false)};
            daysInWeek.push(newDay);
            console.log(newDay);
            activeHours = 0;
            totalSteps = 0;
        }
    }
    for(var i = 1; i < 6; i++) {
         var fillerDay = {"day": i+"/3/17", "steps":0,"active":false};
         daysInWeek.push(fillerDay);
    }
}
function updateBar() {
    chart.data.datasets[0].backgroundColor = [];
    chart.data.labels = [];
    document.getElementById("weekname").innerHTML = weeks[curWeek]
    var activeDays = 0;
    var sumActiveSteps = 0;
    for(var i = 0; i < 7; i++) {
        var magicIndex = daysInWeek.length-1 -(curWeek*7) -(6-i);
        if (daysInWeek[magicIndex].active == true) {
            activeDays++; sumActiveSteps+=daysInWeek[magicIndex].steps;
        }
        chart.data.datasets[0].data[i]=daysInWeek[magicIndex].steps;
        chart.data.datasets[0].backgroundColor[i] = (daysInWeek[magicIndex].active? "blue" : "red");
        chart.data.labels[i] = labels[i];
    }
    document.getElementById("stats").innerHTML = "Average steps on valid days: " + ((sumActiveSteps)/(activeDays)).toFixed(1);

    chart.update();
}

$('#prev').click(function() {
    curWeek++;

	if(curWeek > 0) {
		$('#next').show();
	};
	if(curWeek > 8) {
        $('#prev').hide();
	};

    updateBar();
});

$('#next').click(function() {
    curWeek--;

    if(curWeek<1){
            $('#next').hide();
    }
    if(curWeek<9) {
        $('#prev').show();
	};

    updateBar();
});
