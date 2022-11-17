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
        <div className="p-4">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
