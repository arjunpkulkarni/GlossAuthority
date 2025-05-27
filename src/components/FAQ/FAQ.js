import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    { question: 'How often should I detail my car?', answer: 'This depends on usage and storage, but generally every 3-6 months for a full detail.' },
    { question: 'How long does a full detail take?', answer: 'A full detail can take anywhere from 4 to 8 hours, depending on the car\'s condition and size.' }, // Escaped apostrophe
    { question: 'Is ceramic coating worth the investment?', answer: 'Yes, ceramic coating offers long-lasting protection, enhances gloss, and makes cleaning easier.' },
    { question: 'Do I need to prepare my car before bringing it in for detailing?', answer: 'Please remove all personal belongings. Otherwise, no specific preparation is needed by you.' },
    { question: 'Can you remove all scratches from my paint?', answer: 'While we can remove or significantly reduce many scratches, deep scratches that have gone through the clear coat may not be fully removable.' },
    { question: 'What\'s the difference between waxing and ceramic coating?', answer: 'Wax offers short-term protection (weeks to months), while ceramic coating offers long-term protection (years) and a harder, more durable layer.' }, // Escaped apostrophe
    { question: 'Do you offer mobile detailing services?', answer: 'This information would be specific to the business - please update or we can make it a general affirmative statement.' },
  ];

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>Common Questions</h2>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ; 