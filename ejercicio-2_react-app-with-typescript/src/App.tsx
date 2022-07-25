import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

interface Sub {
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
}

interface AppState {
    subs: Array<Sub>
}

const INITIAL_STATE = [
    {
        nick: 'Bitcoin',
        subMonths: 3,
        avatar: 'https://i.pravatar.cc/150?u=Bitcoin',
        description: 'Moderador'
    },
    {
        nick: 'Eth',
        subMonths: 3,
        avatar: 'https://i.pravatar.cc/150?u=Eth',
        // description: 'Moderador'
    }
]

function App() {

    const [subs, setSubs] = useState<AppState['subs']>([]);

    useEffect(() => {
        setSubs(INITIAL_STATE);
    }, [])

    return (
        <div className="App">
            <h1>Subscriptors</h1>
            <List subs={subs} />
            <Form />
        </div>
    );
}

export default App;
