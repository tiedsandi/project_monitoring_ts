import {Outlet} from 'react-router-dom';
import MainHeader from '../components/Navigation/MainHeader';
import SessionsContextProvider from '../store/context/sessions-context';

export default function RootPage() {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
}
