'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FAQ(){
  const [expanded, setExpanded] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What should I wear?',
      a: 'Traditional attire for the ceremony, formal wear for the church wedding and reception.'
    },
    {
      q: 'Can I bring a plus one?',
      a: 'Please RSVP with your details. Additional guests require prior confirmation.'
    },
    {
      q: 'What time should I arrive?',
      a: 'Please arrive 30 minutes before the ceremony start time.'
    },
    {
      q: 'Is there parking available?',
      a: 'Yes, parking is available at Meena Event Center and the ceremony venues.'
    },
    {
      q: 'What is the gift registry?',
      a: 'We appreciate your presence more than any gift. Gifts are optional and deeply appreciated.'
    }
  ];

  return (
    <section style={{padding:40,maxWidth:700,margin:'0 auto'}}>
      <h2 style={{fontSize:40,fontFamily:'serif',textAlign:'center'}}>Frequently Asked</h2>
      <div style={{marginTop:40}}>
        {faqs.map((faq, idx)=>(
          <motion.div key={idx}
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:idx*0.1}}>
            <div
              onClick={()=>setExpanded(expanded===idx?null:idx)}
              style={{
                cursor:'pointer',
                padding:15,
                background:'rgba(120,80,200,0.1)',
                borderRadius:6,
                marginBottom:10,
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                border:'1px solid rgba(120,80,200,0.2)',
                transition:'all 0.3s ease'
              }}>
              <p style={{fontWeight:'bold'}}>{faq.q}</p>
              <span style={{fontSize:20}}>{expanded===idx?'−':'+'}</span>
            </div>
            {expanded === idx && (
              <motion.div
                initial={{opacity:0,height:0}}
                animate={{opacity:1,height:'auto'}}
                exit={{opacity:0,height:0}}
                style={{
                  padding:15,
                  background:'rgba(120,80,200,0.05)',
                  borderRadius:6,
                  marginBottom:10,
                  borderLeft:'3px solid rgba(120,80,200,0.5)'
                }}>
                <p style={{opacity:0.85}}>{faq.a}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
