// Example API utility for sending quote emails
// Replace this with your actual email service integration

/**
 * Send quote request email
 * @param {Object} quoteData - The quote form data
 * @returns {Promise} - Response from the email service
 */
export async function sendQuoteEmail(quoteData) {
    try {
        // Option 1: Using your backend API
        const response = await fetch('/api/send-quote-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(quoteData),
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        return await response.json();

        // Option 2: Using EmailJS (client-side email service)
        // Uncomment and configure if using EmailJS
        /*
        const emailjs = require('@emailjs/browser');
        
        const templateParams = {
          to_email: 'your-company-email@example.com',
          from_name: quoteData.name,
          from_email: quoteData.email,
          company_name: quoteData.companyName,
          country: quoteData.country,
          phone: quoteData.phoneNumber,
          products: JSON.stringify(quoteData.products, null, 2),
          additional_requirements: quoteData.additionalRequirement,
          timestamp: quoteData.timestamp,
        };
    
        return await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          templateParams,
          'YOUR_PUBLIC_KEY'
        );
        */

        // Option 3: Using a third-party service like SendGrid, Mailgun, etc.
        // Configure according to your service provider

    } catch (error) {
        console.error('Error sending quote email:', error);
        throw error;
    }
}

/**
 * Format quote data for email
 * @param {Object} quoteData - The quote form data
 * @returns {string} - Formatted HTML email content
 */
export function formatQuoteEmailHTML(quoteData) {
    const productsHTML = quoteData.products
        .map(
            (product, index) => `
    <div style="margin-bottom: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px;">
      <h3 style="margin: 0 0 10px 0; color: #077CEB;">Product ${index + 1}</h3>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Sub Category:</strong> ${product.subCategory}</p>
      <p><strong>Products:</strong> ${product.productNames.join(', ')}</p>
      <p><strong>Quantity:</strong> ${product.quantity} Liter</p>
    </div>
  `
        )
        .join('');

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #077CEB; border-bottom: 3px solid #077CEB; padding-bottom: 10px;">
          New Quote Request
        </h1>
        
        <h2 style="color: #333; margin-top: 30px;">Customer Information</h2>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
          <p><strong>Name:</strong> ${quoteData.name}</p>
          <p><strong>Company:</strong> ${quoteData.companyName || 'N/A'}</p>
          <p><strong>Email:</strong> ${quoteData.email}</p>
          <p><strong>Country:</strong> ${quoteData.country}</p>
          <p><strong>Phone:</strong> ${quoteData.phoneNumber}</p>
        </div>

        <h2 style="color: #333; margin-top: 30px;">Product Details</h2>
        ${productsHTML}

        ${quoteData.additionalRequirement
            ? `
        <h2 style="color: #333; margin-top: 30px;">Additional Requirements</h2>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
          <p>${quoteData.additionalRequirement}</p>
        </div>
        `
            : ''
        }

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>Submitted on: ${new Date(quoteData.timestamp).toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
