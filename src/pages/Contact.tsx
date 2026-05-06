import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../components/Section';
import Button from '../components/Button';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Contact() {
  usePageTitle('კონტაქტი');
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
      <Section title="დამიკავშირდით" description="გაქვთ შეკითხვა ან გსურთ თანამშრომლობა? მომწერეთ შეტყობინება.">
        <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center border border-green-200">
              <svg className="w-20 h-20 text-green-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-3xl font-bold dark:text-white mb-3">შეტყობინება გაიგზავნა!</h3>
              <p className="text-sm md:text-base dark:text-gray-300">მადლობა დაკავშირებისთვის. შევეცდები რაც შეიძლება მალე გიპასუხოთ.</p>
              <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>
                სხვა შეტყობინების გაგზავნა
              </Button>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">სახელი</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border dark:bg-slate-700 dark:text-white ${formik.touched.name && formik.errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-600 focus:ring-blue-500'} focus:outline-none focus:ring-2 transition-shadow`}
                  placeholder="გიორგი მაისურაძე"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ელ-ფოსტა</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border dark:bg-slate-700 dark:text-white ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-600 focus:ring-blue-500'} focus:outline-none focus:ring-2 transition-shadow`}
                  placeholder="giorgi@example.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">შეტყობინება</label>
                <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border dark:bg-slate-700 dark:text-white ${formik.touched.message && formik.errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-600 focus:ring-blue-500'} focus:outline-none focus:ring-2 transition-shadow resize-none`}
                  placeholder="რით შემიძლია დაგეხმაროთ?"
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                ) : null}
              </div>
              <Button type="submit" variant="primary" className="w-full py-3 text-sm md:text-base">
                გაგზავნა
              </Button>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
}
