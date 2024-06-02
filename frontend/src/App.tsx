import React,{ useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddUser = () => {
    setIsAdding(true);
  };

  const handleSave = () => {
    setIsAdding(false);
  };

  return (
    <div>
      <h1>User Management Dashboard</h1>
      <button onClick={handleAddUser}>Add User</button>
      {isAdding && <UserForm onSave={handleSave} />}
      <UserList />
    </div>
  );
};

export default App;
