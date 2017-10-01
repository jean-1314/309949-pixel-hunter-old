const getElementFromTemplate = (string) => {
  let newDiv = document.createElement(`div`);
  newDiv.innerHTML = string;
  return newDiv;
};
