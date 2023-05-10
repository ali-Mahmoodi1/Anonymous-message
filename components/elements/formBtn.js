export default function FormBtn({content}) {
  return (
    <button
      type="submit"
      className=" py-2 px-4 text-sm rounded-full text-white bg-[#21dac7] transition-all focus:opacity-70"
    >
      {content}
    </button>
  );
}
