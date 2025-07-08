import * as brevo from '@getbrevo/brevo';

// Set up the API key
const apiKey = import.meta.env.VITE_BREVO_API_KEY || 'YOUR_BREVO_API_KEY'; // Replace with your actual API key

// Initialize Brevo API instance with configuration
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

export const brevoClient = {
  sendMail: async (emailData: {
    subject: string;
    message: string;
    sender: { name: string; email: string };
    recipients: string;
  }) => {
    try {
      const sendSmtpEmail = new brevo.SendSmtpEmail();
      
      sendSmtpEmail.subject = emailData.subject;
      sendSmtpEmail.htmlContent = `
        <html>
          <body>
            <h2>${emailData.subject}</h2>
            <div style="white-space: pre-wrap;">${emailData.message}</div>
          </body>
        </html>
      `;
      sendSmtpEmail.sender = emailData.sender;
      sendSmtpEmail.to = [{ email: emailData.recipients }];
      sendSmtpEmail.replyTo = emailData.sender;
      
      const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log('Email sent successfully. Response: ' + JSON.stringify(response));
      return response;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
};