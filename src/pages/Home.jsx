import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    designation: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data to ticket page (for demo, use localStorage)
    localStorage.setItem('ticketData', JSON.stringify(form));
    navigate('/ticket');
  };

  return (
    <div className="main-bg">
      <div className="centered">
        <h2 className="title">🚀 Coding Conf!</h2>
        <Card>
          <h3>Your Journey to Coding Conf 2025 Starts Here!</h3>
          <form onSubmit={handleSubmit}>
            <Input label="Name" name="name" value={form.name} onChange={handleChange} required />
            <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <Input label="Company" name="company" value={form.company} onChange={handleChange} />
            <Input label="Designation" name="designation" value={form.designation} onChange={handleChange} />
            <Button type="submit">Get Your Ticket</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Home; 