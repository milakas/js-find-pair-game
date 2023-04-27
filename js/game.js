import { createGameCard } from './card.js';
import { createGameMenu } from './menu.js';
import { createItemsArray, duplicateArray, fyShuffle } from './utils.js';

export const startGame = (difficult) => {
  let firstCard = null;
  let secondCard = null;
  let clickable = true;

  const gameSection = document.querySelector('.game-section__container');
  const gameTable = document.createElement('div');
  const cardsIcons = createItemsArray(difficult);
  const duplicatedCardsItems = duplicateArray(cardsIcons);
  const restartBtn = document.createElement('button');

  gameSection.innerHTML = '';
  restartBtn.textContent = 'Рестарт';
  gameTable.classList.add('game-table');
  restartBtn.classList.add('restart-btn');

  fyShuffle(duplicatedCardsItems);

  duplicatedCardsItems.forEach((icon) =>
    gameTable.append(createGameCard('question-circle', icon))
  );

  gameSection.append(gameTable, restartBtn);
  const cards = document.querySelectorAll('.game-card');
  restartBtn.onclick = () => createGameMenu();
  cards.forEach(
    (card, index) =>
      (card.onclick = () => {
        if (clickable == true && !card.classList.contains('successfully')) {
          card.classList.add('flip');

          if (firstCard == null) {
            firstCard = index;
          } else {
            if (index != firstCard) {
              secondCard = index;
              clickable = false;
            }
          }

          if (
            firstCard != null &&
            secondCard != null &&
            firstCard != secondCard
          ) {
            if (
              cards[firstCard].firstElementChild.className ===
              cards[secondCard].firstElementChild.className
            ) {
              setTimeout(() => {
                cards[firstCard].classList.add('successfully');
                cards[secondCard].classList.add('successfully');

                firstCard = null;
                secondCard = null;
                clickable = true;
              }, 500);
            } else {
              setTimeout(() => {
                cards[firstCard].classList.remove('flip');
                cards[secondCard].classList.remove('flip');

                firstCard = null;
                secondCard = null;
                clickable = true;
              }, 500);
            }
          }
          if (
            Array.from(cards).every((card) =>
              card.className.includes('successfully')
            )
          ) {
            document.querySelector('confetti').innerHTML = confetti();
          }
        }
      })
  );
};
