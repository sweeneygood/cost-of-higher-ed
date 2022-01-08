//function startup()

// Charts
console.log("app.js started");
function buildPlots(id) {
    let queryUrl = "/api/v1.0/institutions";
    d3.json(queryUrl).then(function(data){
        // console.log(data)/filter
        //var filtered = data.institutions.unit_id(sample => 147767 == id);
        var filtered = data.institutions.filter(s => s.unit_id === 147767);
        var result = filtered[0];
        // console.log(filtered) (result)
        console.log(result.institution);

        // Bar Chart
        var colors = ['#3baf65']
        var traceBar = {
            type: "bar",
            orientation: 'h',
            x: ['In-State Tuition'],
            y: [result.instate_tuition_fees],
            mode: 'markers',
            marker: {
                color: colors
            }
          };
        
        var Bardata = [traceBar];
          
        var Barlayout = {
            title: `<span style='font-size:1em; color:#1d221f'><b>Financial Aid v Tuition Prices<b></span>`,
            xaxis: {autorange: true, title: 'Tuition Prices'},
            yaxis: {autorange: true, title: 'Financial Aid'},
            width: 400,
            height: 400
          };
        
        Plotly.newPlot("bar", Bardata, Barlayout);


        // // Pie Chart
        // var Data = [{
        //     values: result.total_men, total_women,
        //     labels: ['Men v Women'],
        //     type: "pie"
        // }];

        // var Layout = {
        //     height: 400,
        //     width: 500
        // };

        // Plotly.newPlot('myDiv', Data, layout);


    }).catch(error => console.log(error));
}

buildPlots(147767);
