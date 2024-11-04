let secretMessage = ['Learning', 'is', 'not', 'about', 'what',
  'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 
  'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 
  'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Use an array method to remove the last string of the array
--secretMessage.length;

// add the words to and Program as separate strings to the end of the secretMessage array
secretMessage.push('to');
secretMessage.push('program');

// Change the word easily to the word right by accessing the index and replacing it
secretMessage[secretMessage.findIndex(e => e === 'easily')] = 'right';

// Use an array method to remove the first string of the array
secretMessage.shift();

// Use an array method to add the string Programming to the beginning of the array
secretMessage.unshift('Programming');

// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know
function remove(arr, string) {
  const newArray = arr.filter((element) => element !== string);
  return newArray;
};

// array of strings to be removed from array
const toBeRemoved = ['get', 'right', 'the', 'first', 'time,'];

// iterate over the array using an array, remove the elements
function iterate(arrToChange, toBeRemoved) {
let newArray = arrToChange;

if (toBeRemoved.length > 0) {
  newArray = remove(arrToChange, toBeRemoved[0]);
  toBeRemoved.shift();
  return iterate(newArray, toBeRemoved);
  }
return newArray;
}

// remove element and replace with another
secretMessage[secretMessage.findIndex(e => e === 'you') + 1] = 'know,'

secretMessage = iterate(secretMessage, toBeRemoved);

const message = secretMessage.join(" ");

console.log(message);

