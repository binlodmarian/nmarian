import Image from "next/image"

export function MyImage() {
    return (
        <div className="relative aspect-square w-80 items-center flex justify-center flex-1 shadow-2xl border-2 border-primary rounded-xl hover:shadow-2xl transition-all duration-700 hover:shadow-primary/50">
            <Image
                src="/profilepicture.png"
                alt="my profile"
                loading="eager"
                fill
                className="object-cover rounded-lg transition-all duration-700 ease-out hover:scale-105 hover:brightness-110 filter"
            />
        </div>
    );
}