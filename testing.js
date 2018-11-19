var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: count++; break;
    case 7:
    case 8:
    case 9: break;
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    case 10: count--; break;
    default: break;

  }
  return (count > 0) ? `${count} Bet` : `${count} Hold`;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);