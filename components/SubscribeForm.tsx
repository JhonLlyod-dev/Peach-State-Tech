'use client';
import Script from "next/script";

export default function SubscribeForm() {
  return (
    <div>
      {/* Load Beehiiv embed script */}
      <Script
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="afterInteractive"
      />

      {/* Beehiiv subscribe form */}
      <iframe
        src="https://subscribe-forms.beehiiv.com/6cd74b38-1013-4afa-8f9c-e5837870220b"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "296px",
          height: "84px",
          margin: 0,
          borderRadius: "0px",
          backgroundColor: "transparent",
          boxShadow: "0 0 #0000",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}