import Link from 'next/link';
import Navbar from './Navbar';

function Sidebar() {
  return (
    <div className="w-64 text-white h-screen px-4 pt-8 pb-4 bg-primary flex justify-between flex-col border">
      <section className="text-3xl text-center">
        <Link href="/">PREFACE</Link>
        <Navbar />
      </section>
    </div>
  );
}

export default Sidebar;
