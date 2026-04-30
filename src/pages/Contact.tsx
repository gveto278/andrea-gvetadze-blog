import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../components/Section';
import Button from '../components/Button';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Contact() {
  usePageTitle('Contact');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('სახელი სავალდებულოა'),
      email: Yup.string().email('არასწორი ელ-ფოსტა').required('ელ-ფოსტა სავალდებულოა'),
      message: Yup.string().min(10, 'მინ. 10 სიმბოლო').required('შეტყობინება სავალდებულოა')
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      setIsSubmitted(true);
      formik.resetForm();
    }
  });

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <Section title="Get in Touch" description="Have a question or want to work together? Drop me a message below.">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center border border-green-200">
              <svg className="w-20 h-20 text-green-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
              <p className="text-sm md:text-base">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${formik.touched.name && formik.errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2 transition-shadow`}
                  placeholder="John Doe"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2 transition-shadow`}
                  placeholder="john@example.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${formik.touched.message && formik.errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:outline-none focus:ring-2 transition-shadow resize-none`}
                  placeholder="How can I help you?"
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                ) : null}
              </div>
              <Button type="submit" variant="primary" className="w-full py-3 text-sm md:text-base">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
}
