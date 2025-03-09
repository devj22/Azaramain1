import React from 'react';

const FixedWhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/+918169693894"  // Replace with your WhatsApp number including country code
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center shadow-lg">
          <svg
            className="w-6 h-6 fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.967-.271-.099-.468-.148-.665.149-.198.297-.767.967-.941 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.148-.665-1.611-.912-2.204-.24-.576-.484-.5-.665-.51l-.566-.01c-.198 0-.52.074-.792.371-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.287.173-1.413-.074-.124-.271-.198-.568-.347z" />
            <path d="M20.52 3.48A11.74 11.74 0 0 0 12.03.02C5.59-.3.53 4.08.17 10.52c-.36 6.45 4.25 11.85 10.68 12.25 2.75.19 5.5-.48 7.81-2.16 2.3-1.68 3.95-4.12 4.14-6.87.19-2.75-.48-5.5-2.16-7.81zm-8.49 13.64c-2.25 0-4.4-1.17-5.57-3.3-.66-1.21-.97-2.73-.82-4.16.12-1.03.55-2.03 1.24-2.83.78-.9 1.72-1.57 2.76-1.98.98-.38 2.04-.46 3.08-.25 1.03.21 1.99.74 2.75 1.48.76.76 1.29 1.73 1.5 2.76.21 1.04.13 2.1-.25 3.08-.41.95-1.08 1.86-1.98 2.64-.8.69-1.8 1.14-2.83 1.35-.62.15-1.26.21-1.9.21z" />
          </svg>
          WhatsApp
        </button>
      </a>
    </div>
  );
};

export default FixedWhatsAppButton;
