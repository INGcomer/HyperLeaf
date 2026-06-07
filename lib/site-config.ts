// Datos de contacto institucionales centralizados.
// Cambiarlos acá los actualiza en todo el sitio (Footer, Contacto, JSON-LD, WhatsApp float, etc.)

export const SITE_URL = "https://hyperleaf.com.ar";

export const CONTACT_EMAIL = "hola@hyperleaf.com.ar";

// Formato E.164 sin signos para wa.me: +54 9 261 651-1877 → 5492616511877
export const WHATSAPP_NUMBER = "5492616511877";
export const WHATSAPP_DISPLAY = "+54 9 261 651-1877";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_URL = "https://www.instagram.com/hyperleaf.ac/";
export const INSTAGRAM_HANDLE = "@hyperleaf.ac";
