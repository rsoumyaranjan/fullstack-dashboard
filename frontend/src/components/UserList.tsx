import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/api';
import UserDetail from './UserDetail';

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleSelectUser = (user: any) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id} onClick={() => handleSelectUser(user)}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      {selectedUser && <UserDetail user={selectedUser} onUserUpdate={fetchUsers} />}
    </div>
  );
};

export default UserList;
