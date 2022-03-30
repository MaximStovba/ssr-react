import { getLeader } from '../../store/actions/mode';
import React from 'react';
import { useSelector } from 'react-redux';

const LiederList = () => {
  const { leader } = useSelector(state => state.mode);

  React.useEffect(() => {
    // ...
  }, []);

  return (
    <>
      {leader &&
        leader.map((user: any) => (
          <li key={user.data.rating}>{user.data.first_name}</li>
        ))}
    </>
  );
};

function loadData(store: any) {
  return store.dispatch(getLeader());
}

export default {
  element: LiederList,
  loadData,
};
