import * as Plot from '@observablehq/plot';

export function datasetWarning(htmlEl) {
  let datasetWarningDiv = document.querySelector("#"+htmlEl)
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