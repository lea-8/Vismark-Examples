<script>
  import { onMount } from 'svelte'
  import { base } from "$app/paths";
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  let colours = d3[`schemeObservable10`];
  let { 
    dataPath = `data/aapl.csv`, 
    lad="N09000005", 
    xData = "", 
    yData = "" 
  } = $props();
  let data;

  async function loadData() {
    data = await d3.csv(dataPath, d3.autoType);
  }
  onMount(async () => {
    await loadData();

    plotArea(yData);
    datasetWarning();
  });

  function gatherLines(yArray) {
    let linePlots = []
    for (let i = 0; i < yArray.length; i++) {
      linePlots.push(Plot.lineY(data, {x: xData, y: yArray[i], stroke: colours[i]}))
    }

    return linePlots;
  }

  function plotArea(yArray) {
    let areaChartDiv = document.querySelector('#area-chart')
    if (areaChartDiv) {
      let plotGraph = Plot.plot({
        marginTop: 20,
        marginRight: 20,
        marginBottom: 30,
        marginLeft: 40,
        // color: {legend: true},  // TODO: https://observablehq.com/@tophtucker/plot-coloring-lines-in-wide-untidy-data
        grid: true,
        title: "Apple share price over time",
        caption: "Source: https://observablehq.com/@observablehq/sample-datasets",
        marks: [
          Plot.ruleY([0]),
          Plot.axisX({ticks: "3 months", anchor: "bottom", label: "Date", labelAnchor: "left"}),
          Plot.axisY({anchor: "left", label: "Price", labelAnchor: "top"}),
          ...gatherLines(yArray),
          Plot.gridX(),
          Plot.frame()
        ]
      });
      areaChartDiv.append(plotGraph)
    }
  }

  function datasetWarning() {
    let datasetWarningDiv = document.querySelector('#dataset-warning')
    if (datasetWarningDiv) {
      let plotGraph = Plot.plot({
      marks: [
        Plot.frame(),
        Plot.text(["Illustrative dataset used."], {frameAnchor: "middle"})
      ]
      })
      datasetWarningDiv.append(plotGraph)
    }
  }
</script>

<div id='dataset-warning'></div>
<div id='area-chart'></div>