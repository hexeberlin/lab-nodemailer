module.exports = {
  template: (username, confirmationCode) => {return `<h1>Ironhack Confirmation Email</h1>
  <h2>Hello ${username}!</h2>
  <p>Thank you for joining our community! Please confirm your account by clicking the following link:</p>
  <a href="http://localhost:3000/auth/confirm/${confirmationCode}">CONFIRM</a>
  <p><strong>Great to see you creating awesome webpages with us! 🤓</strong></p>`}
}