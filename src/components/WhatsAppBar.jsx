import { getWhatsAppLink } from "../utils/whatsapp";

const WhatsAppBar = () => {
    const href = getWhatsAppLink();

    return (
        <div className="fixed bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-50">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:bg-[#101a23]/95 sm:backdrop-blur-sm sm:border sm:border-solid sm:border-[#223649] rounded-full shadow-lg shadow-black/40 sm:pl-5 sm:pr-2 sm:py-2"
            >
                <span className="hidden sm:inline text-white text-sm font-medium leading-normal whitespace-nowrap">
                    Got a project in mind? Let's talk on WhatsApp.
                </span>
                <span className="flex items-center gap-2 shrink-0 bg-[#25D366] hover:bg-[#1ebe57] text-[#101a23] text-sm font-bold px-4 py-3 sm:py-2 rounded-full transition-colors duration-300 whitespace-nowrap">
                    <svg fill="currentColor" height="18px" viewBox="0 0 256 256" width="18px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,215.5,51.48,178.6a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z" />
                    </svg>
                    Chat on WhatsApp
                </span>
            </a>
        </div>
    );
};

export default WhatsAppBar;
