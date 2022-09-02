// https://www.omnicalculator.com/finance/nopat

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const NOPATRadio = document.getElementById('NOPATRadio');
const operatingprofitRadio = document.getElementById('operatingprofitRadio');
const taxrateRadio = document.getElementById('taxrateRadio');

let NOPAT;
let operatingprofit = v1;
let taxrate = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

NOPATRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating profit';
  variable2.textContent = 'Tax rate';
  operatingprofit = v1;
  taxrate = v2;
  result.textContent = '';
});

operatingprofitRadio.addEventListener('click', function() {
  variable1.textContent = 'NOPAT';
  variable2.textContent = 'Tax rate';
  NOPAT = v1;
  taxrate = v2;
  result.textContent = '';
});

taxrateRadio.addEventListener('click', function() {
  variable1.textContent = 'NOPAT';
  variable2.textContent = 'Operating profit';
  NOPAT = v1;
  operatingprofit = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(NOPATRadio.checked)
    result.textContent = `NOPAT = ${computeNOPAT().toFixed(2)}`;

  else if(operatingprofitRadio.checked)
    result.textContent = `Operating profit = ${computeoperatingprofit().toFixed(2)}`;

  else if(taxrateRadio.checked)
    result.textContent = `Tax rate = ${computetaxrate().toFixed(2)}`;
})

// calculation

// NOPAT = operating income * (1 – tax rate)

function computeNOPAT() {
  return Number(operatingprofit.value) * (1 - (Number(taxrate.value) / 100));
}

function computeoperatingprofit() {
  return Number(NOPAT.value) / (1 - (Number(taxrate.value) / 100));
}

function computetaxrate() {
  return (1 - (Number(NOPAT.value) / Number(operatingprofit.value))) * 100;
}