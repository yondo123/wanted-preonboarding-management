import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Sidebar />
      <div className="bg-secondary ml-60">
        <Header />
        <div className="px-6 py-4 h-256">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
