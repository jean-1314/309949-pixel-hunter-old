const showScreen = (newScreen, oldScreen) => {
  let template = newScreen;
  const clone = template.cloneNode(true);
  const templateContent = getTemplate(clone.content);
  mainScreen.replaceChild(templateContent[0], oldScreen);
};
