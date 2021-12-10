export default function Button({ text }: { text: string }) {
  return (
    <button className='w-72 h-12 text-xl text-white bg-black rounded-full hover:bg-red-500 duration-200'>
      {text}
    </button>
  );
}
