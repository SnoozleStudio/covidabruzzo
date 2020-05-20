// control array
// get first value
const first = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};

// get last value
const last = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

// tronca la data array
function truncateDate(arrayIn, arrayOut, ) {
  const arrayInCopy = [...arrayIn];
  arrayInCopy.forEach(dataUnit => {
    arrayOut.push(dataUnit.split("T")[0]);
  })
};

// data per esteso con ora aggiornamento su html
function lastUpdate(array, containers) {
  const copyArray = [...array]
  const getLastDate = last(copyArray);
  const editDate = getLastDate.replace("T", " ore ");
  [].slice.call(containers).forEach((span) => {
    span.innerHTML = editDate;
  });
}

// solo data su html
function lastUpdateSmall(array, containers) {
  const copyArray = [...array]
  const getLastDate = last(copyArray);
  const editDate = getLastDate.split('T')[0];
  [].slice.call(containers).forEach((span) => {
    span.innerHTML = editDate;
  });
}

// titolo dato su html
function addTitle(containers, content) {
  [].slice.call(containers).forEach((text) => {
    text.innerHTML = content;
  });
}

// ultimo valore del giorno su tabella iniziale
function getLastValue(containers, array) {
  const copyArray = [...array];
  const getLastData = last(copyArray);
  [].slice.call(containers).forEach((num) => {
    num.innerHTML = getLastData;
  });
}

// valore di ieri usata con getDifference, vedi sotto
function getYesterdayVal(array) {
  const yesterdayArray = [...array];
  yesterdayArray.pop();
  const yesterday = last(yesterdayArray);
  return yesterday
};

// crescita variazione nuovi positivi
function crescitaVariazioneNuoviPositivi(arrayIn, arrayOut) {
  const arrayX = [...arrayIn];
  const arrayY = [...arrayIn];
  const today = arrayX;
  arrayY.pop();
  arrayY.unshift(0);
  const yesterday = arrayY;
  _.zipWith(today, yesterday, (i, j) => {
    const relValue = (((i / j) * 100));
    const relRound = Math.round((relValue + Number.EPSILON) * 100) / 100;
    arrayOut.push(relRound);
  })
};

// tabella iniziale differenza tra ieri e oggi
function getDifference(today, yesterday, containers, mainContainers) {
  const variation = today - yesterday;
  const variationSign = (variation > 0 ? '+' : '') + variation;
  [].slice.call(containers).forEach((num) => {
    num.innerHTML = variationSign;
  });
  [].slice.call(mainContainers).forEach((container) => {
    if (variation > 0) {
      container.classList.add('danger');
    }
    if (variation < 0) {
      container.classList.add('good');
    }
    if (variation == 0) {
      container.classList.add('neutral');
    }
  });
};


// tabella iniziale differenza tra ieri e oggi SOLO PER GUARITI
function getDifferenceDG(today, yesterday, containers, mainContainers) {
  const variation = today - yesterday;
  const variationSign = (variation > 0 ? '+' : '') + variation;
  [].slice.call(containers).forEach((num) => {
    num.innerHTML = variationSign;
  });
  [].slice.call(mainContainers).forEach((container) => {
    if (variationSign < 0) {
      container.classList.add('danger');
    }
    if (variationSign > 0) {
      container.classList.add('good');
    }
    if (variationSign == 0) {
      container.classList.add('neutral');
    }
  });
}

// differenza tra ieri e oggi rel100
function getLastRelValue(array, containers) {
  const arrayx = [...array];
  const arrayx0 = [...array];
  const x = last(arrayx);
  arrayx0.pop();
  const x0 = last(arrayx0);
  const rel = ((x - x0) / x0) * 100;
  const relRound = Math.round((rel + Number.EPSILON) * 100) / 100;
  const relVal = (relRound > 0 ? '+' : '') + relRound;
  [].slice.call(containers).forEach((num) => {
    num.innerHTML = relVal + '%';
  });
}

