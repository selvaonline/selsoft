import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Configure email transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Function to save form data to a file as backup
const saveFormSubmission = (data: any) => {
  try {
    const submissionsDir = path.join(process.cwd(), 'contact-submissions');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const filename = path.join(submissionsDir, `contact-${timestamp}.json`);
    
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Form submission saved to ${filename}`);
  } catch (error) {
    console.error('Error saving form submission:', error);
  }
};

export async function POST(request: NextRequest) {
  try {
    // Get form data from request
    const formData = await request.json();
    const { name, email, phone, subject, service, msg } = formData;

    // Validate required fields
    if (!name || !email || !subject || !msg) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare email options
    const mailOptions = {
      from: `"Selsoft Website Contact" <${process.env.EMAIL_USER}>`,
      to: 'selvaonline@gmail.com',
      replyTo: email,
      subject: `Website Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${msg.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service Interested In: ${service || 'Not specified'}
        Subject: ${subject}
        
        Message:
        ${msg}
      `,
    };

    // Try to send the email
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      
      // Save form data as backup if email fails
      saveFormSubmission({
        name,
        email,
        phone,
        subject,
        service,
        msg,
        date: new Date().toISOString()
      });
      
      // Still return success to the user, but log the error
      console.warn('Email not sent, but form data was saved as backup');
    }

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}