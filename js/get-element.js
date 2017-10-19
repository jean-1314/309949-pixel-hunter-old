const getElementFromTemplate = (content) => {
  let innerContent = document.createRange().createContextualFragment(content);
  let node = document.createDocumentFragment();
  node.appendChild(innerContent);
  let clone = node.cloneNode(true);
  return clone;
};

export {getElementFromTemplate};
