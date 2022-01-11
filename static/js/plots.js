console.log("plots.js")

function buildPiePlots(pie_data) {

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
    
    // if (pie instanceof Chart){
    //     pie.destroy();
    //     const pie = new Chart(
    //         document.getElementById('pie'),
    //         config
    //     );}
        
    const pie = new Chart(
        document.getElementById('pie'),
        config
    );

}

function updatePiePlots(pie_data) {
Chart.getChart("pie").destroy();
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
    
    // if (pie instanceof Chart){
    //     pie.destroy();
    //     const pie = new Chart(
    //         document.getElementById('pie'),
    //         config
    //     );}
        
    const pie = new Chart(
        document.getElementById('pie'),
        config
    );

}