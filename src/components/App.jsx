import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../path_to/user.json';
import data from '../path_to/data.json';
import friends from '../path_to/friends.json';
import transactions from '../path_to/transactions.json';

export const App = () => {
  return (
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
