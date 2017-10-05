const getElementFromTemplate = (content) => {
  let innerContent = document.createRange().createContextualFragment(content);
  let node = document.createElement(`section`);
  node.appendChild(innerContent);
  let clone = node.cloneNode(true);
  return clone;
};

export {getElementFromTemplate};
