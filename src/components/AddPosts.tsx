import Image from "next/image"

interface AddPostsProps {}

export default function AddPosts() {
  return (
    <div className='bg-white py-6 px-4 shadow-md rounded-lg flex justify-between gap-4 text-sm'>
      {/* ===== AVATAR ===== */}
      <Image
        src='https://images.pexels.com/photos/2960752/pexels-photo-2960752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Pic'
        width={48}
        height={48}
        className='size-12 object-cover rounded-full'
      />

      {/* ===== POST ===== */}
      <div className='flex-1'>
        {/* ===== TEXT INPUT ===== */}
        <div className='flex gap-4'>
          <textarea
            placeholder="What's on your mind"
            className='flex-1 bg-slate-100 rounded-lg p-2 outline-none'
          ></textarea>
          <Image
            src='/emoji.png'
            alt='Pic'
            width={20}
            height={20}
            className='size-5 cursor-pointer self-end'
          />
        </div>
        {/* ===== POST OPTIONS ===== */}
        <div className='mt-4 flex items-center text-gray-400 gap-4 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/addimage.png' alt='Pic' width={20} height={20} />
            Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/addVideo.png' alt='Pic' width={20} height={20} />
            Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/poll.png' alt='Pic' width={20} height={20} />
            Poll
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/addevent.png' alt='Pic' width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}
