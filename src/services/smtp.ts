// Brevo API client using direct HTTP calls (browser-compatible)
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export const brevoClient = {
  sendMail: async (emailData: {
    subject: string;
    message: string;
    sender: { name: string; email: string };
    recipients: string;
  }) => {
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;

    if (!apiKey || apiKey === "YOUR_BREVO_API_KEY") {
      throw new Error(
        "Brevo API key not configured. Please add VITE_BREVO_API_KEY to your .env file."
      );
    }

    try {
      const payload = {
        sender: emailData.sender,
        to: [{ email: emailData.recipients }],
        subject: emailData.subject,
        htmlContent: `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                .content { background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
                .footer { margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; font-size: 12px; color: #6c757d; }
                .feedback-text { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 15px 0; }
                .rating { font-size: 18px; color: #ffc107; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0; color: #007bff;">New Feedback from Scene Maker</h2>
                </div>
                <div class="content">
                  <h3>User Feedback:</h3>
                  <div class="feedback-text">
                    ${emailData.message
                      .split("\n")[0]
                      .replace("Feedback: ", "")}
                  </div>
                  
                  <h3>Rating:</h3>
                  <div class="rating">
                    ${emailData.message.split("\n")[1] || "Not provided"}
                  </div>
                  
                  <h3>User Email:</h3>
                  <p>${
                    emailData.message
                      .split("\n")[2]
                      ?.replace("User Email: ", "") || "Not provided"
                  }</p>
                </div>
                <div class="footer">
                  <p>This feedback was submitted through the AI Video Scene Generator feedback form.</p>
                  <p>Submitted at: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
          </html>
        `,
        replyTo: emailData.sender,
      };

      const response = await fetch(BREVO_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Brevo API error: ${response.status} - ${
            errorData.message || response.statusText
          }`
        );
      }

      const result = await response.json();
      console.log("Email sent successfully via Brevo API:", result);
      return result;
    } catch (error) {
      console.error("Error sending email via Brevo API:", error);
      throw error;
    }
  },
};
