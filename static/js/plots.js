// Build the pie chart upon initialization
function buildPiePlots(pie_data) {

    // Define the data
    const data = {
        labels: [
            'Total Men (example)',
            'Total Women (example)'
        ],
        datasets: [{
            label: 'Gender',
            data: [pie_data.total_men, pie_data.total_women],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
    };
    const config = {
        type: 'pie',
        data: data,
    };

    // Render the pie chart
    const pie = new Chart(
        document.getElementById('pie'),
        config
    );
}

// Update the pie chart on marker clicks
function updatePiePlots(pie_data) {

    // Erase the exisitng pue chart
    Chart.getChart("pie").destroy();

    // Define the new data
    const data = {
        labels: [
            'Total Men',
            'Total Women'
        ],
        datasets: [{
            label: 'Gender',
            data: [pie_data.total_men, pie_data.total_women],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
    };
    const config = {
        type: 'pie',
        data: data,
    };

    // Render the pie chart
    const pie = new Chart(
        document.getElementById('pie'),
        config
    );
}