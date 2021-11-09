import React, {useContext, useEffect} from 'react'
import Form from '../components/Form'
import Loading from '../components/Loading'
import Notes from '../components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div>
            <Form />

            <hr />

            {
            loading ? <Loading /> : <Notes notes={notes} onRemove={removeNote}/>
            }

        </div>
    )
}

export default Home
