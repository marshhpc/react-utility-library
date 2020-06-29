const safelyParseJSON = (str) => {
  try {
    JSON.parse(str);
  } catch (err) {
    return str;
  }
  return JSON.parse(str);
};

// const isArray = (value) => {

// }

const isObject = (value) => {
  return (
    typeof value === "object" &&
    value !== null &&
    Array.isArray(value) === false
  );
};

const convertDataType = (str) => {
  if (str === "null") return null;
  if (str === "undefined") return undefined;
  if (str === "true") return true;
  if (str === "false") return false;
  // eslint-disable-next-line
  if (str == Number(str)) return Number(str);
  const parsedJson = safelyParseJSON(str);
  if (Array.isArray(parsedJson)) return parsedJson;
  if (isObject(parsedJson)) return parsedJson;
  return str;
};

export { isObject, convertDataType, safelyParseJSON };
