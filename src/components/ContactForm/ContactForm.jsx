import "./ContactForm.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const isEmailJSConfigured = Boolean(
  EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID,
);

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEmailJSConfigured) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [isEmailJSConfigured]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("");

    if (!isEmailJSConfigured) {
      console.error("EmailJS non configuré:", {
        EMAILJS_PUBLIC_KEY,
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
      });
      setSubmitStatus(
        "Le service de contact n'est pas configuré. Contactez-moi directement par email.",
      );
      setIsLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.nom,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.sujet,
        message: formData.message,
        to_email: "annie.carrau@wanandoo.fr",
      };

      console.log("EmailJS send", {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        templateParams,
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      console.log("EmailJS result", result);

      if (result.status === 200 || result.text === "OK") {
        setSubmitStatus("Message envoyé avec succès! 🎉");
        setFormData({ nom: "", email: "", sujet: "", message: "" });
      } else {
        console.error("Réponse EmailJS inattendue:", result);
        setSubmitStatus(
          `Erreur lors de l'envoi (${result.status} ${result.text}). Veuillez réessayer.`,
        );
      }
    } catch (error) {
      console.log("Status :", error.status);
      console.log("Text :", error.text);
      console.log("Erreur complète :", error);
      console.error("Erreur lors de l'envoi EmailJS:", error);
      setSubmitStatus(
        `Erreur lors de l'envoi (${error.status || error.text || error.message || "400"}). Contactez-moi directement par email.`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-left">
        <p className="subtitle">CONTACT</p>
        <h2>
          Travaillons <span>ensemble</span>
        </h2>

        <p>
          Un projet, une opportunité ou juste envie d'échanger ? Envoie-moi un
          message.
        </p>
        <div className="contact-infos">
          <div className="info">
            <div className="icon">✉️</div>
            <div>
              <small>Email</small>
              <p>annie.carrau@wanandoo.fr</p>
            </div>
          </div>

          <div className="info">
            <div className="icon">📍</div>
            <div>
              <small>Localisation</small>
              <p>France • Aquitaine</p>
            </div>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nom</label>
        <input
          type="text"
          name="nom"
          placeholder="Ton nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="ton@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Sujet</label>
        <input
          type="text"
          name="sujet"
          placeholder="Sujet"
          value={formData.sujet}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Parle-moi de ton projet..."
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Envoi en cours..." : "Envoyer"}
        </button>

        {submitStatus && <p className="submit-status">{submitStatus}</p>}
      </form>
    </section>
  );
}

export default ContactForm;
