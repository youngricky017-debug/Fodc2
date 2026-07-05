'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Gallery(){
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    { id: 1, title: 'First Meeting', desc: 'Where it all began' },
    { id: 2, title: 'Golden Hour', desc: 'Sunset moments' },
    { id: 3, title: 'Laughter & Love', desc: 'Pure joy together' },
    { id: 4, title: 'Forever Smile', desc: 'Our favorite memory' },
    { id: 5, title: 'Dancing Hearts', desc: 'Celebrating us' },
    { id: 6, title: 'Sunset Promise', desc: 'Our future awaits' }
  ];

  return (
    <section style={{padding:40}}>
      <h2 style={{fontSize:40,fontFamily:'serif',textAlign:'center'}}>Our Moments</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:20,marginTop:30}}>
        {images.map((img, idx)=>(
          <motion.div key={img.id}
            initial={{opacity:0,scale:0.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{delay:idx*0.1}}
            onClick={()=>setSelectedImage(img.id)}
            style={{
              cursor:'pointer',
              aspectRatio:'1',
              background:'linear-gradient(135deg, rgba(120,80,200,0.3), rgba(200,160,90,0.2))',
              borderRadius:8,
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              textAlign:'center',
              border:'1px solid rgba(255,255,255,0.2)',
              transition:'all 0.3s ease'
            }}>
            <div style={{fontSize:48}}>📸</div>
            <p style={{marginTop:10,fontWeight:'bold'}}>{img.title}</p>
            <p style={{fontSize:12,opacity:0.7}}>{img.desc}</p>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          onClick={()=>setSelectedImage(null)}
          style={{
            position:'fixed',
            inset:0,
            background:'rgba(0,0,0,0.8)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            zIndex:1000
          }}>
          <motion.div
            initial={{scale:0.8}}
            animate={{scale:1}}
            onClick={(e)=>e.stopPropagation()}
            style={{
              background:'#0b0814',
              padding:30,
              borderRadius:12,
              maxWidth:500,
              textAlign:'center',
              border:'1px solid rgba(120,80,200,0.5)'
            }}>
            <div style={{fontSize:80}}>📸</div>
            <p style={{marginTop:15,fontSize:20}}>Image #{selectedImage}</p>
            <button onClick={()=>setSelectedImage(null)}
              style={{
                marginTop:20,
                padding:'10px 20px',
                background:'rgba(120,80,200,0.5)',
                border:'none',
                color:'white',
                borderRadius:6,
                cursor:'pointer'
              }}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
