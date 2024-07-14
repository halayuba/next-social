import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import paths from "@/lib/paths"
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import icons from "@/lib/icons"

interface NavbarProps {}

export default function Navbar() {
  return (
    <div className='h-24 flex justify-between items-center'>
      {/* ===== LEFT ===== */}
      <div className='md:hidden lg:block md:w-[20%]'>
        <Link href='/' className='flex justify-center  items-center gap-2'>
          <Image
            src={paths.logo()}
            alt='Logo'
            width={73}
            height={63}
            priority={true}
          />
          <span className='tracking-tight sm:tracking-normal text-blue-600 font-bold text-xl'>
            Social
          </span>
        </Link>
      </div>
      {/* ===== CENTER ===== */}
      <div className='hidden md:flex gap-6 text-gray-600 w-[50%] text-sm'>
        {/* ===== NAV LINKS ===== */}
        <NavLinks />
        <SearchInput />
      </div>
      {/* ===== RIGHT ===== */}
      <div className='w-[30%] flex justify-end items-center gap-4 xl:gap-8'>
        <ClerkLoading>
          <div
            className='animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500'
            role='status'
            aria-label='loading'
          >
            <span className='sr-only'>Loading...</span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          {/* ===== NOT AUTHENTICATED ===== */}
          <SignedIn>
            <SignedInIcons />
          </SignedIn>
          {/* ===== NOT AUTHENTICATED ===== */}
          <SignedOut>
            <SignedOutIcon />
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

function NavLinks() {
  return (
    <>
      <Link href='/' className='flex items-center gap-2'>
        <Image
          src={icons.home()}
          alt='Home'
          width={16}
          height={16}
          className='size-5'
        />
        <span>Home</span>
      </Link>
      <Link href='/' className='flex items-center gap-2'>
        <Image
          src={icons.friends()}
          alt='Friends'
          width={16}
          height={16}
          className='size-5'
        />
        <span>Friends</span>
      </Link>
      <Link href='/' className='flex items-center gap-2'>
        <Image
          src={icons.stories()}
          alt='Stories'
          width={16}
          height={16}
          className='size-5'
        />
        <span>Stories</span>
      </Link>
    </>
  )
}

function SignedInIcons() {
  return (
    <>
      <div className='cursor-pointer'>
        <Image
          src={icons.people()}
          alt='Signed in'
          width={24}
          height={24}
          className='size-7'
        />
      </div>
      <div className='cursor-pointer'>
        <Image
          src={icons.messages()}
          alt='Signed in'
          width={20}
          height={20}
          className='size-5'
        />
      </div>
      <div className='cursor-pointer'>
        <Image
          src={icons.notifications()}
          alt='Signed in'
          width={20}
          height={20}
          className='size-5'
        />
      </div>
      <UserButton />
    </>
  )
}

function SignedOutIcon() {
  return (
    <div className='flex items-center gap-2 text-sm'>
      <Image
        src={icons.login()}
        alt=''
        width={20}
        height={20}
        className='size-6'
      />
      <Link href='/sign-in'>Login/Register</Link>
    </div>
  )
}

function SearchInput() {
  return (
    <div className='hidden relative ml-auto xl:flex xl:grow-0 items-center'>
      <Image
        src={icons.search()}
        alt=''
        width={20}
        height={20}
        className='size-6 absolute left-2.5 h-4 w-4 text-muted-foreground'
      />
      <input
        type='search'
        placeholder='Search...'
        className='w-full rounded-lg bg-blue-50 pl-8 md:w-[200px] lg:w-[336px] h-8 outline-none'
      />
    </div>
  )
}
