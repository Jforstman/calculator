function calculator(value1, operator, value2) {
  switch(operator) {
    case('+'):
      result = value1 + value2;
      break;
    case('-'):
      result = value1 - value2;
      break;
    case('*'):
      result = value1 * value2;
      break;
    case('/'):
      result = value1 / value2;
      break;
    default:
      alert('something went wrong');
      break;
  }
  return result;
}
