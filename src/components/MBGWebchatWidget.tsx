import { useEffect } from "react";

export default function MBGWebchatWidget() {
  useEffect(() => {
    const channelKey = import.meta.env.VITE_MBG_CHANNEL_KEY;

    if (!channelKey) {
      console.warn(
        "[MBGWebchatWidget] VITE_MBG_CHANNEL_KEY is not set — the MBG webchat widget will not load. Add it to your .env file."
      );
      return;
    }

    const existing = document.querySelector('script[data-mbg-webchat="true"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = `https://chatbotbe.digitalmbg.com/webchat/embed.js?channelKey=${encodeURIComponent(
      channelKey
    )}`;
    script.async = true;
    script.setAttribute("data-mbg-webchat", "true");
    document.body.appendChild(script);
  }, []);

  return null;
}