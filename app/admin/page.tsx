'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RSVP {
  _id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
  confirmed: boolean;
}

export default function AdminDashboard() {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedRsvp, setSelectedRsvp] = useState<RSVP | null>(null);

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
      fetchRsvps();
    } else {
      alert('Invalid password');
    }
  };

  const fetchRsvps = async () => {
    try {
      const res = await fetch('/api/rsvp');
      const data = await res.json();
      setRsvps(data.responses || []);
    } catch (error) {
      console.error('Failed to fetch RSVPs:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Name', 'Phone', 'Email', 'Message', 'Date'].join(','),
      ...rsvps.map(r => [
        r.name,
        r.phone,
        r.email,
        r.message,
        new Date(r.timestamp).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rsvp-list.csv';
    a.click();
  };

  if (!authenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(120,80,200,0.2), rgba(200,160,90,0.2))'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: 'rgba(11,8,20,0.95)',
            padding: 40,
            borderRadius: 12,
            border: '1px solid rgba(120,80,200,0.5)',
            textAlign: 'center',
            maxWidth: 400
          }}>
          <h1 style={{ fontSize: 32, marginBottom: 30 }}>Admin Dashboard</h1>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{
              width: '100%',
              padding: 12,
              marginBottom: 15,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(120,80,200,0.3)',
              borderRadius: 6,
              color: 'white',
              boxSizing: 'border-box'
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: 12,
              background: 'rgba(120,80,200,0.6)',
              border: 'none',
              color: 'white',
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 16,
              fontWeight: 'bold'
            }}>
            Login
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, minHeight: '100vh', background: 'linear-gradient(135deg, rgba(120,80,200,0.1), rgba(200,160,90,0.1))' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
          <h1 style={{ fontSize: 40, fontFamily: 'serif' }}>RSVPs Dashboard</h1>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={exportToCSV}
              style={{
                padding: '10px 20px',
                background: 'rgba(100,200,100,0.3)',
                border: '1px solid rgba(100,200,100,0.5)',
                color: 'white',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
              📥 Export CSV
            </button>
            <button
              onClick={() => setAuthenticated(false)}
              style={{
                padding: '10px 20px',
                background: 'rgba(200,100,100,0.3)',
                border: '1px solid rgba(200,100,100,0.5)',
                color: 'white',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
              Logout
            </button>
          </div>
        </div>

        <div style={{
          background: 'rgba(11,8,20,0.8)',
          border: '1px solid rgba(120,80,200,0.3)',
          borderRadius: 8,
          padding: 20,
          marginBottom: 20
        }}>
          <p style={{ fontSize: 18 }}>
            <strong>Total Confirmations:</strong> {rsvps.length}
          </p>
        </div>

        {loading ? (
          <p>Loading RSVPs...</p>
        ) : (
          <div style={{ display: 'grid', gap: 15 }}>
            {rsvps.map((rsvp, idx) => (
              <motion.div
                key={rsvp._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedRsvp(selectedRsvp?._id === rsvp._id ? null : rsvp)}
                style={{
                  background: 'rgba(120,80,200,0.1)',
                  border: '1px solid rgba(120,80,200,0.3)',
                  padding: 15,
                  borderRadius: 6,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: 'bold', fontSize: 16 }}>{rsvp.name}</p>
                    <p style={{ opacity: 0.7, fontSize: 14 }}>{rsvp.phone}</p>
                    {rsvp.email && <p style={{ opacity: 0.7, fontSize: 14 }}>📧 {rsvp.email}</p>}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ opacity: 0.7, fontSize: 12 }}>
                      {new Date(rsvp.timestamp).toLocaleDateString()}
                    </p>
                    <span style={{
                      background: 'rgba(100,200,100,0.3)',
                      padding: '4px 8px',
                      borderRadius: 4,
                      fontSize: 12,
                      marginTop: 5,
                      display: 'inline-block'
                    }}>
                      ✓ Confirmed
                    </span>
                  </div>
                </div>
                {selectedRsvp?._id === rsvp._id && rsvp.message && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{ marginTop: 15, paddingTop: 15, borderTop: '1px solid rgba(120,80,200,0.2)' }}>
                    <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
                      <strong>Message:</strong> {rsvp.message}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
