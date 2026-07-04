const WHATSAPP_NUMBER = "2349028098699";

export function getWhatsAppLink(message = "Hi Chukwuemeka, I'd like to talk about a project.") {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
