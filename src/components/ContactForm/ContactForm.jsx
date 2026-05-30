import "./ContactForm.css";

function ContactForm() {
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

      <form className="contact-form">
        <label>Nom</label>
        <input type="text" placeholder="Ton nom" />

        <label>Email</label>
        <input type="email" placeholder="ton@email.com" />

        <label>Sujet</label>
        <input type="text" placeholder="Sujet" />

        <label>Message</label>
        <textarea placeholder="Parle-moi de ton projet..." rows="6"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default ContactForm;
