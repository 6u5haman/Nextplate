import PocketBase from 'pocketbase';
import Link from 'next/link';
import Error from './error';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

async function getNote(noteId: string) {
    const db = new PocketBase('http://127.0.0.1:8090')
    const data = await db.collection('notes').getOne(noteId);
    return data
}


export default async function NotePage({children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
    const { id } = await params
    const note = await getNote(id)
    console.log(note)

    return(
        <ErrorBoundary fallback={<Error />}>
            <div>
                <Link href='/'>Home</Link>
                <Link href='/notes'>Notes</Link>
                <h1>Note {note.id}</h1>
                <h1>{note.title}</h1>
                <p>{note.body}</p>
                <p>{note.created}</p>
            </div>
        </ErrorBoundary>
    )
}