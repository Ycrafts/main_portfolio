import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgrwopa");

  if (state.succeeded) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-accent-orange mb-4">Thank you!</h2>
        <p className="text-text-secondary">Your message has been sent. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-text-secondary text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a question or want to work together? Leave a message.
        </motion.p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input type="text" name="name" placeholder="Your Name" className="w-full p-4 bg-secondary rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-orange" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <input type="email" name="email" placeholder="Your Email" className="w-full p-4 bg-secondary rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-orange" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <textarea name="message" rows="5" placeholder="Your Message" className="w-full p-4 bg-secondary rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-orange" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </motion.div>
          <motion.button 
            type="submit" 
            className="bg-accent-orange text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 