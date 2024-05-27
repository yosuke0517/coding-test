import Link from 'next/link';
import {HEADER_HEIGHT} from "@/app/utils/const";

const GlobalHeader = () => {
    return (
        <header className="bg-green-900 p-4 fixed top-0 w-full z-10" style={{height: HEADER_HEIGHT}}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    <Link href="/">My CodingTest</Link>
                </div>
                <nav className="space-x-4">
                    <Link href="#" className="text-white hover:underline">About</Link>
                    <Link href="#" className="text-white hover:underline">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default GlobalHeader;