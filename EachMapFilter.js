//DOUBLE VALUE (for, for of and forEach)

// classic for loop

function doubleValues (arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i] * 2)    
    }
     return newArray;
}

// for of loop

function dValues (a){
    let n = [];
    for(let i of a){
    n.push(a[i-1] * 2)    
    }
     return n;
}

// FOR EACH!

function doubleValue (arr){
  let newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2) 
     
      })
  return newArr;
   
  }





//ONLY EVEN VALUES (for, for of and forEach)
  
//classic for and if loop

function onlyEvenValues (arr){
    let newA = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
         newA.push(arr[i])   
        }        
    }
    return newA;
} 

// for of and if

function onlyEvenV (a){
    let e = [];
    for(let i of a){
        if(a[i] % 2 === 0){
        e.push(a[i])    
       }
     }
     return e;
    }

//FOR EACH!!

function onlyEvenValue (arr){
    let newAr = [];
    
      arr.forEach(function(val){
        if(val % 2 === 0){
          newAr.push(val) }
       
        });
    return newAr;
     
    }


//showFirstAndLast accepts array of strings and returns a new array of strings and first and last character of ech string

function sFaL (arr){
  let s = [];

  for (let i = 0; i < s.length; i++){
   s.push(arr[i])
 
  }
  return s;
}

// need correction here

function showFirstAndLast (arr){
  let sArr = [];

  arr.forEach(function(val){
   
    sArr.push(val)
   
  } );
  return sArr;
}

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function(val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function(letter) {
    let lowerCasedLetter = letter.toLowerCase()
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

// map

function doubleValuesWithMap(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function(val, idx) {
    return val * idx;
  });
}

function extractKey(arr, key) {
  return arr.map(function(val) {
    return val[key];
  });
}

function extractFullName(arr) {
  return arr.map(function(val) {
    return val.first + " " + val.last;
  });
}

// filter

function filterByValue(arr, key) {
  return arr.filter(function(val) {
    return val[key] !== undefined;
  });
}

function find(arr, searchValue) {
  return arr.filter(function(val) {
    return val === searchValue;
  })[0];
}

function findInObj(arr, key, searchValue) {
  return arr.filter(function(val) {
    return val[key] === searchValue;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
  }
    
