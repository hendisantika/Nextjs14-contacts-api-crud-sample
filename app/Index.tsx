import React, {useEffect, useState} from 'react';

const Index = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('/api/read')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);

    return (
        <ul>
            {contacts.map(product => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    );
};

export default Index;
