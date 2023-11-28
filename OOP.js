//  Objects
//  Initialise address as factory function
function factoryAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    };
};

//  Initialise address with constructor function (requires 'new when called)
function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

const Addy = new factoryAddress('24 franklin street','brisbane','4170');

//  Add property to object
Addy.country = 'Australia'

//  Delete property from object
delete Addy.country;

//  Initialise address with constructor function (requires 'new when called)
//  Only want to show zipCode for privacy
function AbstractionAddress(street,city,zipCode){
    let street = street;
    let city = city;
    let zipCode = zipCode;

    this.getStreet = function(){
        return street
    }
    this.getCity = function(){
        return city
    }
    this.getZipCode = function(){
        return zipCode
    }


    let computeRoute = function(factor){
        //...
    };

    this.draw = function{
        let x, y;
        //  this.street
        computeRoute(0.1);
    };

    //  Users cannot change the values, only view the values
    Object.defineProperty(this,'street',{
        get: function(){
            return street
        },
        set: function(value){
            if (!value.x || !value.y)
            throw new Error('Invalid Name');// Error will appear if name is different to previosly given name
        }
    });
    Object.defineProperty(this,'city',{
        get: function(){
            return city
        }
    });
    Object.defineProperty(this,'zipCode',{
        get: function(){
            return zipCode
        }
    });
};
