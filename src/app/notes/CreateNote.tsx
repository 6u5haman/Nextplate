'use client'
import PocketBase from 'pocketbase';
import { useState } from "react"
import Router from 'next/router';

export default function CreateNote() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const create = async() => {
        const db = new PocketBase('http://127.0.0.1:8090')
        const data = {
            "title": title,
            "body": body
        };
        const record = await db.collection('notes').create(data);
        Router.refresh()
    }

    return (
        <form onSubmit={create}>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /><br />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
            /><br />
            <button type='submit'>
                Create Note
            </button>
        </form>
    )
}