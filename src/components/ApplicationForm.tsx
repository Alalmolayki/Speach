import React from 'react';
import SectionTitle from './ui/SectionTitle';
import FormField from './ui/FormField';

const ApplicationForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="basvuru" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Başvuru Formu"
          subtitle="SPEACH 2025 Konferansına Katılım İçin Başvurun"
        />
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <FormField
            id="name"
            label="Ad Soyad"
            type="text"
            required
          />
          
          <FormField
            id="email"
            label="E-posta"
            type="email"
            required
          />
          
          <FormField
            id="phone"
            label="Telefon"
            type="tel"
            required
          />
          
          <FormField
            id="teacher"
            label="Danışman Öğretmen"
            type="text"
            required
          />
          
          <FormField
            id="school"
            label="Okul Adı"
            type="text"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Başvuru Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;