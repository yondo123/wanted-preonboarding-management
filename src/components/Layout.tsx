import type { ReactNode } from 'react';
import Sidebar from './Sidebar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans m-auto max-w-screen-xl h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-secondary flex-1 p-4">{children}</div>
    </div>
  );
}

export default Layout;
