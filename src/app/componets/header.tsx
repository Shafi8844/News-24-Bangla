import Logo from "../../../public/image.png"
import Image from "next/image"
import NavLinks from '../componets/navLinks'
export const Header = () => {

    const date = new Date().toLocaleDateString('bn-BD',{
        dateStyle:"full"
    })

    console.log(date)
  return (
    <header className="mx-auto mx-w-7xl py-4 px-8">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2">
            <Image className="w-10 h-10" src={Logo} alt="logo" height={50} width={50}></Image>
            <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-bold text-red-700">News 24 Bangla</span>
            <span className="text-xs text-neutral-500">{date}</span>
            </div>
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
            <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">সাইন ইন</button>
            <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-700 ">সাইন আপ</button>
        </div>
        <NavLinks></NavLinks>
    </header>
    
    
  )
}
