// SETTING UP DEFAULT VALUES FOR THE FUNCTION ARGUMENTS

const increment = function increment(num, val = 1) {
    return num + val;
  };
  
  const numberTest = increment(5, 2);
  const numberTest2 = increment(5);
  console.log(numberTest);
  console.log(numberTest2);
  
  //******************* REST OPERATORS */
  // The rest operators allows us to take VARIABLE number of argments
  
  const sum = (function(){
      return function sum(...args){
          return args.reduce((a,b)=>a+b,0);
      }
  })();
  console.log(sum(1,2,3,4,5));

  //*****USING THE SPREAD OPERATOR */
  // The spread operator can be used to just sprread the contents of an array
 var month = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY'];
  let arr2 = [...month];
  arr2[0] = 'DEC';
  console.log(month);
  console.log(arr2);
  // Here using the spread operator helps in copying the array to avoid the problems of referance