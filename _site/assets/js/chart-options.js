// chart options
// color
const covidColor = {
  white: '#fefefe',
  black: '#010101',
  lnColor: 'rgba(1, 1, 1, 0.05)',
  shadowColor: 'rgba(1, 1, 1, 0.75)',
  col1: 'rgb(241, 8, 58)',
  col1a: 'rgba(241, 8, 58, .5)',
  col2: 'rgb(34, 34, 34)',
  col2a: 'rgba(34, 34, 34, .5)',
  col3: 'rgb(33, 129, 70)',
  col3a: 'rgba(33, 129, 70, .5)',
  col4: 'rgb(255, 145, 0)',
  col5: 'rgb(228, 21, 66)',
  col6: 'rgb(146, 26, 52)',
  col7: 'rgb(235, 124, 148)',
  col8: 'rgb(30, 93, 168)',
  col8t: 'rgba(30, 93, 168, 0.425)',
  col9: 'rgb(125,125,125)',
  col9t: 'rgba(125,125,125, 0.425)'
};
// layout
const ctxOptionsLayout = {
  padding: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
};
// tooltip charts
const ctxOptionsTooltips = {
  backgroundColor: covidColor.white,
  titleFontSize: 14,
  titleFontColor: covidColor.black,
  titleAlign: 'center',
  bodyFontSize: 16,
  bodyFontColor: covidColor.black,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 8,
  shadowColor: covidColor.shadowColor,
  titleMarginBottom: 8,
  xPadding: 8,
  yPadding: 8
};
// legend charts
const ctxOptionsLegend = {
  // display: false,
  align: 'center',
  labels: {
    boxWidth: 8,
    fontSize: 14,
    fontColor: covidColor.black,
    padding: 16,
    usePointStyle: true
  }
};
const ctxOptionsNoLegend = {
  display: false
};
// bar scales options
const ctxOptionsScalesBar = {
  xAxes: [{
    stacked: true,
    gridLines: {
      zeroLineColor: 'transparent',
      color: 'transparent',
      tickMarkLength: 8,
    },
    ticks: {
      fontColor: covidColor.black,
      maxRotation: 90,
      minRotation: 90,
      padding: 8
    }
  }],
  yAxes: [{
    gridLines: {
      zeroLineColor: covidColor.lnColor,
      color: covidColor.lnColor,
      tickMarkLength: 8,
      drawBorder: false
    },
    ticks: {
      fontColor: covidColor.black,
      padding: 8
    }
  }]
}

// bar scales NO STACKED options
const ctxOptionsScalesBarNoStack = {
  xAxes: [{
    gridLines: {
      zeroLineColor: 'transparent',
      color: 'transparent',
      tickMarkLength: 8,
    },
    ticks: {
      fontColor: covidColor.black,
      maxRotation: 90,
      minRotation: 90,
      padding: 8
    }
  }],
  yAxes: [{
    gridLines: {
      zeroLineColor: covidColor.lnColor,
      color: covidColor.lnColor,
      tickMarkLength: 8,
      drawBorder: false
    },
    ticks: {
      fontColor: covidColor.black,
      padding: 8
    }
  }]
}

// line elements charts
const ctxOptionsLineElements = {
  point: {
    radius: 2,
    hitRadius: 6,
    hoverRadius: 6
  }
};
const ctxOptionsLineScales = {
  xAxes: [{
    gridLines: {
      zeroLineColor: 'transparent',
      color: 'transparent',
      tickMarkLength: 8
    },
    ticks: {
      fontColor: covidColor.black,
      maxRotation: 90,
      minRotation: 90,
      padding: 8
    }
  }],
  yAxes: [{
    gridLines: {
      zeroLineColor: covidColor.lnColor,
      color: covidColor.lnColor,
      tickMarkLength: 8,
      drawBorder: false
    },
    ticks: {
      fontColor: covidColor.black,
      padding: 8
    }
  }]
};