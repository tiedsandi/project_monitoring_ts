import {Outlet} from 'react-router-dom';

export default function RootPage() {
  return (
    <main id='root-page'>
      <Outlet />
    </main>
  );
}
