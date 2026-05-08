<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { ref } from 'vue';

useHead({
  title: 'Contact Us - AgentsAITools',
  meta: [
    { name: 'description', content: 'Contact AgentsAITools - Get in touch with us for questions, feedback, or support.' },
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
  
  // Create mailto link
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
  <div class="contact-page">
    <div class="hero">
      <h1>Contact Us</h1>
      <p class="subtitle">We'd love to hear from you</p>
    </div>

    <div class="content">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>Have questions, suggestions, or feedback? We're here to help!</p>
        
        <div class="info-item">
          <h3>Email</h3>
          <p><a href="mailto:contact@agentsaitools.com">contact@agentsaitools.com</a></p>
        </div>

        <div class="info-item">
          <h3>Response Time</h3>
          <p>We typically respond within 24-48 hours.</p>
        </div>

        <div class="info-item">
          <h3>What We Can Help With</h3>
          <ul>
            <li>General questions about our tools</li>
            <li>Feature requests and suggestions</li>
            <li>Bug reports</li>
            <li>Partnership inquiries</li>
            <li>Advertising opportunities</li>
          </ul>
        </div>
      </div>

      <div class="contact-form">
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
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" v-model="formData.subject" required>
              <option value="">Select a subject</option>
              <option value="General Question">General Question</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Partnership">Partnership Inquiry</option>
              <option value="Advertising">Advertising</option>
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
            ></textarea>
          </div>

          <button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.contact-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 40px;

  h1 {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 18px;
    opacity: 0.9;
  }
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

h2 {
  font-size: 24px;
  margin-bottom: 24px;
  color: #1a1a1a;
}

h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #3b82f6;
}

p {
  margin-bottom: 16px;
  color: #333;
  line-height: 1.6;
}

a {
  color: #3b82f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.info-item {
  margin-bottom: 24px;

  ul {
    padding-left: 24px;

    li {
      margin-bottom: 8px;
      color: #666;
    }
  }
}

.contact-form {
  background: #f8f9fa;
  padding: 32px;
  border-radius: 12px;

  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #333;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;

      &:focus {
        outline: none;
        border-color: #3b82f6;
      }
    }

    textarea {
      resize: vertical;
    }
  }

  button {
    width: 100%;
    padding: 14px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #2563eb;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
}

.success-message {
  text-align: center;
  padding: 40px;
  background: #d1fae5;
  border-radius: 8px;

  p {
    color: #065f46;
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }
}
</style>
