function formattedDateForAPI(date) {
  const objectDate = new Date(date);

  const day = objectDate.getDate();

  const month = objectDate.getMonth();

  const year = objectDate.getFullYear();

  const formattedDate = `${year}-${month + 1}-${day}`;
  return formattedDate;
}

export default formattedDateForAPI;
