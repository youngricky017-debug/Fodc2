'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RSVP(){
  const [f,setF]=useState({n:'',p:'',e:'',m:''});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.n,
          phone: f.p,
          email: f.e,
          message: f.m
        })
      });

      if (!res.ok) {
        throw new Error('Failed to submit RSVP');
      }

      setSubmitted(true);
      setF({n:'',p:'',e:'',m:''});
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{padding:40,maxWidth:500,margin:'0 auto'}}>
      <h2 style={{fontSize:40,fontFamily:'serif',textAlign:'center'}}>RSVP</h2>
      {submitted ? (
        <motion.div
          initial={{opacity:0,scale:0.9}}
          animate={{opacity:1,scale:1}}
          style={{
            background:'rgba(100,200,100,0.2)',
            border:'1px solid rgba(100,200,100,0.5)',
            padding:20,
            borderRadius:8,
            textAlign:'center',
            marginTop:20
          }}>
          <p style={{fontSize:18,color:'#90EE90'}}>✓ Thank you for confirming!</p>
          <p style={{opacity:0.8,marginTop:10}}>We can't wait to celebrate with you!</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} style={{marginTop:20}}>
          {error && (
            <div style={{
              background:'rgba(200,100,100,0.2)',
              border:'1px solid rgba(200,100,100,0.5)',
              padding:10,
              borderRadius:6,
              marginBottom:15,
              color:'#FF9999'
            }}>
              {error}
            </div>
          )}
          <input 
            placeholder='Full Name' 
            value={f.n}
            onChange={e=>setF({...f,n:e.target.value})}
            required
            style={{
              width:'100%',
              padding:12,
              marginBottom:15,
              background:'rgba(255,255,255,0.05)',
              border:'1px solid rgba(120,80,200,0.3)',
              borderRadius:6,
              color:'white',
              boxSizing:'border-box'
            }}/>
          <input 
            placeholder='Phone Number' 
            type='tel'
            value={f.p}
            onChange={e=>setF({...f,p:e.target.value})}
            required
            style={{
              width:'100%',
              padding:12,
              marginBottom:15,
              background:'rgba(255,255,255,0.05)',
              border:'1px solid rgba(120,80,200,0.3)',
              borderRadius:6,
              color:'white',
              boxSizing:'border-box'
            }}/>
          <input 
            placeholder='Email Address (optional)' 
            type='email'
            value={f.e}
            onChange={e=>setF({...f,e:e.target.value})}
            style={{
              width:'100%',
              padding:12,
              marginBottom:15,
              background:'rgba(255,255,255,0.05)',
              border:'1px solid rgba(120,80,200,0.3)',
              borderRadius:6,
              color:'white',
              boxSizing:'border-box'
            }}/>
          <textarea 
            placeholder='Optional Message' 
            value={f.m}
            onChange={e=>setF({...f,m:e.target.value})}
            style={{
              width:'100%',
              padding:12,
              minHeight:80,
              marginBottom:15,
              background:'rgba(255,255,255,0.05)',
              border:'1px solid rgba(120,80,200,0.3)',
              borderRadius:6,
              color:'white',
              boxSizing:'border-box',
              fontFamily:'inherit'
            }}/>
          <button 
            type='submit'
            disabled={loading}
            style={{
              width:'100%',
              padding:12,
              background:'rgba(120,80,200,0.6)',
              border:'1px solid rgba(120,80,200,0.8)',
              color:'white',
              borderRadius:6,
              cursor:loading?'not-allowed':'pointer',
              fontSize:16,
              fontWeight:'bold',
              opacity:loading?0.6:1,
              transition:'all 0.3s ease'
            }}>
            {loading ? 'Submitting...' : 'Confirm Attendance'}
          </button>
        </form>
      )}
    </section>
  );
}
