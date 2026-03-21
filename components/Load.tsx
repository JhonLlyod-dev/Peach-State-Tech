export default function Load() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    }}>
      <style>{`
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loader {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 3.5px solid rgba(255, 183, 165, 0.2);
          border-top-color: #FFB7A5;
          animation: spin 0.75s cubic-bezier(0.55, 0.15, 0.45, 0.85) infinite;
        }
      `}</style>
      <div className="loader" />
    </div>
  );
}