let getRandomInRange = (min, max) => Math.round(Math.random() * (max - min) + min)

let selectRandomOption = (selectElemSelector) => {
  let selectElem = document.querySelector(selectElemSelector);
  let options = selectElem.querySelectorAll('option');
  selectElem.value = options[getRandomInRange(1, options.length)].value;
  selectElem.dispatchEvent(new Event('change'));
}
