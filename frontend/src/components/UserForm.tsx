import React, { useState } from 'react';
import './UserForm.css';
import { createUser, updateUser } from '../services/api';

type UserFormProps = {
  user?: any;
  onSave: () => void;
};

const UserForm: React.FC<UserFormProps> = ({ user, onSave }) => {
  const [formData, setFormData] = useState(user || {
    name: '',
    dob: '',
    contact: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      await updateUser(user.id, formData);
    } else {
      await createUser(formData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
