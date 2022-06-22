const numberDraw = () => {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  console.log(numberDraw());

const bet = (1 === numberDraw()) ? `Congratulations, you have won!` : `Try again next time`;
console.log (bet);