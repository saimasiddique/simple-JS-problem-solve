function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    const firstBookPages = 100;
    const secondBookPages = 200;
    const thirdBookPages = 300;

    firstBookTotal = firstBookPages * firstBookCopy;
    secondBookTotal = secondBookPages * secondBookCopy;
    thirdBookTotal = thirdBookPages * thirdBookCopy;
    const totalpages = firstBookTotal + secondBookTotal + thirdBookTotal;
    return totalpages;
}
const firstBook = 10;
const secondBook = 20;
const thirdBook = 30;
const totalBookPages = paperRequirements(firstBook, secondBook, thirdBook);
console.log(totalBookPages);