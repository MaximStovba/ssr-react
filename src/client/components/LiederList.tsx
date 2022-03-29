// import { getLeader } from '../../store/actions/mode';
import React from 'react';
import {
  useSelector,
  // useDispatch
} from 'react-redux';

const LiederList = () => {
  // const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  React.useEffect(() => {
    // dispatch(fetchUsers());
  }, []);

  return (
    <>{users && users.map((user: any) => <li key={user.data.rating}>{user.data.first_name}</li>)}</>
  );
};

function loadData(store: any) {
  // return store.dispatch(fetchUsers());
}

export default {
  element: LiederList,
  loadData,
};
