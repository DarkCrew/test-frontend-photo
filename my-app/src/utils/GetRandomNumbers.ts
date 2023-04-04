const getRandomNumbers = (amount: number, min: number, max: number): number[] => {
  const randomNumbersArray: number[] = [];
  for (let i = 0; i < amount; i += 1) {
    const newNumber = Math.floor(min + Math.random() * (max + 1 - min));
    if (randomNumbersArray.includes(newNumber)) {
      i -= 1;
    } else {
      randomNumbersArray.push(newNumber);
    }
  }
  return randomNumbersArray;
};

export default getRandomNumbers;
