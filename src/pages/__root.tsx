import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { NuqsAdapter } from 'nuqs/adapters/react';
import Navbar from '~/components/Navbar';
import { SidebarProvider } from '~/components/ui/sidebar';

export const Route = createRootRoute({ component: RootRoute });

function RootRoute() {
  return (
    <>
      <NuqsAdapter>
        <SidebarProvider>
          <div>
            <Navbar />
            <div className="m-0 mt-12 h-screen w-screen px-8">
              <Outlet />
            </div>
          </div>
        </SidebarProvider>
        <TanStackRouterDevtools />
      </NuqsAdapter>
    </>
  );
}
