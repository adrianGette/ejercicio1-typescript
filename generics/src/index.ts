
// Generics
interface Person {
    id: number;
    name: string;
}

interface Employee extends Person {
    role: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Data<T> {
    addItem( newItem: T ): void;
}

class DataCollection<T extends { id: number, name: string }> implements Data<T> {
    private items: T[] = [];

    addItem( newItem: T ): void {
        this.items.push( newItem );
    }

    getItems(): void {
        console.log(`List of items`, JSON.stringify( this.items ));
    }

    getNames(): string[] {
        return this.items.map( ( item ) => item.name );
    }

    getItemsById( id: number ): T | undefined {
        return this.items.find( ( item: T ) => item.id === id )
    }
}


const personCollection = new DataCollection<Person>();

const newData = {
    id: 1,
    name: 'Adrian'
}
personCollection.addItem(newData);

const newData2 = {
    id: 2,
    name: 'Juan'
}
personCollection.addItem(newData2);

const productCollection = new DataCollection<Product>();
const newData3 = {
    id: 3,
    name: 'beer',
    price: 100
}
productCollection.addItem(newData3);

personCollection.getItems();
productCollection.getItems();
