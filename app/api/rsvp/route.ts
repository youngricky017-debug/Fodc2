import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { sendRSVPConfirmation, sendAdminNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('wedding');
    const collection = db.collection('rsvps');

    const body = await request.json();
    const { name, phone, message, email } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const rsvpEntry = {
      name,
      phone,
      message: message || '',
      email: email || '',
      timestamp: new Date(),
      confirmed: true,
    };

    const result = await collection.insertOne(rsvpEntry);

    // Send emails if provided
    if (email) {
      await sendRSVPConfirmation(email, name);
      await sendAdminNotification(name, phone, message);
    }

    return NextResponse.json(
      { success: true, message: 'RSVP submitted successfully', data: rsvpEntry },
      { status: 201 }
    );
  } catch (error) {
    console.error('RSVP error:', error);
    return NextResponse.json(
      { error: 'Failed to submit RSVP' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('wedding');
    const collection = db.collection('rsvps');

    const responses = await collection.find({}).toArray();
    
    return NextResponse.json({ 
      total: responses.length, 
      responses 
    });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSVPs' },
      { status: 500 }
    );
  }
}
