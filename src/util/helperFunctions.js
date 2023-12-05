export function numberFormatter(number) {
  const numStr = number.toString();
  const numArray = numStr.split("");
  const len = numArray.length;

  let formattedNum = "";
  let count = 0;

  for (let i = len - 1; i >= 0; i--) {
    count++;
    formattedNum = numArray[i] + formattedNum;

    if (count === 3 && i) {
      formattedNum = "." + formattedNum;
      count = 0;
    }
  }

  return formattedNum;
}
