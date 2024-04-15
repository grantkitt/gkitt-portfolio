import emailer from "emailjs-com";

emailer.init(import.meta.env.EMAILJS_ACCESS!);

export default emailer;
