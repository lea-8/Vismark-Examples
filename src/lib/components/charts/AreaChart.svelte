<script>
  import { onMount } from 'svelte'
  import { base } from "$app/paths";
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  let { dataPath = `data/aapl.csv`, lad="N09000005", xP = "sepalLength", yP = "petalLength" } = $props();
  let data;

  async function loadData() {
    data = await d3.csv(dataPath, d3.autoType);
  }
  onMount(async () => {
    await loadData();

    plotArea();
    datasetWarning();
  });

  function plotArea() {
    let areaChartDiv = document.querySelector('#area-chart')
    if (areaChartDiv) {
      let plotGraph = Plot.plot({
        marginTop: 20,
        marginRight: 20,
        marginBottom: 30,
        marginLeft: 40,
        grid: true,
        title: "Apple share price over time",
        caption: "Source: https://observablehq.com/@observablehq/sample-datasets",
        marks: [
          Plot.ruleY([0]),
          Plot.axisX({ticks: "3 months", anchor: "bottom", label: "Date", labelAnchor: "left"}),
          Plot.axisY({anchor: "left", label: "Price", labelAnchor: "top"}),          
          Plot.lineY(data, {x: "Date", y: "Open", stroke: "red"}),
          Plot.lineY(data, {x: "Date", y: "High", stroke: "blue"}),
          Plot.lineY(data, {x: "Date", y: "Low", stroke: "green"}),
          Plot.lineY(data, {x: "Date", y: "Close", stroke: "orange"}),
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