export const gigasecond = (date) => {
  let gigaDate = date;
  gigaDate.setSeconds(gigaDate.getSeconds() + 1000000000);
  return gigaDate;
};
