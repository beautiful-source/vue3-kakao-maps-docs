export const isValidNumber = (value: string) => {
  const nullAndNumberRegExp = /^[0-9\s]*(\.[0-9\s]*)?$/;
  return nullAndNumberRegExp.test(value);
};
