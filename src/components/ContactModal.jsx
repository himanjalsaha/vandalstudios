

import React, { useState } from 'react';
import Button from './Button';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
        id="contact-button"
        title="Contact Us"
        containerClass="mt-10 cursor-pointer"
        onClick={openModal}
      />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none backdrop-blur-sm">
          <div className="relative w-auto max-w-xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-black/90 border border-violet-500/20 rounded-lg shadow-2xl outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-violet-500/20 rounded-t">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <button
                  className="p-1 ml-auto text-violet-400 hover:text-violet-200 transition-colors duration-200"
                  onClick={closeModal}
                >
                  <span className="block w-6 h-6 text-2xl">×</span>
                </button>
              </div>

              {/* Body */}
              <div className="relative p-6 flex-auto">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-violet-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-violet-400/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-violet-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-violet-400/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-violet-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-violet-400/50 resize-none"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3 p-6 border-t border-violet-500/20 rounded-b">
                <Button
                  id="close-modal"
                  title="Close"
                  containerClass="bg-black/50 text-violet-400 border border-violet-500/20 hover:bg-violet-950/50"
                  onClick={closeModal}
                />
                <Button
                  id="submit-contact"
                  title="Send Message"
                  containerClass="bg-violet-600 text-white hover:bg-violet-700"
                  onClick={() => {
                    console.log('Form submitted');
                    closeModal();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;

