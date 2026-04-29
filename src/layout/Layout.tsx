import { Outlet } from 'react-router';
import { Sidebar } from '../components/sidebar/Sidebar';

export const Layout = () => {
  return (
    <div className="page">
      <Sidebar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};
