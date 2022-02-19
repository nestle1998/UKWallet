import React, {useState} from 'react';
import {ContactsCollection} from '../api/ContactsCollection'

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const saveContact = () => {
        console.log({name, email, imageUrl});
        ContactsCollection.insert({name, email, imageUrl});
        setImageUrl("");
        setEmail("");
        setName("");
    }

    return (
        <form>
            <div>
                <label htmlFor="name">
                    Name
                </label>
                <input value={name} id="name" type="text" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input value={email} id="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="imageUrl">
                    Image URL
                </label>
                <input value={imageUrl} id="imageUrl" type="text" onChange={(e) => setImageUrl(e.target.value)}/>
            </div>
            <div>
                <button type="button" onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}