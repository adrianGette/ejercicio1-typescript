"use strict";
// Generics
//type dataType = Person | Product;
class DataCollection {
    constructor() {
        this.items = [];
        // getNames(): string[] {
        //     return this.items.map( ( item ) => item.name );
        // }
        // getItemsById( id: number ): T | undefined {
        //     return this.items.find( ( item: T ) => item.id === id )
        // }
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
}
const personCollection = new DataCollection();
const newData = {
    id: 1,
    name: 'Adrian'
};
personCollection.addItem(newData);
const newData2 = {
    id: 2,
    name: 'Juan'
};
personCollection.addItem(newData2);
const productCollection = new DataCollection();
const newData3 = {
    id: 3,
    name: 'beer',
    price: 100
};
productCollection.addItem(newData3);
personCollection.getItems();
productCollection.getItems();
