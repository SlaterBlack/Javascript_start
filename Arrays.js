 const first = [1,2,3];
 const second = [-4,5,6];
 const joined = [...first, ...second]

 function normalSort(array){
    return array.sort()
 };

 function positiveFilter(array){
    return array.filter(n => n >= 0);
 };

 function negativeFilter(array){
    return array.filter(n => n <= 0);
 };

 function mapArray(array){
    return array.map(n => ({value: n}))
 };

 function sumOfArray(array){
    array.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
    },0)
 };

 //   checks an array for a specific element
 function includes(array,searchElement){
   for (let element of array)
      if (element === searchElement)
         return true
      return false
 };

 function exclude(array, excluded){
   const output = []
   for (let element of array)
      if (!excluded.includes(element))
         output.push(element);
      return output;
 };

 //   Moves an element of an array to a different position
 function moveElement(array, index, offset){
   const position = index + offset;
   if (position >= array.length || position < 0){
      console.log('Invalid Offset');
      return;
   }
   const output = [...array];
   const element = output.splice(index,1)[0];
   output.splice(position + offset, 0, element);
   return output;
 };

 //   checks an array and counts the occurance of a certain element
 function countOccurances(array, searchElement){
   let count = 0;
   for (let element of array)
   if (element === searchElement)
      count ++;
   return count;
 };
//   Alternative way to check an array and count the occurance of a certain element
  function altCountOccurances(array, searchElement){
   return array.reduce((accumulator, current) => {
      const occurance = (current === searchElement) ? 1:0;
      console.log(accumulator, current, searchElement);
      return accumulator + occurance;
   },0);
 };

 //   Obtain the biggest number in an array
 function getMax (array){
   if (array.length === 0) return undefined
   let max = 0;
   for (let number of array){
      if (number > max)
         max = number;
   }
   return max
 }
     
  //   Alternative way to obtain the biggest number in an array
  function altGetMax (array){
   if (array.length === 0) return undefined
   array.reduce((a,b) => (a > b) ? a : b);
 }

 //   Take movies and only show movies with a certain minimum rating whithin a certain year, display only the titles of the filtered movies in reverse rating order
 const movies = [
   {title: 'a', year: 2018, rating: 4.5 },
   {title: 'b', year: 2018, rating: 4.7 },
   {title: 'c', year: 2018, rating: 3},
   {title: 'd', year: 2017, rating: 4.5 },
 ]

 function sortMovies(array,searchYear,searchMinRating){
   array
   .filter(m => m.searchYear === 2018 && m.rating >= searchMinRating)
   .sort((a,b) => a.rating - b.rating)
   .reverse()
   .map(m => m.title)
 };

