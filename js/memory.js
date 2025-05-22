// Helper variables/state
let flippedCards = [];
let matchedPairs = 0;
let totalPairs = 0;
let moves = 0;

// UI Elements - will be set by createMemoryGame
let uiMovesCounterElement;
let uiMatchedPairsInfoElement;
let uiWinMessageElement;

/**
 * Creates the memory game board.
 * @param {HTMLElement} gameBoardElement - The HTML DOM element that will host the game board.
 * @param {Array<Object>} items - An array of item objects, each with displayValue and matchId.
 * @param {HTMLElement} movesCounterElement - The HTML element to display the moves count.
 * @param {HTMLElement} matchedPairsInfoElement - The HTML element to display matched pairs info.
 * @param {HTMLElement} winMessageElement - The HTML element to display the win message.
 */
function createMemoryGame(gameBoardElement, items, movesCounterElement, matchedPairsInfoElement, winMessageElement) {
  // Store UI elements
  uiMovesCounterElement = movesCounterElement;
  uiMatchedPairsInfoElement = matchedPairsInfoElement;
  uiWinMessageElement = winMessageElement;

  // Clear any existing content in gameBoardElement
  gameBoardElement.innerHTML = '';
  if (uiWinMessageElement) uiWinMessageElement.style.display = 'none'; // Hide win message initially

  // Reset game state
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  totalPairs = items.length / 2; // Items array already contains pairs

  // Update UI for the start of the game
  if (uiMovesCounterElement) uiMovesCounterElement.textContent = moves;
  updateMatchedPairsInfo();


  // Shuffle the items (Fisher-Yates shuffle algorithm)
  // The 'items' array already contains all cards (problems and solutions as distinct objects)
  let shuffledItems = [...items];
  for (let i = shuffledItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
  }

  // Create card elements
  shuffledItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('memory-card');
    card.dataset.matchId = item.matchId;
    card.dataset.displayValue = item.displayValue; // Store display value for when card is flipped

    // Initially, cards are face down. CSS should handle hiding the displayValue.
    // A common practice is to have a separate element for front/back or use textContent for the '?'
    card.textContent = '?'; // Placeholder for face-down card

    card.addEventListener('click', handleCardClick);
    gameBoardElement.appendChild(card);
  });
}

/**
 * Handles the card click event.
 */
function handleCardClick() {
  // If the card is already flipped or matched, or if two cards are already flipped and waiting, do nothing
  if (this.classList.contains('flipped') || this.classList.contains('matched') || flippedCards.length === 2) {
    return;
  }

  // Flip the card
  this.classList.add('flipped');
  this.textContent = this.dataset.displayValue; // Show card's display value
  flippedCards.push(this);

  // If two cards are flipped, check for a match
  if (flippedCards.length === 2) {
    moves++;
    if (uiMovesCounterElement) uiMovesCounterElement.textContent = moves;

    const [card1, card2] = flippedCards;

    // Check if the two cards form a pair (same matchId) but are not the exact same card element
    if (card1.dataset.matchId === card2.dataset.matchId && card1 !== card2) {
      // Cards match
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedPairs++;
      updateMatchedPairsInfo();
      flippedCards = []; // Reset flipped cards store
      checkWin();
    } else {
      // Cards don't match (or the same card was clicked twice effectively, though the first check should prevent this)
      // After a short delay, flip them back face down
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '?'; // Hide card value
        card2.textContent = '?'; // Hide card value
        flippedCards = []; // Reset flipped cards store
      }, 1000);
    }
  }
}

/**
 * Updates the display for matched pairs.
 */
function updateMatchedPairsInfo() {
  if (uiMatchedPairsInfoElement) {
    uiMatchedPairsInfoElement.textContent = `${matchedPairs} / ${totalPairs}`;
  }
}

/**
 * Checks if all pairs are matched (win condition).
 */
function checkWin() {
  if (matchedPairs === totalPairs) {
    if (uiWinMessageElement) {
      uiWinMessageElement.textContent = `Congratulations! You won in ${moves} moves!`;
      uiWinMessageElement.style.display = 'block';
    } else {
      // Fallback if UI element isn't provided (though it should be)
      console.log(`Congratulations! You won in ${moves} moves!`);
      alert(`Congratulations! You won in ${moves} moves!`);
    }
  }
}

// Example usage (should be called from mathe-memory.html or similar)
// const gameBoard = document.getElementById('memory-board');
// const movesCounter = document.getElementById('moves-counter');
// const matchedInfo = document.getElementById('matched-pairs-info');
// const winMsg = document.getElementById('win-message');
// const gameItems = [
//   { displayValue: "2 + 2", matchId: 1 }, { displayValue: "4", matchId: 1 },
//   { displayValue: "5 x 3", matchId: 2 }, { displayValue: "15", matchId: 2 }
// ];
// if (gameBoard && movesCounter && matchedInfo && winMsg) {
//   createMemoryGame(gameBoard, gameItems, movesCounter, matchedInfo, winMsg);
// } else {
//   console.error("One or more UI elements for the game are missing.");
// }
