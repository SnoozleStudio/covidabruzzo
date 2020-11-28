// charts with COVID-19 dataset
getChart();
async function getChart() {

  // get data from pcm-dpc regioni json
  const data = await getCovid();

  // get original data for reuse
  const days = [...data.xDays];
  const dataTP = [...data.yTP];
  const dataD = [...data.yD];
  const dataDG = [...data.yDG];
  const dataTC = [...data.yTC];
  const dataRCS = [...data.yRCS];
  const dataTI = [...data.yTI];
  const dataID = [...data.yID];
  const dataVTP = [...data.yVTP];
  const dataT = [...data.yT];

  const trimmedDate = [];
  // date grafici

  truncateDate(days, trimmedDate);

  lastUpdate(days, document.getElementsByClassName('last-update'));

  lastUpdateSmall(days, document.getElementsByClassName('last-update-small'));

  const TP = 'Totale positivi';
  const D = 'Decessi';
  const DG = 'Dimessi/Guariti';
  const TC = 'Totale casi';
  const RCS = 'Ricoverati con sintomi';
  const TI = 'Terapia intensiva';
  const ID = 'Isolamento domiciliare';
  const VTP = 'Variazione totale positivi';
  const T = 'Tamponi';

  const sma3 = '3 day SMA';
  const sma7 = '7 day SMA';
  const sma11 = '11 day SMA';

  addTitle(document.getElementsByClassName('text_1'), TP);
  addTitle(document.getElementsByClassName('text_2'), D);
  addTitle(document.getElementsByClassName('text_3'), DG);
  addTitle(document.getElementsByClassName('text_4'), TC);
  addTitle(document.getElementsByClassName('text_5'), RCS);
  addTitle(document.getElementsByClassName('text_6'), TI);
  addTitle(document.getElementsByClassName('text_7'), ID);
  addTitle(document.getElementsByClassName('text_8'), VTP);
  addTitle(document.getElementsByClassName('text_9'), T);

  addTitle(document.getElementsByClassName('sma-3'), sma3);
  addTitle(document.getElementsByClassName('sma-7'), sma7);
  addTitle(document.getElementsByClassName('sma-11'), sma11);

  getLastValue(document.getElementsByClassName('num_1'), dataTP);
  getLastValue(document.getElementsByClassName('num_2'), dataD);
  getLastValue(document.getElementsByClassName('num_3'), dataDG);
  getLastValue(document.getElementsByClassName('num_4'), dataTC);
  getLastValue(document.getElementsByClassName('num_5'), dataRCS);
  getLastValue(document.getElementsByClassName('num_6'), dataTI);
  getLastValue(document.getElementsByClassName('num_7'), dataID);
  getLastValue(document.getElementsByClassName('num_8'), dataVTP);

  getDifference(last(dataTP), getYesterdayVal(dataTP), document.getElementsByClassName('var_1'), document.getElementsByClassName('col_1'));
  getDifference(last(dataD), getYesterdayVal(dataD), document.getElementsByClassName('var_2'), document.getElementsByClassName('col_2'));
  getDifferenceDG(last(dataDG), getYesterdayVal(dataDG), document.getElementsByClassName('var_3'), document.getElementsByClassName('col_3'));
  getDifference(last(dataTC), getYesterdayVal(dataTC), document.getElementsByClassName('var_4'), document.getElementsByClassName('col_4'));
  getDifference(last(dataRCS), getYesterdayVal(dataRCS), document.getElementsByClassName('var_5'), document.getElementsByClassName('col_5'));
  getDifference(last(dataTI), getYesterdayVal(dataTI), document.getElementsByClassName('var_6'), document.getElementsByClassName('col_6'));
  getDifference(last(dataID), getYesterdayVal(dataID), document.getElementsByClassName('var_7'), document.getElementsByClassName('col_7'));
  getDifference(last(dataVTP), getYesterdayVal(dataVTP), document.getElementsByClassName('var_8'), document.getElementsByClassName('col_8'));

  getLastRelValue(dataTP, document.getElementsByClassName('var_rel_1'));
  getLastRelValue(dataD, document.getElementsByClassName('var_rel_2'));
  getLastRelValue(dataDG, document.getElementsByClassName('var_rel_3'));
  getLastRelValue(dataTC, document.getElementsByClassName('var_rel_4'));
  getLastRelValue(dataRCS, document.getElementsByClassName('var_rel_5'));
  getLastRelValue(dataTI, document.getElementsByClassName('var_rel_6'));
  getLastRelValue(dataID, document.getElementsByClassName('var_rel_7'));
  getLastRelValue(dataVTP, document.getElementsByClassName('var_rel_8'));

  getYesterdayRelValue(dataTC, document.getElementsByClassName('var_rel_yesterday_4'));

  // chart default value
  Chart.defaults.global.defaultFontFamily = "'Titillium Web', sans-serif";

  // istogramma "totale positivi"
  const ctxTPintro = document.getElementById('totalePositivi').getContext('2d');
  const ctxTPintroOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: TP,
        data: dataTP,
        backgroundColor: covidColor.col1,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartTPintro = new Chart(ctxTPintro, ctxTPintroOptions);

  // istogramma "decessi"
  const ctxDintro = document.getElementById('decessi').getContext('2d');
  const ctxDintroOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: D,
        data: dataD,
        backgroundColor: covidColor.col2,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartDintro = new Chart(ctxDintro, ctxDintroOptions);

  // istogramma "dimessi guariti"
  const ctxDGintro = document.getElementById('dimessiGuariti').getContext('2d');
  const ctxDGintroOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: DG,
        data: dataDG,
        backgroundColor: covidColor.col3,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartDiGntro = new Chart(ctxDGintro, ctxDGintroOptions);

  // istogramma "totale casi"
  const ctxTCintro = document.getElementById('totaleCasi').getContext('2d');
  const ctxTCintroOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: TC,
        data: dataTC,
        backgroundColor: covidColor.col4,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartTCintro = new Chart(ctxTCintro, ctxTCintroOptions);


  // istogramma "variazione totale positivi" curve SMA 3 - 7 - 11
  const dataVTPSmaThree = [];
  smaThree(dataVTP, dataVTPSmaThree);
  dataVTPSmaThree.unshift(0, 0);

  const dataVTPSmaSeven = [];
  smaSeven(dataVTP, dataVTPSmaSeven);
  dataVTPSmaSeven.unshift(0, 0);

  const dataVTPSmaEleven = [];
  smaEleven(dataVTP, dataVTPSmaEleven);
  dataVTPSmaEleven.unshift(0, 0);

  const ctxVTPintro = document.getElementById('variazioneTotalePositivi').getContext('2d');
  const ctxVTPintroOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: VTP,
        data: dataVTP,
        backgroundColor: covidColor.col9t,
        barPercentage: 1,
        categoryPercentage: 0.9,
        order: 2
      }, {
        label: '3 day SMA',
        data: dataVTPSmaThree,
        type: 'line',
        borderColor: covidColor.col8,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0,
        order: 1
      }, {
        label: '7 day SMA',
        data: dataVTPSmaSeven,
        type: 'line',
        borderColor: covidColor.col1,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0,
        order: 1
      }, {
        label: '11 day SMA',
        data: dataVTPSmaEleven,
        type: 'line',
        borderColor: covidColor.col3,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0,
        order: 1
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartVTPintro = new Chart(ctxVTPintro, ctxVTPintroOptions);

  const TAbsolute = [];
  
  
  
  const TPAbsolute = [];
  variazioneAssoluta(dataTP, TPAbsolute);

  const TPTRel = [];
  rapportoTamponi(TPAbsolute, TAbsolute, TPTRel);

  // grafico "i numeri complessivi"
  const ctxNC = document.getElementById('numeriComplessivi').getContext('2d');
  const ctxNCOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: DG,
        data: dataDG,
        backgroundColor: covidColor.col3a,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: TP,
        data: dataTP,
        backgroundColor: covidColor.col1a,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: D,
        data: dataD,
        backgroundColor: covidColor.col2a,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartNC = new Chart(ctxNC, ctxNCOptions);

  const ctxSAP = document.getElementById('situazioneAttualmentePositivi').getContext('2d');
  const ctxSAPOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: TI,
        data: dataTI,
        backgroundColor: covidColor.col6,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: RCS,
        data: dataRCS,
        backgroundColor: covidColor.col5,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: ID,
        data: dataID,
        backgroundColor: covidColor.col7,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartSAP = new Chart(ctxSAP, ctxSAPOptions);

  const ctxDAP = document.getElementById('distribuzioneAttualmentePositivi').getContext('2d');
  const ctxDAPOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: TI,
        data: dataTI,
        backgroundColor: covidColor.col6,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: RCS,
        data: dataRCS,
        backgroundColor: covidColor.col5,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: ID,
        data: dataID,
        backgroundColor: covidColor.col7,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips,
      plugins: {
        stacked100: {
          enable: true
        }
      }
    }
  };
  const chartDAP = new Chart(ctxDAP, ctxDAPOptions);

  const ctxSOP = document.getElementById('situazioneOspedaliPositivi').getContext('2d');
  const ctxSOPOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: TI,
        data: dataTI,
        backgroundColor: covidColor.col6,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: RCS,
        data: dataRCS,
        backgroundColor: covidColor.col5,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartSOP = new Chart(ctxSOP, ctxSOPOptions);

  const ctxSOTI = document.getElementById('situazioneOspedaliIntensiva').getContext('2d');
  const ctxSOTIOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: TI,
        data: dataTI,
        backgroundColor: covidColor.col6,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartSOTI = new Chart(ctxSOTI, ctxSOTIOptions);

  const ctxSAPSingle = document.getElementById('situazioneAttualmentePositiviSingle').getContext('2d');
  const ctxSAPSingleOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: ID,
        data: dataID,
        backgroundColor: covidColor.col7,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: RCS,
        data: dataRCS,
        backgroundColor: covidColor.col5,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: TI,
        data: dataTI,
        backgroundColor: covidColor.col6,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBarNoStack,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartSAPSingle = new Chart(ctxSAPSingle, ctxSAPSingleOptions);

  const ctxSOPSingle = document.getElementById('situazioneOspedaliPositiviSingle').getContext('2d');
  const ctxSOPSingleOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: RCS,
        data: dataRCS,
        backgroundColor: covidColor.col5,
        barPercentage: 1,
        categoryPercentage: 0.9
      }, {
        label: TI,
        data: dataTI,
        backgroundColor: covidColor.col6,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBarNoStack,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartSOPSingle = new Chart(ctxSOPSingle, ctxSOPSingleOptions);

  const ctxTrendAbruzzo = document.getElementById('trendAbruzzo').getContext('2d');
  const ctxTrendAbruzzoOptions = {
    type: 'line',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: TC,
        data: dataTC,
        borderColor: covidColor.col4,
        backgroundColor: covidColor.col4,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }, {
        label: TP,
        data: dataTP,
        borderColor: covidColor.col1,
        backgroundColor: covidColor.col1,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }, {
        label: DG,
        data: dataDG,
        borderColor: covidColor.col3,
        backgroundColor: covidColor.col3,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }, {
        label: D,
        data: dataD,
        borderColor: covidColor.col2,
        backgroundColor: covidColor.col2,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsLineScales,
      elements: ctxOptionsLineElements,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartTrendAbruzzo = new Chart(ctxTrendAbruzzo, ctxTrendAbruzzoOptions);

  const ctxVA = document.getElementById('variazioneAssoluta').getContext('2d');
  const TCAbsolute = [];
  const DGAbsolute = [];
  const DAbsolute = [];

  variazioneAssoluta(dataTC, TCAbsolute);
  variazioneAssoluta(dataDG, DGAbsolute);
  variazioneAssoluta(dataD, DAbsolute);
  const ctxVAOptions = {
    type: 'line',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: TC,
        data: TCAbsolute,
        borderColor: covidColor.col4,
        backgroundColor: covidColor.col4,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }, {
        label: TP,
        data: TPAbsolute,
        borderColor: covidColor.col1,
        backgroundColor: covidColor.col1,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }, {
        label: DG,
        data: DGAbsolute,
        borderColor: covidColor.col3,
        backgroundColor: covidColor.col3,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }, {
        label: D,
        data: DAbsolute,
        borderColor: covidColor.col2,
        backgroundColor: covidColor.col2,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsLineScales,
      elements: ctxOptionsLineElements,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartVA = new Chart(ctxVA, ctxVAOptions);

  const ctxVP = document.getElementById('variazionePercentuale').getContext('2d');
  const DGRelative = [];
  const DRelative = [];

  variazionePercentuale(dataDG, DGRelative);
  variazionePercentuale(dataD, DRelative);

  const ctxVPOptions = {
    type: 'line',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: DG,
        data: DGRelative,
        borderColor: covidColor.col3,
        backgroundColor: covidColor.col3,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }, {
        label: D,
        data: DRelative,
        borderColor: covidColor.col2,
        backgroundColor: covidColor.col2,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsLineScales,
      elements: ctxOptionsLineElements,
      legend: ctxOptionsLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartVP = new Chart(ctxVP, ctxVPOptions);

  const ctxTM = document.getElementById('tassoMortalita').getContext('2d');
  const TMRel = [];

  tassoMortalita(DAbsolute, DGAbsolute, TMRel);

  const ctxTMOptions = {
    type: 'line',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: 'Tasso di mortalità',
        data: TMRel,
        borderColor: covidColor.col2,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsLineScales,
      elements: ctxOptionsLineElements,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartTM = new Chart(ctxTM, ctxTMOptions);

  const ctxFC = document.getElementById('fattoreCrescita').getContext('2d');
  const FCRel100 = [];

  // fattoreCrescita(TCAbsolute, dataTC, FCRel100);
  fattoreCrescita(TCAbsolute, dataVTP, FCRel100);

  const ctxFCOptions = {
    type: 'line',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: 'Fattore di crescita',
        data: FCRel100,
        borderColor: covidColor.col1,
        fill: 'hidden',
        borderWidth: 2,
        lineTension: 0
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsLineScales,
      elements: ctxOptionsLineElements,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartFC = new Chart(ctxFC, ctxFCOptions);

  const ctxTPT = document.getElementById('tamponiPositivi').getContext('2d');
  const TPTRel100 = [];

  fattoreCrescita(dataTP, dataT, TPTRel100);

  const ctxTPTOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: '%' + TP,
        data: TPTRel100,
        backgroundColor: covidColor.col1,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartTPT = new Chart(ctxTPT, ctxTPTOptions);

  const ctxTE = document.getElementById('tamponiEseguiti').getContext('2d');
  const ctxTEOptions = {
    type: 'bar',
    data: {
      labels: trimmedDate,
      datasets: [{
        label: T,
        data: dataT,
        backgroundColor: covidColor.col9,
        borderWidth: 0,
        barPercentage: 1,
        categoryPercentage: 0.9
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: ctxOptionsLayout,
      scales: ctxOptionsScalesBar,
      legend: ctxOptionsNoLegend,
      tooltips: ctxOptionsTooltips
    }
  };
  const chartTE = new Chart(ctxTE, ctxTEOptions);
};

async function getCovid() {
  const xDays = [];
  const yRCS = [];
  const yTI = [];
  const yTO = [];
  const yID = [];
  const yTP = [];
  const yVTP = [];
  const yNP = [];
  const yDG = [];
  const yD = [];
  const yTC = [];
  const yT = [];

  // prendi e filtra i dati per regione Abruzzo
  const covid_url =
    'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json';
  const response = await fetch(covid_url);
  const dataCorona = await response.json();

  // console.log(dataCorona);

  for (let i = 0; i < dataCorona.length; i++) {
    if (dataCorona[i].codice_regione == '13') {
      const {
        data,
        ricoverati_con_sintomi,
        terapia_intensiva,
        totale_ospedalizzati,
        isolamento_domiciliare,
        totale_positivi,
        variazione_totale_positivi,
        nuovi_positivi,
        dimessi_guariti,
        deceduti,
        totale_casi,
        tamponi
      } = dataCorona[i];
      xDays.push(data);
      yRCS.push(ricoverati_con_sintomi);
      yTI.push(terapia_intensiva);
      yTO.push(totale_ospedalizzati);
      yID.push(isolamento_domiciliare);
      yTP.push(totale_positivi);
      yVTP.push(variazione_totale_positivi);
      yNP.push(nuovi_positivi);
      yDG.push(dimessi_guariti);
      yD.push(deceduti);
      yTC.push(totale_casi);
      yT.push(tamponi);
    }
  }
  return {
    xDays,
    yRCS,
    yTI,
    yTO,
    yID,
    yTP,
    yVTP,
    yNP,
    yDG,
    yD,
    yTC,
    yT
  };
}

async function getCovidProv() {
  const xDaysProv = [];
  const yTCCH = [];
  const yTCAQ = [];
  const yTCPE = [];
  const yTCTE = [];

  // prendi e filtra i dati per province
  const covid_url_prov =
    'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json';
  const responseProv = await fetch(covid_url_prov);
  const dataCoronaProv = await responseProv.json();

  for (let i = 0; i < dataCoronaProv.length; i++) {
    if (dataCoronaProv[i].sigla_provincia == 'CH') {
      const {
        data,
        totale_casi
      } = dataCoronaProv[i];
      xDaysProv.push(data);
      yTCCH.push(totale_casi);
    }
    if (dataCoronaProv[i].sigla_provincia == 'AQ') {
      const {
        totale_casi
      } = dataCoronaProv[i];
      yTCAQ.push(totale_casi);
    }
    if (dataCoronaProv[i].sigla_provincia == 'PE') {
      const {
        totale_casi
      } = dataCoronaProv[i];
      yTCPE.push(totale_casi);
    }
    if (dataCoronaProv[i].sigla_provincia == 'TE') {
      const {
        totale_casi
      } = dataCoronaProv[i];
      yTCTE.push(totale_casi);
    }
  }
  return {
    xDaysProv,
    yTCCH,
    yTCAQ,
    yTCPE,
    yTCTE
  };
}