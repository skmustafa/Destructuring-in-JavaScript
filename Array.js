
// Basic One
// const wizard = ['Harry','Potter']
// const [firstName,lastName] = wizard
// console.log(firstName,lastName)

// Skipping Values
// const wizard = ['Harry', 'James', 'Potter']
// const [firstName, ,lastName] = wizard
// console.log(firstName,lastName)

// Index Position Values
// const developer = ['Rajneesh', 'Mithilesh','Chaubey']
// const { [1]: middlename } = developer
// console.log(middlename)


// Default Values

// const address =  ['Pittsburgh','Pennsylvania']
// const [city,state,country = 'US'] = address
// console.log(city,country,state)
// Here, we are making the default value of the country variable to US, since our address array don't have any country by default the country will be US.

// Swapping Values
//  let a = 10, b = 20;
// [ a, b] = [b, a]
// console.log(a,b)  


// Returning Value From Function

// const getLocation = () => [18.43212,72.87211]
// const [lat,lng] = getLocation()
// console.log(lat,lng)

// // with spread operator
// const languages = ['javascript','c++','python','c#','java','c']
// const[lang1,lang2,...others] = languages
// console.log(lang1,lang2,others)

// const dev = ['abc','def','ghi']
 
// const { [0]:middleName} = dev
// console.log(middleName)

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
    
