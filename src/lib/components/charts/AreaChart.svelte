<script>
  import { onMount } from 'svelte'
  import { base } from "$app/paths";
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  let { 
    dataPath = `data/unemployment.csv`, 
    titleData="",
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

  function plotArea(yArray) {
    let areaChartDiv = document.querySelector('#area-chart')
    if (areaChartDiv) {
      let plotGraph = Plot.plot({
        marginTop: 20,
        marginRight: 20,
        marginBottom: 30,
        marginLeft: 40,
        color: {legend: true},
        title: titleData,
        caption: "Source: https://observablehq.com/@observablehq/plot-stacked-area-chart",
        y: {
          grid: true,
          label: "↑ Unemployed (thousands)"
        },
        marks: [
          Plot.areaY(data, {x: "date", y: "unemployed", fill: "industry", title: "industry"}),
          Plot.ruleY([0]),
          Plot.frame()
        ]
      });
      areaChartDiv.append(plotGraph)
    }
  }

  function datasetWarning() {
    let datasetWarningDiv = document.querySelector('#area-warning')
    if (datasetWarningDiv) {
      let plotGraph = Plot.plot({
      marginLeft: 40,
      marks: [
        Plot.frame(),
        Plot.text(["Illustrative dataset used."], {frameAnchor: "middle"})
      ]
      })
      datasetWarningDiv.append(plotGraph)
    }
  }
</script>

<div id='area-warning'></div>
<div id='area-chart'></div>