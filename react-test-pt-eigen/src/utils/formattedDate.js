function formattedDate(date) {
  const objectDate = new Date(date);

  const day = objectDate.getDate();

  const month = objectDate.getMonth();
  let monthName = '';
  switch (month + 1) {
    case 1:
      monthName = 'Jan';
      break;
    case 2:
      monthName = 'Feb';
      break;
    case 3:
      monthName = 'Mar';
      break;
    case 4:
      monthName = 'Apr';
      break;
    case 5:
      monthName = 'Mei';
      break;
    case 6:
      monthName = 'Jun';
      break;
    case 7:
      monthName = 'Jul';
      break;
    case 8:
      monthName = 'Aug';
      break;
    case 9:
      monthName = 'Sep';
      break;
    case 10:
      monthName = 'Oct';
      break;
    case 11:
      monthName = 'Nov';
      break;
    case 12:
      monthName = 'Dec';
      break;
    default:
      break;
  }

  const year = objectDate.getFullYear();

  const formattedDate = `${day}-${monthName}-${year}`;
  return formattedDate;
}

export default formattedDate;
