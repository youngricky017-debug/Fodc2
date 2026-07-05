import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (replace with database in production)
const responses: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const rsvpEntry = {
      id: Date.now(),
      name,
      phone,
      message,
      timestamp: new Date().toISOString(),
    };

    responses.push(rsvpEntry);

    return NextResponse.json(
      { success: true, message: 'RSVP submitted successfully', data: rsvpEntry },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit RSVP' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ total: responses.length, responses });
}
