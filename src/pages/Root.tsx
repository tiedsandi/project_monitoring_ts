import {Outlet} from 'react-router-dom';
import MainHeader from '../components/Navigation/MainHeader';

export default function RootPage() {
  return (
    <main id='root-page'>
      <MainHeader />
      <Outlet />
    </main>
  );
}
