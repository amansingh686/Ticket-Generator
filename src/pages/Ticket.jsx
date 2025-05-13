import Card from '../components/Card';
import { useEffect, useState } from 'react';
import '../App.css';

const Ticket = () => {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('ticketData');
    if (data) setTicket(JSON.parse(data));
  }, []);

  if (!ticket) return <div className="main-bg centered"><Card>Ticket not found.</Card></div>;

  return (
    <div className="main-bg centered">
      <h2 className="title">🚀 Coding Conf!</h2>
      <Card>
        <h3>Congrats, {ticket.name || 'Attendee'}!<br />Your ticket is ready.</h3>
        <div className="ticket-box">
          <div><strong>Name:</strong> {ticket.name}</div>
          <div><strong>Email:</strong> {ticket.email}</div>
          {ticket.company && <div><strong>Company:</strong> {ticket.company}</div>}
          {ticket.designation && <div><strong>Designation:</strong> {ticket.designation}</div>}
        </div>
      </Card>
    </div>
  );
};

export default Ticket; 