"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useAuthStore from "@/utils/store/authStore";

export default function Header_1() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Add Serial", href: "/scan" },
    { name: "All Serial", href: "/serial" },
  ];

  const { user, initAuth, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = initAuth();
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogout =()=>{
    logout();
    router.push('/login');
  }

  return (
    <header className="border">
      <div className="container flex shrink-0 items-center h-16">
        {/* Logo ========================  */}
        <Link href="/" className="mr-6" prefetch={false}>
          <Logo/>
        </Link>

        {/* Desktop Menu ======================== */}
        <nav className="ml-auto hidden lg:flex gap-2">
          {pages?.map((ele) => (
            <Link
              key={ele.name}
              href={ele.href}
              className="group text-sm inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
            >
              {ele.name}
            </Link>
          ))}

    {
      user?
          <button className="group text-sm inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 bg-gray-300/50" onClick={handleLogout}>Logout</button>
        :
        <div className="flex gap-2 items-center ml-4">
          <Link href={'/register'}>
            <button className="group text-sm inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 bg-gray-300/80">Register</button>
          </Link>

          <Link href={'/login'}>
            <button className="group text-sm inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 bg-gray-300/80">Login</button>
          </Link>


 


        </div>
      }
      
        </nav>

        {/* Mobile Menu ======================== */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {/* Mobile menu Icon  */}
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden ml-auto">
              <MenuIcon/>
            </Button>
          </SheetTrigger>

          {/* Mobile Menu */}
          <SheetContent side="left">
            {/* Menu title */}
            <Link href="#" className="mr-6 lg:flex" prefetch={false}>
              <Logo />
            </Link>

            {/* Menu links */}
            <div className="grid gap-2 py-6">
              {pages?.map((ele) => (
                <Link
                  key={ele.name}
                  href={ele.href}
                  className="flex w-full items-center py-2 font-semibold"
                  prefetch={false}
                >
                  {ele.name}
                </Link>
              ))}
            </div>


                {
      user?
          <button className="group text-sm inline-flex h-9 w-full items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 bg-gray-300/80" onClick={handleLogout}>Logout</button>
        :
        <div className="grid grid-cols-2 gap-2 w-full items-center">
          <Link href={'/register'}>
            <button className="group text-sm inline-flex h-9 w-full items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 bg-gray-300/80">Register</button>
          </Link>

          <Link href={'/login'}>
            <button className="group text-sm inline-flex h-9 w-full items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 bg-gray-300/80">Login</button>
          </Link>
        </div>
      }
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MenuIcon() {
  return (
    <div  className="h-6 w-6" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </div>
  );
}

function Logo() {
  return(
    <div className="">
        <h2 className="text-2xl">Bus Assistant</h2>
    </div>
  )   
}