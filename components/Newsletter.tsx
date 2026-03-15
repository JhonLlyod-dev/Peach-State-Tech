// pages/index.tsx or a component file
'use client';
import Script from "next/script";

export default function NewsletterForm() {
  return (
    <div>
      {/* Load Beehiiv script */}
      <Script
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="afterInteractive"
      />

      {/* Embed the newsletter form */}
      <iframe
        src="https://subscribe-forms.beehiiv.com/e87454c8-47dc-484e-a882-5b4b2a712e52"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "332px",
          height: "115px",
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