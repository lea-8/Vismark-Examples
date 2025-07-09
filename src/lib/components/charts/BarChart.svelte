<script>
  import { onMount } from 'svelte'
  import { base } from "$app/paths";
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  import { datasetWarning } from '../warnings.js';

  let { 
    dataPath = `data/alphabet.csv`,
    titleData="",
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

    plotBar(yData);
    datasetWarning("bar-warning");
  });

  function plotBar(yArray) {
    // let barChartDiv = document.querySelector('#bar-chart')
    // if (barChartDiv) {
    let plotGraph =  Plot.plot({
      marginTop: 20,
      marginRight: 20,
      marginBottom: 30,
      marginLeft: 40,
      title: titleData,
      caption: "Source: https://observablehq.com/plot/features/plots#marks-option",
      x: {padding: 0.4},
      y: {grid: true},
      marks: [
        Plot.barY(data, {x: "letter", y: "frequency", dx: 2, dy: 2}),
        Plot.barY(data, {x: "letter", y: "frequency", fill: "green", dx: -2, dy: -2}),
        Plot.frame()
      ]
    });
      // barChartDiv.append(plotGraph)
    // }
    // chartContainer.innerHTML = ''; // clear any existing chart
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
</script>

<!-- <div id='bar-warning'></div>
<div id='bar-chart'></div> -->

<div bind:this={chartContainer}></div>