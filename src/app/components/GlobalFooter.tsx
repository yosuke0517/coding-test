import Link from "next/link";
import {FOOTER_HEIGHT} from "@/app/utils/const";

const GlobalFooter = () => {
    return (
        <footer className="flex items-center bg-green-900 p-4 fixed bottom-0 w-full z-10" style={{height: FOOTER_HEIGHT}}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-sm">
                    &copy; {new Date().getFullYear()} My CodingTest. All rights reserved.
                </div>
                <nav className="space-x-4">
                    <Link href="#" className="text-white hover:underline">Privacy Policy</Link>
                    <Link href="#" className="text-white hover:underline">Terms of Service</Link>
                </nav>
            </div>
        </footer>
    );
}

export default GlobalFooter;