import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AppHeader } from './components/AppHeader';
// import { AppFooter } from './components/AppFooter';

export const Component: FC = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <AppHeader />
        <div className="flex flex-1 flex-col gap-4">
          <Outlet />
        </div>
        {/* <AppFooter /> */}
      </div>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: 'overflow-hidden flex gap-4 items-center bg-black p-4 w-full rounded-md text-white',
            title: 'text-lg',
          },
        }}
      />
    </>
  );
};
