import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Outlet />
    </div>
  );
};

export default Layout;
