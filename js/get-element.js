const getElementFromTemplate = (content) => {
  const range = document.createRange();
  range.selectNode(document.body);
  return range.createContextualFragment(content);
};

export {getElementFromTemplate};
