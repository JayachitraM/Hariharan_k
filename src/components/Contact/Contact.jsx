import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/personal';
import { staggerContainer, staggerItem } from '../../utils/animations';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-400'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-400'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'text-blue-400'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'text-blue-500'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: personalInfo.github,
      color: 'text-gray-400'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-400'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life 
              with quality development and thorough testing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={staggerItem} className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
                  Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="p-4" hover>
                      <div className="flex items-center space-x-4">
                        <div className={`${method.color} p-3 glass-card rounded-lg`}>
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{method.label}</h4>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-gray-300">{method.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 glass-card-hover rounded-lg ${social.color} transition-colors`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Card className="p-6 text-center" glow>
                  <MessageCircle className="mx-auto text-cyan-400 mb-4" size={48} />
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Let's Build Something Amazing Together
                  </h4>
                  <p className="text-gray-300 text-sm">
                    I'm excited to discuss your project and explore how we can create exceptional software solutions.
                  </p>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={staggerItem}>
              <Card className="p-8" glow>
                <h3 className="text-2xl font-heading font-semibold text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg ${
                        submitStatus === 'success'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {submitStatus === 'success'
                        ? 'Thank you! Your message has been sent successfully.'
                        : 'Sorry, there was an error sending your message. Please try again.'}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    icon={<Send size={20} />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;