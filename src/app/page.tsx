import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  return (
    <div>      
        <Link href='/'>Home</Link>
        <Link href='/notes'>Notes</Link>
        <h1>Homepage</h1>
    </div>
  );
}
