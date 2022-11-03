const dev = ['abc','def','ghi']
 
const { [0]:middleName} = dev
console.log(middleName)

// const address = ['Mumbai','Maha'] 

// const [city,state ,country='India']=address

// console.log(city,state,country)

// let a=10;  let b=20;

// [a,b]=[b,a]
// console.log(a,b)


// const foo = (a,b,c,...arg)=>{
//     console.log(a,b,c,arg)
//   }
  
  
  
//   foo(2,3,5,6,7,8,8,9)



//   const foo = (a,...arg)=>{
//     console.log(a)
//     let sum=0;
//      const result= arg.map((i)=>{
//                 sum+=i
//           if (sum == a) {
//             return true
//           }
//           return false
//       })
//       console.log(result)
//     }
//     const arra =[10,2,3,5]
//     foo(arra)
    