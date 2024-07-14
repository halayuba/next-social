import icons from "@/lib/icons"
import Image from "next/image"

interface PostProps {}

export default function Post() {
  return (
    <div className='flex flex-col gap-4'>
      {/* ===== USER ===== */}
      <div className='flex justify-between items-center'>
        {/* ===== AVATAR ===== */}
        <div className='flex items-center gap-2 '>
          <Image
            src='https://images.pexels.com/photos/3670580/pexels-photo-3670580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Avatar'
            width={40}
            height={40}
            className='size-10 object-cover rounded-full'
          />
          <span className='font-medium text-gray-700'>Taybe Mansoor</span>
        </div>
        <Image
          src={icons.more()}
          alt='More icon'
          width={16}
          height={16}
          className='size-10'
        />
      </div>
      {/* ===== DESCRIPTION ===== */}
      <div className='flex flex-col  gap-4'>
        <div className='w-full min-h-96 relative'>
          <Image
            src='https://images.pexels.com/photos/26976251/pexels-photo-26976251/free-photo-of-a-restaurant-with-flowers-in-front-of-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='image'
            fill
            className='object-cover rounded-md'
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos
          quos temporibus doloremque ut eveniet tempora commodi, suscipit
          placeat iste fugiat quis. Suscipit corrupti modi architecto porro
          voluptas sit quasi.
        </p>
      </div>
      {/* ===== INTERACTION ===== */}
      <div className='flex justify-between items-center text-sm mt-4'>
        <div className='flex gap-8'>
          <div className='flex items-center gap-4 rounded-xl bg-slate-50 p-2'>
            <Image
              src={icons.like()}
              alt='Like'
              width={16}
              height={16}
              className='size-6 cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              47
              <span className='hidden md:inline'> Likes</span>
            </span>
          </div>
          <div className='flex items-center gap-4 rounded-xl bg-slate-50 p-2'>
            <Image
              src={icons.comment()}
              alt='Comment'
              width={16}
              height={16}
              className='size-6 cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              14
              <span className='hidden md:inline'> Comments</span>
            </span>
          </div>
          <div className='flex items-center gap-4 rounded-xl bg-slate-50 p-2'>
            <Image
              src={icons.share()}
              alt='Share'
              width={16}
              height={16}
              className='size-6 cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              22
              <span className='hidden md:inline'> Shares</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
