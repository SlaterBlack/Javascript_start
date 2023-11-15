function sum(...args){
   return args.reduce((a,b) => a + b)
};

function shoppingCart(discount, ...prices){
    const total = prices.reduce((a,b) => a + b);
    return total * (1- discount);
 };

 const video = {
   title: 'a', 
   tags: ['a','b','c'],
   showtags(){
      this.tags.forEach(tag => {
         console.log(this.title, tag);
      });
   }
 };

 function sumOfArray(...items){
   if (items.length === 1 && Array.isArray(items[0]))
      items = [...items[0]];
   return items.reduce((a,b) => (a + b));
 };

 function calcAreaOfCircle(radius){
   return Math.PI * radius * radius
 };
try {
   const  number = [1,2,3,4];
   const count = countOccurances(null, 1);
   console.log(count)
}
catch (e){
   console.log(e.message)
}
 function countOccurances(array, searchElement){
   if(!Array.isArray(array))
      throw new console.error('Invalid array');
   return array.reduce((accumulator, current)=> {
      const occurance = (current === searchElement) ? 1 : 0;
      return accumulator + occurance;
   }, 0);
 }
