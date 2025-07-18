import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, service, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // or your preferred recipient
            subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
            text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
} 