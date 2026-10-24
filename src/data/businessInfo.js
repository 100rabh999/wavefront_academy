export const businessInfo = {
  name: 'Wavefront Academy',
  legalName: 'Wavefront Academy',
  category: 'Coaching Classes / Educational Institute',
  website: 'https://wavefrontacademy.web.app',
  phone: '+91 70581 07207',
  phoneRaw: '+917058107207',
  email: 'wavefrontacademy07@gmail.com',
  address: {
    street: 'Shop No. 11, Maitry Pooja Apartment',
    landmark: 'Near Manvelpada Talav',
    area: 'Manvelpada Road',
    locality: 'Virar East',
    city: 'Virar',
    district: 'Palghar',
    state: 'Maharashtra',
    postalCode: '401303',
    country: 'IN',
    full: 'Shop No. 11, Maitry Pooja Apartment, Near Manvelpada Talav, Virar East, Maharashtra 401303'
  },
  geo: {
    latitude: 19.4425421,
    longitude: 72.8200961
  },
  googleMapsUrl: 'https://maps.app.goo.gl/xqBZftfyT7MTyN5FA',
  whatsappUrl: 'https://wa.me/917058107207',
  getWhatsAppUrl: (courseTitle = '') => {
    const base = 'https://wa.me/917058107207';
    if (!courseTitle) {
      return `${base}?text=${encodeURIComponent('Hello Wavefront Academy, I would like to enquire about coaching batches and admissions.')}`;
    }
    return `${base}?text=${encodeURIComponent(`Hello Wavefront Academy, I would like to enquire about ${courseTitle} coaching at your Virar East center.`)}`;
  },
  openingHours: 'Mon-Sun: 08:00 - 21:00'
};
