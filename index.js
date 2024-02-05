const findLongestWord = (arr) => {
  if (arr.length === 0) {
      return null; // Возвращаем null если массив пустой
  }

  let longestWord = arr[0]; // Предполагаем что самая длинная строка - это первая строка в массиве

  for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
          longestWord = arr[i]; // Если текущая строка длиннее, чем самая длинная - обновляем самую длинную строку
      }
  }

  return longestWord;
}

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

const sumUniqueNumbers = (numbers) => {
  // Создаем объект для отслеживания уникальных чисел и их частоты
  const frequencyCounter = {};

  // Перебираем массив чисел и записываем в объект frequencyCounter частоту каждого числа
  for (const num of numbers) {
      frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  let sum = 0;

  // Перебираем объект frequencyCounter и добавляем к сумме только уникальные числа
  for (const num in frequencyCounter) {
      if (frequencyCounter[num] === 1) {
          sum += parseInt(num); // Преобразуем строку в число и добавляем в сумму
      }
  }

  return sum;
}

// Судя по всему тесты в самом задании неправильные. Ответы будут другими
console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 10
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 30
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -5

const mergeArrays = (arrays) => {
  const mergedArray = [];

  // Обходим каждый переданный массив
  for (const array of arrays) {
      // Для каждого элемента в массиве проверяем, есть ли он уже в mergedArray
      for (const item of arrays) {
          if (!mergedArray.includes(item)) {
              mergedArray.push(item); // Если элемента нет в mergedArray, добавляем его
          }
      }
  }

  return mergedArray;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

const hasProperty = (obj, propertyName) => {
  // Проверяем, существует ли свойство в объекте
  return obj.hasOwnProperty(propertyName);
}

console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true

const getPropertyValue = (obj, propertyName) => {
  // Проверяем, существует ли свойство в объекте
  if (obj.hasOwnProperty(propertyName)) {
      // Если свойство существует, возвращаем его значение
      return obj[propertyName];
  } else {
      // Если свойство отсутствует, возвращаем undefined
      return undefined;
  }
}

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell"
