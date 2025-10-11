// src/lib/emailTemplate.js

export function generateEmailHTML(data) {
  const { name, email, phone, company, message, clientIp, timestamp } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #ffffff;">
    <tr>
      <td style="padding: 48px 24px;">
        <!-- Main Container -->
        <table role="presentation" style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border: 1px solid #E5E5E5; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #00B6E7; padding: 48px 40px; text-align: left;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.2;">
                New Contact Submission
              </h1>
              <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; line-height: 1.5;">
                You have received a new inquiry
              </p>
            </td>
          </tr>

          <!-- Content Section -->
          <tr>
            <td style="padding: 48px 40px;">
              
              <!-- Contact Information -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h2 style="margin: 0; color: #1E1E1E; font-size: 20px; font-weight: 600; letter-spacing: -0.01em;">
                      Contact Information
                    </h2>
                  </td>
                </tr>

                <!-- Name -->
                <tr>
                  <td style="padding: 20px 0; border-bottom: 1px solid #F2F2F2;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 140px; vertical-align: top; padding-right: 20px;">
                          <span style="color: #828282; font-size: 14px; font-weight: 500;">
                            Name
                          </span>
                        </td>
                        <td style="vertical-align: top;">
                          <span style="color: #1E1E1E; font-size: 15px; font-weight: 500;">
                            ${name}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding: 20px 0; border-bottom: 1px solid #F2F2F2;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 140px; vertical-align: top; padding-right: 20px;">
                          <span style="color: #828282; font-size: 14px; font-weight: 500;">
                            Email Address
                          </span>
                        </td>
                        <td style="vertical-align: top;">
                          <a href="mailto:${email}" style="color: #00B6E7; font-size: 15px; font-weight: 500; text-decoration: none;">
                            ${email}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding: 20px 0; border-bottom: 1px solid #F2F2F2;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 140px; vertical-align: top; padding-right: 20px;">
                          <span style="color: #828282; font-size: 14px; font-weight: 500;">
                            Phone Number
                          </span>
                        </td>
                        <td style="vertical-align: top;">
                          <a href="tel:+91${phone}" style="color: #00B6E7; font-size: 15px; font-weight: 500; text-decoration: none;">
                            +91 ${phone}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Company -->
                <tr>
                  <td style="padding: 20px 0;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 140px; vertical-align: top; padding-right: 20px;">
                          <span style="color: #828282; font-size: 14px; font-weight: 500;">
                            Company
                          </span>
                        </td>
                        <td style="vertical-align: top;">
                          <span style="color: #1E1E1E; font-size: 15px; font-weight: 500;">
                            ${company}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h2 style="margin: 0; color: #1E1E1E; font-size: 20px; font-weight: 600; letter-spacing: -0.01em;">
                      Message
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px; background-color: #F9F9F9; border-radius: 8px; border: 1px solid #F2F2F2;">
                    <p style="margin: 0; color: #1E1E1E; font-size: 15px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Action Buttons -->
              <table role="presentation" style="width: 100%; margin-top: 40px;">
                <tr>
                  <td style="padding: 0;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="padding-right: 8px; width: 50%;">
                          <a href="mailto:${email}" style="display: block; padding: 16px 24px; background-color: #00B6E7; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 500; text-align: center; transition: background-color 0.2s;">
                            Reply via Email
                          </a>
                        </td>
                        <td style="padding-left: 8px; width: 50%;">
                          <a href="tel:+91${phone}" style="display: block; padding: 16px 24px; background-color: #1E1E1E; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 500; text-align: center; transition: background-color 0.2s;">
                            Call Now
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer with Metadata -->
          <tr>
            <td style="padding: 32px 40px; background-color: #F9F9F9; border-top: 1px solid #F2F2F2;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0; color: #828282; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">
                      Submission Details
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #828282; font-size: 14px;">Received at:</span>
                          <span style="color: #1E1E1E; font-size: 14px; font-weight: 500; margin-left: 8px;">
                            ${timestamp}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #828282; font-size: 14px;">IP Address:</span>
                          <span style="color: #1E1E1E; font-size: 14px; font-weight: 500; margin-left: 8px;">
                            ${clientIp}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Bottom Branding -->
          <tr>
            <td style="padding: 24px 40px; text-align: center; background-color: #1E1E1E;">
              <p style="margin: 0; color: #828282; font-size: 13px;">
                Sent from your contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generatePlainTextEmail(data) {
  const { name, email, phone, company, message, clientIp, timestamp } = data;

  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION
──────────────────────────────────────────────────

Name:           ${name}
Email:          ${email}
Phone:          +91 ${phone}
Company:        ${company}

MESSAGE
──────────────────────────────────────────────────

${message}

SUBMISSION DETAILS
──────────────────────────────────────────────────

Received at:    ${timestamp}
IP Address:     ${clientIp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quick Actions:
→ Reply via Email: ${email}
→ Call Now: +91 ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim();
}
