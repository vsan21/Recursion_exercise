//Recursive function that converts integer to binary string

function BinaryConverter (num) {
  //Base Case(s)
  if(num < 0) {
    return 'Negatives are not allowed';
  }
  if (num === 0) {
    return 0;
  }

  if(num === 1) {
    return 1;
  }
  //Recursive Case
  let power = Math.floor(Math.log(num)/Math.log(2));
  return Math.pow(10, power) + BinaryConverter(num - Math.pow(2, power));

}

describe ('BinaryConverter', function() {
  it('should return binary position', function() {
    expect(BinaryConverter(5)).toBe(101);
  });
});

describe ('BinaryConverter', function() {
  it('should return binary position', function() {
    expect(BinaryConverter(13)).toBe(1101);
  });
});

describe ('BinaryConverter', function() {
  it('should return binary position', function() {
    expect(BinaryConverter(3)).toBe(11);
  });
});

describe ('BinaryConverter', function() {
  it('should return binary position', function() {
    expect(BinaryConverter(20)).toBe(10100);
  });
});
