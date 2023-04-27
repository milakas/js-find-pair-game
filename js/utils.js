export const fyShuffle = (arr) => {
  let i = arr.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
  }
  return arr;
};

export const duplicateArray = (array) =>
  array.reduce((res, current) => res.concat([current, current]), []);

export const createItemsArray = (initialCount) => {
  const cardsIcons = [
    'hippo',
    'horse',
    'dove',
    'cow',
    'frog',
    'fish-fins',
    'dove',
    'dog',
  ];

  switch (initialCount) {
    case 10:
      return cardsIcons.slice(0, 5);
    case 12:
      return cardsIcons.slice(0, 6);
    case 14:
      return cardsIcons.slice(0, 7);
    case 16:
      return cardsIcons;
    default:
      break;
  }
};
