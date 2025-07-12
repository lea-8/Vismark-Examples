<script>
  import { onMount } from 'svelte'
  import { base } from "$app/paths";
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  import { colours } from './chartglobals.js';
  
  let { 
    dataPath = `data/alphabet.csv`, 
    xData = "", 
    yData = "" 
  } = $props();
  let data;
  let chartContainer;

  async function loadData() {
    data = await d3.csv(dataPath, d3.autoType);
  }
  onMount(async () => {
    await loadData();

    plotLine(yData);
    // datasetWarning();
  });

  function gatherLines(yArray) {
    let linePlots = []
    for (let i = 0; i < yArray.length; i++) {
      linePlots.push(Plot.lineY(data, {x: xData, y: yArray[i], stroke: colours[i]}))
    }

    return linePlots;
  }

  function plotLine(yArray) {
    // let lineChartDiv = document.querySelector('#line-chart')
    // if (lineChartDiv) {
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
      // lineChartDiv.append(plotGraph)
    // }
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
</script>

<!-- <div id='line-warning'></div>
<div id='line-chart'></div> -->

<div bind:this={chartContainer}></div>