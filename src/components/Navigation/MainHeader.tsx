import {useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function MainHeader() {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  function showUpcomingSessions() {
    setUpcomingSessionsVisible(true);
  }

  // function hideUpcomingSessions() {
  //   setUpcomingSessionsVisible(false);
  // }

  return (
    <>
      {upcomingSessionsVisible && (
        // <UpcomingSessions onClose={hideUpcomingSessions} />
        <div>Upcoming Sessions</div>
      )}
      <header id='main-header'>
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({isActive}) => (isActive ? 'active' : '')}
                end>
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sessions'
                className={({isActive}) => (isActive ? 'active' : '')}>
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <p onClick={showUpcomingSessions}>Upcoming Sessions</p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
