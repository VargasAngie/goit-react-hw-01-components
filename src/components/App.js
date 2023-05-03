import user from '../json/user';
import data from '../json/data';
import friends from '../json/friends';
import transactions from '../json/transactions';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';

const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    {/* <Statistics stats={data} /> */}
    <FriendList friends={friends} />;
  </>
);

export default App;