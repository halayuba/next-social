import Post from "./Post"

interface PostFeedProps {}

export default function PostFeed() {
  return (
    <div className='bg-white p-4 shadow-md rounded-lg flex flex-col gap-12'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
