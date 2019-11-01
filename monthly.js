var curMonth = 2;
$('#next').hide();
$(".help-tip").css("top", "260px");
$(".help-tip").css("right", "55px");
var weeksInMonth = []
prepData(data1);

var ctx = document.getElementById('monthGraph').getContext('2d');

var labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: "Steps",
            yAxisID: 'A',
            backgroundColor: "blue",
            data: [10886, 1627, 0, 0, 0, 0, 0],
        },
        {
            label: "Valid Days",
            yAxisID: 'B',
            backgroundColor: "green",
            data: [10, 20, 0, 0, 0, 0, 0],
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
                ticks: {
                    beginAtZero:true
                }
            }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                  min: 0,
                  stepSize: 1
              }
            }]
        }
    }
});

updateBar();

function prepData(text) {
    var textLines = text.split(/\r\n|\n/)
    var activeHours = 0;
    var totalSteps = 0;
    var totalActiveDays = 0;
    var curDay = 0;
    for (var i = 1; i < textLines.length; i++) {
        var line = textLines[i].split(',');
        totalSteps += parseInt(line[2]);
        if(line[2]>0) {activeHours++;}
        if(line[1]==23) {
            if(activeHours > 9) totalActiveDays++;
            activeHours = 0;
            curDay++;
            if(curDay==7) {
                var newWeek = {"steps": totalSteps, "activeDays": totalActiveDays};
                weeksInMonth.push(newWeek);
                curDay = 0;
                totalSteps = 0;
                totalActiveDays = 0;
            }
        }
    }
}
function updateBar() {
    document.getElementById("monthname").innerHTML = (curMonth==1? "January" : "February")
    if(curMonth == 1)
        for(var i = 0; i < 4; i++) {
            chart.data.datasets[0].data[i]=weeksInMonth[i].steps;
            chart.data.datasets[1].data[i]=weeksInMonth[i].activeDays;
        }
    else
        for(var i = 0; i < 4; i++) {
            chart.data.datasets[0].data[i]=weeksInMonth[i+4].steps;
            chart.data.datasets[1].data[i]=weeksInMonth[i+4].activeDays;
        }

    chart.update();
}

$('#prev').click(function() {
    curMonth = 1;

	$('#next').show();
    $('#prev').hide();

    updateBar();
});

$('#next').click(function() {
    curMonth = 2;

    $('#next').hide();
    $('#prev').show();

    updateBar();
});
