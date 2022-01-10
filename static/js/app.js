//function startup()

// Charts
console.log("app.js started");
function buildBarPlots(data) {
  console.log(data);

  // Bar Chart
  var colors = ['#d7beeb', '#ac7bd4', '#7b02de']
  var traceBar = {
    type: "bar",
    x: ['In-State Tuition', 'Pell Grant Tuition', 'Other Grant Tuition'],
    y: [data.instate_tuition_fees, data.pell_grant, data.other_grant],
    mode: 'markers',
    marker: {
      color: colors
    }
  };

  var Bardata = [traceBar];

  var Barlayout = {
    title: `<span style='font-size:1em; color:#1d221f'><b>Financial Aid v Tuition Prices<b></span>`,
    xaxis: { autorange: true, title: 'Tuition Prices' },
    yaxis: { autorange: true, title: 'Financial Aid' },
    width: 400,
    height: 400
  };

  Plotly.newPlot("bar", Bardata, Barlayout);

//}).catch (error => console.log(error));
}

//buildPlots(147767);
