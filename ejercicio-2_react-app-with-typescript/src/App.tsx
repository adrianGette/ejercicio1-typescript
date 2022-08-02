import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub, SubsResponseApi } from './types'

interface AppState {
    subs: Array<Sub>
    newSubsNumber: number
}

function App() {

    const [subs, setSubs] = useState<AppState['subs']>([]);
    const [newSbubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchSubs = (): Promise<SubsResponseApi> => {
            return axios
                .get('http://localhost:3000/users')
                .then(response => response.data)
        }

        const mapFromApiToSubs = (apiResponse: SubsResponseApi): Array<Sub> => {
            return apiResponse.map(subFromApi => {
                const {
                    months: subMonths,
                    profileUrl: avatar,
                    nick,
                    description
                } = subFromApi

                return {
                    nick,
                    description,
                    avatar,
                    subMonths
                }
            })
        }
        
        fetchSubs()    
            .then(mapFromApiToSubs)
            .then(setSubs)
    }, [])

    const handleNewSub = (newSub: Sub): void => {
        setSubs(subs => [...subs, newSub])
        setNewSubsNumber(n => n + 1)
    }

    return (
        <div className="App" ref={divRef}>
            <h1>subscribers</h1>
            <List subs={subs} />
            New Subs: {newSbubsNumber}
            <Form onNewSub={handleNewSub} />
        </div>
    );
}

export default App;
