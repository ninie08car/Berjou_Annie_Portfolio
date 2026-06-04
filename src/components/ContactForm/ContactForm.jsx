import "./ContactForm.css";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialiser EmailJS au montage du composant
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

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

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nom,
          from_email: formData.email,
          subject: formData.sujet,
          message: formData.message,
          to_email: "annie.carrau@wanandoo.fr",
        }
      );

      if (response.status === 200) {
        setSubmitStatus("Message envoyé avec succès! 🎉");
        setFormData({ nom: "", email: "", sujet: "", message: "" });
      } else {
        setSubmitStatus("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus(
        "Erreur lors de l'envoi. Contactez-moi directement par email.",
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
