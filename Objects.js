




const address = {
        id:1,
        street:'Kulas Ligt',
        city: 'Gwenborough',
        zipcode:'92998-3874',
        department:{
            id:1,
            name:'Accounts',
            geo:{
                lat:-37.3159,
                lng:81.14969
            }
        }
}
const {city, geo:{ lat, lng }} = address
console.log(city,lat,lng)


// const { department:{geo:{ lat:lattitude,lng:longitude}}}=address

// console.log(lattitude,longitude)



//  Nested Array

// const post = {
//     id: 1,
//     title: 'Voluptate occaecat',
//     body: 'Elit eu ullamco sit elit magna id incididunt culpa.',
//     comments: [
//         {
//             id: 1,
//             body: 'Incididunt elit magna ipsum adipisicing nisi eu.'
//         },
//         {
//             id: 2,
//             body: 'Et voluptate occaecat esse esse nisi eu ullamco duis nisi sint aliquip.'
//         },
//         {
//             id: 3,
//             body: 'Deserunt ullamco aliquip veniam quis duis sunt.'
//         },
//     ]
// }

// const { title, comments } = post

// console.log(title, comments)




// Nested Destructed Array
// const post = {
//     id: 1,
//     title: 'Voluptate occaecat',
//     body: 'Elit eu ullamco sit elit magna id incididunt culpa.',
//     comments: [
//         {
//             id: 1,
//             body: 'Incididunt elit magna ipsum adipisicing nisi eu.'
//         },
//         {
//             id: 2,
//             body: 'Et voluptate occaecat esse esse nisi eu ullamco duis nisi sint aliquip.'
//         },
//         {
//             id: 3,
//             body: 'Deserunt ullamco aliquip veniam quis duis sunt.'
//         },
//     ]
// }

// const { title, comments: [comment1, comment2] } = post
// console.log(title, comment1.body, comment2.body)


//  returning objects from function
// const getProduct = () => ({
//     id: 1,
//     name: 'Wildcraft Bag',
//     price: 1200,
//     color: 'Red'
// })
// const { id, price, color } = getProduct()
// console.log(id, price, color)


// passing objects to function
// const setProduct = ({ id, name, price, color }) => console.log('Stored:', id, name, price, color)
// const product = {
//     id: 1,
//     name: 'Woodland Shoes',
//     price: 3000,
//     color: 'Brown'
// }
// setProduct(product)


// With Rest Parameter
// const employee = {
//     id: 1,
//     name: 'Allen Green',
//     job: 'Clerk',
//     salary: 1200
// }
// const { id, name, ...others } = employee
// console.log(id, name, others)   // 1 Allen Green { job: 'Clerk', salary: 1200 }


// Spread Operator
// const employee = {
//     id: 1,
//     name: 'Allen Green',
//     job: 'Clerk',
//     salary: 1200,
//     department: {
//         id: 1,
//         name: 'Accounts'
//     }
// }
// const { name, department: { ...department } } = employee
// console.log(employee.department === department)     // false
