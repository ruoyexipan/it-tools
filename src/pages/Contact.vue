<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { ref } from 'vue';

useHead({
  title: 'Contact Us - AgentsAITools',
  meta: [
    { name: 'description', content: 'Contact AgentsAITools for questions, feedback, or support.' },
  ],
});

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

function handleSubmit() {
  isSubmitting.value = true;
  
  const mailtoLink = `mailto:contact@agentsaitools.com?subject=${encodeURIComponent(formData.value.subject)}&body=${encodeURIComponent(
    `Name: ${formData.value.name}\nEmail: ${formData.value.email}\n\nMessage:\n${formData.value.message}`
  )}`;
  
  window.location.href = mailtoLink;
  
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
  }, 1000);
}
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <h1>Contact Us</h1>
      <p class="page-subtitle">We'd love to hear from you</p>
    </header>

    <main class="page-content">
      <div class="contact-grid">
        <section class="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions, suggestions, or feedback? We're here to help!</p>
          
          <div class="info-item">
            <div class="info-icon">📧</div>
            <div>
              <h3>Email</h3>
              <a href="mailto:contact@agentsaitools.com" class="apple-link">contact@agentsaitools.com</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">⏱️</div>
            <div>
              <h3>Response Time</h3>
              <p>We typically respond within 24-48 hours.</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">💬</div>
            <div>
              <h3>What We Help With</h3>
              <ul>
                <li>General questions about tools</li>
                <li>Feature requests</li>
                <li>Bug reports</li>
                <li>Partnership inquiries</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="contact-form">
          <h2>Send Us a Message</h2>
          
          <div v-if="isSubmitted" class="success-message">
            <p>Thank you for your message! Your email client should open shortly.</p>
          </div>

          <form v-else @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                placeholder="Your name"
                required
                class="apple-input"
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="your@email.com"
                required
                class="apple-input"
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" v-model="formData.subject" required class="apple-input">
                <option value="">Select a subject</option>
                <option value="General Question">General Question</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Partnership">Partnership Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                placeholder="Your message..."
                rows="5"
                required
                class="apple-input"
              ></textarea>
            </div>

            <button type="submit" class="apple-btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 36px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
}

.page-subtitle {
  font-size: 18px;
  color: #86868b;
  margin: 0;
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.contact-info,
.contact-form {
  background: #ffffff;
  border: 1px solid #e8e8ed;
  border-radius: 16px;
  padding: 24px;
}

.contact-info h2,
.contact-form h2 {
  font-size: 24px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 16px;
}

.contact-info p {
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  margin: 0 0 16px;
}

.info-item {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.info-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.info-item h3 {
  font-size: 15px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 4px;
}

.info-item p {
  font-size: 14px;
  color: #6e6e73;
  margin: 0;
}

.info-item ul {
  margin: 0;
  padding-left: 16px;
}

.info-item li {
  font-size: 14px;
  color: #6e6e73;
  margin-bottom: 4px;
}

.apple-link {
  color: #0071e3;
  text-decoration: none;
  font-size: 14px;
}

.apple-link:hover {
  text-decoration: underline;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #1d1d1f;
  margin-bottom: 6px;
}

.apple-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d2d2d7;
  border-radius: 8px;
  font-size: 14px;
  background: #ffffff;
  color: #1d1d1f;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
}

.apple-input:focus {
  border-color: #0071e3;
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
}

.apple-input::placeholder {
  color: #86868b;
}

textarea.apple-input {
  resize: vertical;
  min-height: 100px;
}

.apple-btn-primary {
  width: 100%;
  padding: 12px;
  background: #0071e3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.apple-btn-primary:hover {
  background: #0077ed;
}

.apple-btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: 32px;
  background: #f0fdf4;
  border-radius: 12px;
}

.success-message p {
  font-size: 16px;
  color: #166534;
  margin: 0;
}

/* Dark Mode */
:root.dark .page-header h1,
:root.dark .contact-info h2,
:root.dark .contact-form h2,
:root.dark .info-item h3,
:root.dark .form-group label {
  color: #f5f5f7;
}

:root.dark .page-subtitle {
  color: #999;
}

:root.dark .contact-info,
:root.dark .contact-form {
  background: #1e1e1e;
  border-color: #333;
}

:root.dark .contact-info p,
:root.dark .info-item p,
:root.dark .info-item li {
  color: #ccc;
}

:root.dark .apple-input {
  background: #2d2d2d;
  border-color: #444;
  color: #f5f5f7;
}

:root.dark .apple-input:focus {
  border-color: #0071e3;
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.2);
}

:root.dark .apple-input::placeholder {
  color: #86868b;
}

:root.dark .success-message {
  background: #1a2e1a;
}

:root.dark .success-message p {
  color: #4ade80;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 28px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
