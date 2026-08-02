import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative px-6 sm:px-10">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2 lg:gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
