const WHATSAPP_NUMBER = "2348163276826";

export function getWhatsAppLink(message = "Hi Chukwuemeka, I'd like to talk about a project.") {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
