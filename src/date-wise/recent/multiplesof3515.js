/**
 * print fire at multiples of 3 
 * print buzz at multiples of 5
 * print firebuzz at the multiples of 15
 */

 let map = {
     3 :'fire',
     5:'buzz',
     15:'firebuzz'
 }

 function printTerms(){
     for(let i=1 ;i<=100;i++){
         if(i % 15 == 0){
             console.log(`${i}.. `,map[15]);
         }else if(i %5 == 0){
             console.log(`${i}.. `, map[5]);
         }else if(i %3 ==0){
             console.log(`${i}.. `, map[3]);
         }
     }
 }

 printTerms();