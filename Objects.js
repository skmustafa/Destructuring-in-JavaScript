




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
// const {city,geo:{lat,lng}} = address
// console.log(city,lat,lng)


const { department:{geo:{ lat:lattitude,lng:longitude}}}=address

console.log(lattitude,longitude)