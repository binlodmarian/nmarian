
import { CiFacebook,CiInstagram,CiTwitter  } from "react-icons/ci";

export function Footer() {
    return (
        <footer className="w-full border-t bg-transparent text-center text-sm text-muted-foreground py-3">
            <div className="text-center flex items-center flex-col gap-4">
                <h1 className="font-extrabold text-2xl">Follow me on</h1>
                <div className="flex gap-5  ">
                    <CiFacebook size={40} className="animate-bounce hover:animate-none hover:scale-105 "/>
                    <CiInstagram size={40} className="animate-bounce  hover:animate-none hover:scale-105 "/>
                    <CiTwitter size={40} className="animate-bounce hover:animate-none hover:scale-105 "/>
                </div>
            </div>
            <div className="container mx-auto py-4">
                <p>
                    &copy; {new Date().getFullYear()} Marian. All rights reserved.
                </p>
            </div>
        </footer>
    )
}