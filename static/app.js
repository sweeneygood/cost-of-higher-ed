function startup()

// Bar Chart
function buildPlots(id) {
    d3.json("financial-aid.csv").then(function(samplesData){
        // console.log(samplesData)/filter
        var filtered = samplesData.samples.filter(sample => sample.id == id);
        var result = filtered[0];
        // console.log(filtered) (result)

        Data = [];
        for (i=0; i<result.sample_values.length; i++){
            Data.push({
                id: `Financial Aid ${result.finaid_ids[i]}`,
                value: result.sample_values[i],
                label: result.finaid_labels[i]
            });
        }
        // console.log(Data)

        var Sorted = Data.sort(function sortFunction(a,b){
            return b.value - a.value;
        }).slice(0,10);
        // console.log(Sorted)

        // Order of data
        var reversed = Sorted.sort(function sortFunction(a,b){
            return a.value - b.value;
        })
        // console.log(reversed)

        // Horizontal Bar Chart
        var colors = ['#3baf65']
        var traceBar = {
            type: "bar",
            orientation: 'h',
            x: reversed.map(row=> row.value),
            y: reversed.map(row => row.id),
            text: reversed.map(row => row.label),
            mode: 'markers',
            marker: {
                color: colors
            }
          };
        
        var Bardata = [traceBar];
          
        var Barlayout = {
            title: `<span style='font-size:1em; color:#1d221f'><b>Financial Aid v Tuition Prices<b></span>`,
            xaxis: {autorange: true, title: 'Sample Values'},
            yaxis: {autorange: true},
            width: 400,
            height: 400
          };
        
        Plotly.newPlot("bar", Bardata, Barlayout);


        // Pie Chart
        var Data = [{
            values: result._________,
            labels: ['_______'],
            type: "pie"
        }];

        var Layout = {
            height: 400,
            width: 500
        };

        Plotly.newPlot('myDiv', Data, layout);


    }).catch(error => console.log(error));
}