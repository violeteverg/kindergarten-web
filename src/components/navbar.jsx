export default function Navbar() {
  return (
    <nav className="bg-white flex justify-between py-8 px-12">
      <h1 className="text-3xl">logo</h1>
      <ul className="flex gap-[3rem] text-xl items-center">
        <li>About</li>
        <li>Program</li>
        <button className="bg-apple text-white rounded-full py-[6px] px-2 text-[20px]">
          Enrique Now
        </button>
      </ul>
    </nav>
  );
}
