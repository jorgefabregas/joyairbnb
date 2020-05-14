/*const product = 
{

    fakeDB : [],

    init()
    {
        /*ask how add the images...*/
        /*this.fakeDB.push({title:'Ottawa',description:`Bright, Clean, Private. In the Heart of Downtown!`,details:'6 guests - 2 bedrooms - 3 beds - 1 bath',price:`$130/night`});
    
        this.fakeDB.push({title:'Calgary',description:`2BR Condo 10-15 Min to Dowmtown`,details:'5 guests - 2 bedrooms - 5 beds - 1 bath',price:`$110/night`});
    
        this.fakeDB.push({title:'Toronto',description:`Awesome New Toronto Experience`,details:'5 guests - 2 bedrooms - 4 beds - 1 bath',price:`$120/night`});

        this.fakeDB.push({title:'Vancouver',description:`Amazing!! Full, 2BR+2BA+Parking+AC`,details:'5 guests - 2 bedrooms - 3 beds - 2 baths',price:`$170/night`});

    },
    getAllProducts()
    {
        return this.fakeDB;
    }


}

product.init();
module.exports=product;*/

const product = 
{

        prodDB : [],

        init()
        {
            this.prodDB.push({img:'../img/calgary_homes/calgary_01.png',title:'Calgary', desc:'2BR Condo 10-15 Min to Dowmtown', details:'5 guests - 2 bedrooms - 5 beds - 1 bath', price:`$110/night`});
            this.prodDB.push({img:'../img/ottawa_homes/ottawa_01.png',title:'Ottawa', desc:'Bright, Clean, Private. In the Heart of Downtown!', details:'6 guests - 2 bedrooms - 3 beds - 1 bath', price:`$130/night`});
            this.prodDB.push({img:'../img/toronto_homes/toronto_01.png',title:'Toronto', desc:'Awesome New Toronto Experience', details:'5 guests - 2 bedrooms - 4 beds - 1 bath', price:`$120/night`});
            this.prodDB.push({img:'../img/vancouver_homes/varcouver_01.png',title:'Vancouver', desc:'Amazing!! Full, 2BR+2BA+Parking+AC', details:'5 guests - 2 bedrooms - 3 beds - 2 baths', price:`$170/night`});
        },

        getAllProducts()
        {
            return this.prodDB;
        },


}

product.init();
module.exports = product;