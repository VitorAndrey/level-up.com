import { Resend } from "resend";

export const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD);

// function handleSendEmail() {
//   resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "vitor.andreylopess@gmail.com",
//     subject: "Hello World",
//     html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
//   });
// }
