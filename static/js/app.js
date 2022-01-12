// Build the bar plot upon page initialization
function buildBarPlots(data) {
  // Define trace data
  var colors = ['#d7beeb', '#ac7bd4', '#7b02de']
  var traceBar = {
    type: "bar",
    x: ['In-State Tuition', 'Avg Pell Grant', 'Avg Other Grant'],
    y: [data.instate_tuition_fees, data.pell_grant, data.other_grant],
    mode: 'markers',
    marker: {
      color: colors
    }
  };

  var Bardata = [traceBar];

  var Barlayout = {
    title: `<span style='font-size:1em; color:#1d221f'><b>Example<b></span>`,
    xaxis: {
      autorange: true,
      tickangle: 25
    },
    yaxis: {
      autorange: true,
      title: 'Dollars'
    },
  };

  // Render the bar plot
  Plotly.newPlot("bar", Bardata, Barlayout);
}

// Update the bar plot on marker clicks
function updateBarPlots(data) {

  // Define trace data
  var colors = ['#d7beeb', '#ac7bd4', '#7b02de']
  var traceBar = {
    type: "bar",
    x: ['In-State Tuition', 'Avg Pell Grant', 'Avg Other Grant'],
    y: [data.instate_tuition_fees, data.pell_grant, data.other_grant],
    mode: 'markers',
    marker: {
      color: colors
    }
  };

  var Bardata = [traceBar];

  var Barlayout = {
    title: `<span style='font-size:1em; color:#1d221f'><b>${data.institution}<b></span>`,
    xaxis: {
      autorange: true,
      tickangle: 25
    },
    yaxis: {
      autorange: true,
      title: 'Dollars'
    },
  };

  // Render the bar plot
  Plotly.newPlot("bar", Bardata, Barlayout);
}