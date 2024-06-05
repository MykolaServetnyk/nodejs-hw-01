import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        const updatedContacts = contacts.filter(() => Math.random() > 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error processing contacts:', error);
    }
};

await thanos();
