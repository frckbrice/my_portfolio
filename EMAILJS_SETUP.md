# EmailJS Setup Guide

## How to Set Up EmailJS for Contact Form

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account (bricefrkc@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New Contact Form Submission - {{service}}
```

**Email Body:**
```
Hello Brice,

You have received a new contact form submission from your portfolio website.

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Service: {{service}}
- Message: {{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

### Step 5: Update Your Code
Replace the placeholder values in `src/components/features/contact/components/contact-me.tsx`:

```typescript
const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with actual Service ID
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with actual Template ID
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with actual Public Key
```

### Step 6: Test the Form
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email (bricefrkc@gmail.com) for the message

## Alternative: Using Environment Variables

For better security, you can use environment variables:

1. Create `.env.local` file in your project root:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the code to use environment variables:
```typescript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
```

## Free Plan Limits
- EmailJS free plan allows 200 emails per month
- Perfect for portfolio websites
- Upgrade if you need more emails

## Troubleshooting
- Make sure all IDs are correct
- Check EmailJS dashboard for any errors
- Verify your email service is connected
- Test with a simple message first 