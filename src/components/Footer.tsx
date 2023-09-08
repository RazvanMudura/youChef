import Link from "next/link"
import Image from "next/image"


export const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-5 gap-10 mt-auto">
      <div className="flex flex-row gap-5 p-8 items-center">
        <Image className='w-32 mr-16' src="/assets/logo.png" alt='imagine logo' width={300} height={300}/>
        <Link href="#" className="text-2xl font-semibold hover:text-gray-400">About Us</Link>
        <Link href="#" className="text-2xl font-semibold hover:text-gray-400">Contact</Link>
        <Link href="#" className="text-2xl font-semibold hover:text-gray-400">FAQ</Link>
        <Link href="#" className="text-2xl font-semibold hover:text-gray-400">Legal Disclosure</Link>
        <Link href="#" className="text-2xl font-semibold hover:text-gray-400">Privacy Policy</Link>
      </div>

      <p>
        Copyright @ 2023 youChef. All rights reserved
      </p>
    </footer>
  )
}