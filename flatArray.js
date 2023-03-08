// const example = [1, [2, [3, [4, 5]]]];

function flatArray(arr) {
  let values = [];
  arr.forEach((el) => {
    // Is not an array
    if(!Array.isArray(el)){
      if(typeof el !== 'number'){
        throw new Error('Array should contain numbers only');
      }
      values.push(el);
    }
    else {
      const flattedArray = flatArray(el); // Flat array
      values = values.concat(flattedArray); // Concat with current value
    }
  });
  return values;
}

// console.log(flatArray(example));

module.exports = flatArray