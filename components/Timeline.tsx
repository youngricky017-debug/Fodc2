'use client';
import { motion } from 'framer-motion';

export default function Timeline(){
  const events = [
    { date: 'Sept 4, 2026', time: '10:00 AM', title: 'Traditional Marriage Ceremony', location: 'Kano' },
    { date: 'Sept 4, 2026', time: '4:00 PM', title: 'Church Wedding', location: 'Kano' },
    { date: 'Sept 4, 2026', time: '7:00 PM', title: 'Reception & Dinner', location: 'Meena Event Center' }
  ];

  return (
    <section style={{padding:40}}>
      <h2 style={{fontSize:40,fontFamily:'serif',textAlign:'center'}}>Wedding Timeline</h2>
      <div style={{maxWidth:600,margin:'40px auto'}}>
        {events.map((event, idx)=>(
          <motion.div key={idx}
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:idx*0.2}}
            style={{
              display:'flex',
              gap:30,
              marginTop:30,
              alignItems:'flex-start'
            }}>
            <div style={{
              width:40,
              height:40,
              background:'rgba(120,80,200,0.5)',
              borderRadius:'50%',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              flexShrink:0,
              border:'2px solid rgba(120,80,200,0.8)'
            }}>
              <span style={{fontSize:18}}>✓</span>
            </div>
            <div style={{flex:1,paddingTop:5}}>
              <p style={{fontSize:14,opacity:0.7}}>{event.date} • {event.time}</p>
              <h3 style={{fontSize:18,marginTop:5}}>{event.title}</h3>
              <p style={{opacity:0.7,marginTop:5}}>📍 {event.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
