let count = 0;
function countCards(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case "K":
        case "J":
        case "Q":
        case "A":
        case 10:
            count--;
            break;
        default:
            break;
    }
    var holdbet = count>0?'Bet':'Hold'
    return count + " " + holdbet;
}

countCards(2);
countCards('K');
countCards(7);
countCards('A');
countCards(2);
countCards(10);
countCards(4);

console.log(countCards(2));