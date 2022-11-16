import Link from 'next/link';
import Navbar from './Navbar';

function Sidebar() {
  return (
    <aside className="h-full w-60 fixed top-0 left-0 text-white text-3xl text-center px-4 pt-8 pb-4 bg-primary border">
      <Link href="/">PREFACE</Link>
      <Navbar />
    </aside>
  );
}

export default Sidebar;
