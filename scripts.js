var welcome = alert('Welcome to my website')




google.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['HEAVYWEIGHT BOXERS', 'WINS', 'LOSSES'],
        ['Muhammad Ali', 56, 5],
        ['Joe Fraizer', 32, 4],
        ['Mike Tyson', 50, 6],
        ['George Foreman', 76, 5],
        ['Larry Holmes', 69, 6]
    ]);

    var options = {

        width: 900,
        height: 300,
        chart: {
            title: "THE GREATEST'S",
            subtitle: 'Win to Loss ratio of some of the most notable boxers in the last century'
        },

        bars: 'horizontal', // Required for Material Bar Charts.
        series: {
            0: { axis: '' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: '' } // Bind series 1 to an axis named 'brightness'.
        },
        axes: {
            x: {
                distance: {label: ''}, // Bottom x-axis.
                brightness: {side: '', label: ''} // Top x-axis.

            }
        }
    };

    var chart = new google.charts.Bar(document.getElementById('dual_x_div'));
    chart.draw(data, options);
};

google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Muhammad Ali', ''],
        ['Wins',     56],
        ['Losses',      5],
        ["KO's",  37],
        ["Times KO'd", 1]
    ]);

    var options = {
        height: 300,
        title: 'Muhammad Ali Stats'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
