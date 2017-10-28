const initialState = {
  time: 0,
  lives: 3
};

const initialStubData = [
  {
    "type": `two-of-two`,
    "question": `Угадайте для каждого изображения фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `https://i.pinimg.com/736x/0b/54/b6/0b54b672170e2e701910e0412d728605.jpg`,
          "width": 468,
          "height": 458
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://cdn3-www.webecoist.momtastic.com/assets/uploads/2011/10/creepy-landscapes-apocalypse-van-der-werf.jpg`,
          "width": 468,
          "height": 458
        },
        "type": `painting`
      }
    ]
  },
  {
    "type": `tinder-like`,
    "question": `Угадай, фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/705x455`,
          "width": 705,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `one-of-three`,
    "question": `Найдите рисунок среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `one-of-three`,
    "question": `Найдите фото среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      }
    ]
  }
];

const getGameData = () => initialStubData;

export {initialState, getGameData};