// testo i numeri offi percentuale di ieri.
function getYesterdayRelValue(array, containers) {
  const arrayx = [...array];
  const arrayx0 = [...array];
  arrayx.pop();
  const x = last(arrayx);
  arrayx0.splice(-2);
  const x0 = last(arrayx0);
  const rel = ((x - x0) / x0) * 100;
  const relRound = Math.round((rel + Number.EPSILON) * 100) / 100;
  const relVal = (relRound > 0 ? '+' : '') + relRound;
  [].slice.call(containers).forEach((num) => {
    num.innerHTML = relVal + '%';
  });
}

// variazione assoluta ieri oggi su array
function variazioneAssoluta(arrayIn, arrayOut) {
  const today = [...arrayIn];
  const yesterday = [...arrayIn];
  yesterday.pop();
  yesterday.unshift(0);
  _.zipWith(today, yesterday, (i, j) => {
    const absoluteValue = i - j;
    arrayOut.push(absoluteValue);
  })
};

// variazione percentuale
function variazionePercentuale(arrayIn, arrayOut) {
  const today = [...arrayIn];
  const yesterday = [...arrayIn];
  yesterday.pop();
  yesterday.unshift(0);
  _.zipWith(today, yesterday, (i, j) => {
    const relValue = (((i - j) / j) * 100);
    const relRound = Math.round((relValue + Number.EPSILON) * 100) / 100;
    arrayOut.push(relRound);
  })
};

// tasso di mortalità
function tassoMortalita(arrayX, arrayY, arrayOut) {
  const x = [...arrayX];
  const y = [...arrayY];
  _.zipWith(x, y, (i, j) => {
    const relVal = (i / (i + j));
    const relRound = Math.round((relVal + Number.EPSILON) * 100) / 100;
    arrayOut.push(relRound);
  })
};

// fattore di crescita
function fattoreCrescita(arrayX, arrayY, arrayOut) {
  const x = [...arrayX];
  const y = [...arrayY];
  _.zipWith(x, y, (i, j) => {
    const relVal = ((i / j) * 100);
    const relRound = Math.round((relVal + Number.EPSILON) * 100) / 100;
    arrayOut.push(relRound);
  })
};

// rapporto tamponi
function rapportoTamponi(arrayX, arrayY, arrayOut) {
  _.zipWith(arrayX, arrayY, (i, j) => {
    const TTCRel100 = ((i / j) * 100);
    const TTCRel100Val = Math.round((TTCRel100 + Number.EPSILON) * 100) / 100;
    arrayOut.push(TTCRel100Val);
  });
};

function smaThree(arrayIn, arrayOut) {
  const N = arrayIn.length;
  const someData = [...arrayIn];
  for (let i = 1; i < N - 1; i++) {
    const mean = (someData[i] + someData[i - 1] + someData[i + 1]) / 3.0;
    const meanRound = Math.round((mean + Number.EPSILON) * 100) / 100;
    arrayOut.push(meanRound);
  }
};

function smaSeven(arrayIn, arrayOut) {
  const N = arrayIn.length;
  const someData = [...arrayIn];
  for (let i = 1; i < N - 1; i++) {
    const mean = (someData[i] + someData[i - 1] + someData[i + 1] + someData[i - 2] + someData[i - 3] + someData[i - 4] + someData[i - 5]) / 7.0;
    const meanRound = Math.round((mean + Number.EPSILON) * 100) / 100;
    arrayOut.push(meanRound);
  }
};

function smaEleven(arrayIn, arrayOut) {
  const N = arrayIn.length;
  const someData = [...arrayIn];
  for (let i = 1; i < N - 1; i++) {
    const mean = (someData[i] + someData[i - 1] + someData[i + 1] + someData[i - 2] + someData[i - 3] + someData[i - 4] + someData[i - 5] + someData[i - 6] + someData[i - 7] + someData[i - 8] + someData[i - 9]) / 11.0;
    const meanRound = Math.round((mean + Number.EPSILON) * 100) / 100;
    arrayOut.push(meanRound);
  }
}