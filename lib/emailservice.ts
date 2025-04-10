import emailjs from "@emailjs/browser";

const serviceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateKey = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

//@ts-expect-error: formData type is dynamically provided and not explicitly typed
export const sendPaymentConfirmationEmail = async (formData) => {
  try {
    // Send email to you (admin)
    await emailjs.send(
      serviceKey,
      templateKey,
      {
        fullName: formData.fullName,
        email: formData.email,
        service: formData.service,
        description: formData.description,
      },
      publicKey
    );


  } catch (error) {
    console.error('Error sending email:', error);
  }
};
