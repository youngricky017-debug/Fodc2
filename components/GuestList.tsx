'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GuestList(){
  const [guests, setGuests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchGuests();
  },[]);

  const fetchGuests = async () => {
    try {
      const res = await fetch('/api/rsvp');
      const data = await res.json();
      setGuests(data.responses || []);
    } catch (error) {
      console.error('Failed to fetch guests:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{padding:40}}>
      <h2 style={{fontSize:40,fontFamily:'serif'}}>Guest Confirmations</h2>
      <p style={{opacity:0.8,marginTop:10}}>Total RSVPs: <strong>{guests.length}</strong></p>
      
      {loading ? (
        <p style={{marginTop:20}}>Loading guest list...</p>
      ) : guests.length === 0 ? (
        <p style={{marginTop:20,opacity:0.6}}>No confirmations yet. Be the first to RSVP!</p>
      ) : (
        <div style={{marginTop:20}}>
          {guests.map((guest, idx)=>(
            <motion.div key={guest.id}
              initial={{opacity:0,x:-20}}
              animate={{opacity:1,x:0}}
              transition={{delay:idx*0.05}}
              style={{
                background:'rgba(120,80,200,0.1)',
                padding:15,
                marginTop:10,
                borderRadius:6,
                borderLeft:'3px solid rgba(120,80,200,0.5)'
              }}>
              <p style={{fontWeight:'bold'}}>{guest.name}</p>
              <p style={{fontSize:12,opacity:0.7}}>{guest.phone}</p>
              {guest.message && <p style={{fontSize:13,marginTop:8,fontStyle:'italic',opacity:0.8}}>"{guest.message}"</p>}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
