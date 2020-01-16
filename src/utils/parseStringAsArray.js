
const parseStringAsArray = arrayAsString => {
  return arrayAsString.split(',').map(tech => tech.trim());
};

export default parseStringAsArray;