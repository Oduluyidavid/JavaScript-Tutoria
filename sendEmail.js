function sendEmail(to, subject, body) {
  try {
    console.log(`
                Email sent to ${to}\n
                subject: ${subject}\n
                body: ${body}
            `);
    return true;
  } catch (error) {
    console.log(`Failed to send email: ${error}`);
    return false;
  }
}

module.exports = sendEmail;
