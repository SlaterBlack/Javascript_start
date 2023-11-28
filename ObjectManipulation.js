// basic address layout
const address = {
    street: '27 Hollyvale Street',
    city:'Mistatuji',
    zipCode: '1232'
}

//initialise address as factory function
function factoryAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
}

//initialise address with constructor function (requires 'new when called)
function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

//check that Adresses are referencing the same object
function areSame(address1, address2){
    return (address1 === address2) 
}

//check that Adresses are the same value
function areEqual(address1, address2){
    return address1.street === address2.street && 
    address1.city === address2.city && 
    address1.zipCode === address2.zipCode
}

// simply shows address
function showAddress(address){
    for(key in address)
        console.log(key, address[key])
};


// Create a Blog psot that includes:
//  Title
//  Body
//  Author
//  Views
//  Comment (author and body)
//  isLive

let post = {
    title: 'title',
    body: 'Body',
    author: 'author',
    views: 0,
    comments:[{author:'a',body:'b'},{author:'a',body:'b'}],
    isLive: true
};

function Post(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0
    this.comments = []
    this.isLive = false
}

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 11, maxPerPerson: 20},
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 21, maxPerPerson: 50}
];
let restaurants = [
    {averagePerPerson: 5}
]