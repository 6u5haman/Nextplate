import Link from 'next/link';
import PocketBase from 'pocketbase';
import CreateNote from './CreateNote';

// cashing params ->
// export const dynamic = 'auto',
//             dynamicParams = true,
//             revalidate = 0,
//             fetchCache = 'auto',
//             runtime = 'nodejs',
//             preferredRegion = 'auto'

async function getNotes() {
    // const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records', 
    //     { cache: 'no-store' }
    // )
    // const data = await res.json();
    const db = new PocketBase('http://127.0.0.1:8090')
    const data = await db.collection('notes').getList()
    console.log(data)
    return data.items
}


export default async function Notes() {
    const notes = await getNotes()
    return (
    <div className='note'>      
        <Link href='/'>Home</Link>
        <Link href='/notes'>Notes</Link>
        <hr />
        <h1>Notes</h1>
        {notes?.map((note) => {
            return <Note key={note.id} note={note} />
        })}
        <hr />
        <CreateNote />
    </div>
  );
}


function Note({ note }: any) {
    const { id, title, body, created } = note;
    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{body}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}