export default function Button({ text }: { text: string }) {
  return (
    <button className='w-64 h-10 text-m mb-2 lg:w-72 lg:h-12 lg:text-xl text-white bg-black rounded-full hover:bg-red-500 duration-200'>
      {text}
    </button>
  );
}
