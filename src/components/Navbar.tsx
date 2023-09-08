"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"


export const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className='bg-white w-full'>
            <section className='container mx-auto flex items-center justify-between p-2'>
                <Image className='w-32' src="/assets/logo.png" alt='imagine logo' width={300} height={300}/>
                <section className='flex justify-between gap-4'>
                    { pathname != '/' && ( <Link href="/">Home</Link> )}
                    <Link className='hover:text-main' href="/enter-the-community">Enter the community</Link>
                    <Link className='hover:text-main' href="/contact">Contact</Link>
                    <section className='ml-4 flex items-center'>
                        <Link href={"https://facebook.com"}>
                            <Image className='w-8 h-8' src={"/assets/Facebook.png"} alt='imagine facebook' width={100} height={100}/>
                        </Link>
                        <Link href={"https://instagram.com"}>
                            <Image className='w-8 h-8' src={"/assets/Instagram.png"} alt='imagine facebook' width={100} height={100}/>
                        </Link>
                        <Link href={"https://twitter.com"}>
                            <Image className='w-8 h-8' src={"/assets/Twitter.png"} alt='imagine facebook' width={100} height={100}/>
                        </Link>
                    </section>
                </section>
            </section>
        </nav>
    )
}