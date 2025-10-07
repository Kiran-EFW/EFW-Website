import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="section_contact">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="contact_component">
                <div className="contact_left-wrapper">
                  <h1>Join the Newsletter</h1>
                  <p className="text-size-medium">
                    Keep up to date with the latest updates and news from Energy Future World and be the first to invest.
                  </p>
                  <div className="contact_contact-info-wrapper">
                    <p className="text-size-medium">
                      Contact us to discuss the funding of your renewable energy project.
                    </p>
                    <div className="contact_email-info-wrapper">
                      <div className="text-size-medium">
                        <strong>hello@energyfuture.world</strong>
                      </div>
                      <div className="text-size-medium">
                        <strong>+44 20 8050 1517</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <aside className="contact_form-wrapper">
                  <form onSubmit={handleSubmit} className="contact_form">
                    <input
                      className="contact_form-field w-input"
                      maxLength={256}
                      name="name"
                      placeholder="Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="padding-bottom padding-medium"></div>
                    <input
                      className="contact_form-field w-input"
                      maxLength={256}
                      name="email"
                      placeholder="Email address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="padding-bottom padding-medium"></div>
                    <textarea
                      id="Message-2"
                      name="message"
                      maxLength={5000}
                      placeholder="Message"
                      className="contact_form-field-message w-input"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <div className="padding-bottom padding-medium"></div>
                    <Button
                      type="submit"
                      className="button is-contact w-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </Button>
                    {submitMessage && (
                      <div className="padding-top padding-medium">
                        <p className={`text-size-medium ${submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                          {submitMessage}
                        </p>
                      </div>
                    )}
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
