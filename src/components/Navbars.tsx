import Image from 'next/image';
import Link from 'next/link';

export function DashboardNavbar() {
   return (
      <nav className="bg-zinc-900 py-2 px-5 border-b border-zinc-800">
         <div className="flex items-center justify-between">
            <div className="flex items-center">
               {/* Logo */}
               <Link href="/">
                  <Image
                     src="/logo.png"
                     alt="Logo"
                     width={32}
                     height={32}
                  />
               </Link>
            </div>

            <div className="flex items-center">
               <a href="/dashboard" className="text-white hover:text-gray-300 mr-4">Dashboard</a>
               <a href="/domains" className="text-white hover:text-gray-300 mr-4">Domains</a>
               <a href="/websites" className="text-white hover:text-gray-300 mr-4">Websites</a>
               <a href="/help" className="text-white hover:text-gray-300 mr-4">Help</a>
               <a href="/account-settings" className="text-white hover:text-gray-300 mr-4">Account Settings</a>
               <div className="rounded-full overflow-hidden bg-white p-1">
                  <Image
                     src={"/profile.png"}
                     alt="Profile"
                     width={32}
                     height={32}
                  />
               </div>
            </div>
         </div>
      </nav>
   );
}

export function HomeNavbar() {
   return (
      <nav className="bg-zinc-900 py-2 px-5 border-b border-zinc-800">
         <div className="flex items-center justify-between">
            <div className="flex items-center">
               {/* Logo */}
               <Link href="/">
                  <Image
                     src="/logo.png"
                     alt="Logo"
                     width={32}
                     height={32}
                  />
               </Link>
            </div>


            <div className="flex items-center">
               <a href="/" className="text-white hover:text-gray-300 mr-4">Home</a>
               <a href="/about" className="text-white hover:text-gray-300 mr-4">About</a>
               <a href="/contact" className="text-white hover:text-gray-300 mr-4">Contact</a>
               <a href="/login" className="text-white hover:text-gray-300 mr-4">Login</a>
               <a href="/register" className="text-white hover:text-gray-300 mr-4">Register</a>
            </div>
         </div>
      </nav>
   );
}
