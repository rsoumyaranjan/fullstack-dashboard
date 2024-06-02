import React from 'react';
import { deleteUser } from '../services/api';
import UserForm from './UserForm';

type UserDetailProps = {
  user: any;
  onUserUpdate: () => void;
};

const UserDetail: React.FC<UserDetailProps> = ({ user, onUserUpdate }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(user.id);
      onUserUpdate();
    }
  };

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>DOB: {user.dob}</p>
      <p>Contact: {user.contact}</p>
      <p>Email: {user.email}</p>
      <p>Description: {user.description}</p>
      <UserForm user={user} onSave={onUserUpdate} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserDetail;
