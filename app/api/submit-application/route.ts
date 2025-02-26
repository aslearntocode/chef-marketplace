import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile } from 'fs/promises';
import path from 'path';

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thedivinehands3@gmail.com',
    pass: process.env.EMAIL_PASSWORD // You'll need to set this up in your .env.local
  }
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Get form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const bio = formData.get('bio') as string;
    const experience = formData.get('experience') as string;
    const specialty = formData.get('specialty') as string;
    const location = formData.get('location') as string;
    
    // Handle files
    const profileImage = formData.get('profileImage') as File;
    const menuFile = formData.get('menuFile') as File;

    // Prepare email content
    const mailOptions = {
      from: 'thedivinehands3@gmail.com',
      to: 'thedivinehands3@gmail.com',
      subject: `New Chef Application: ${name}`,
      html: `
        <h2>New Chef Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Bio:</strong> ${bio || 'Not provided'}</p>
        <p><strong>Experience:</strong> ${experience || 'Not provided'}</p>
        <p><strong>Specialty:</strong> ${specialty || 'Not provided'}</p>
        <p><strong>Location:</strong> ${location || 'Not provided'}</p>
      `,
      attachments: []
    };

    // Add attachments if files were uploaded
    if (profileImage) {
      mailOptions.attachments.push({
        filename: profileImage.name,
        content: Buffer.from(await profileImage.arrayBuffer())
      });
    }

    if (menuFile) {
      mailOptions.attachments.push({
        filename: menuFile.name,
        content: Buffer.from(await menuFile.arrayBuffer())
      });
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
} 