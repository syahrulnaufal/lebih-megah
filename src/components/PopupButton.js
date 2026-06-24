import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// Cara pakai:
// Di halaman lain:
// const [showModal, setShowModal] = useState(false);
// <button onClick={() => setShowModal(true)}>Trigger</button>
// <PopupButton showModal={showModal} setShowModal={setShowModal} label="Daftar" items={[{nama: 'Lomba 1', link: '/form/daftar-lomba-1'}, ...]} />

const PopupButton = ({ showModal, setShowModal, label = "Pilih", items = [] }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, setShowModal]);

  if (!showModal) return null;

  // Ensure the modal-root exists in the HTML
  let modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  }

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity z-[99998] pointer-events-auto"
        onClick={() => setShowModal(false)}
      />
      {/* Modal di tengah layar */}
      <div
        ref={modalRef}
        className="bg-[#0b0b0c]/95 border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-8 max-w-sm w-[90%] relative animate-fade-in flex flex-col items-center z-[100000] pointer-events-auto"
        style={{ transform: 'translate(0, 0)' }}
      >
        <button
          className="absolute top-4 right-4 text-white/40 hover:text-neon-orange text-2xl font-light focus:outline-none transition-colors"
          onClick={() => setShowModal(false)}
          aria-label="Tutup"
        >
          &times;
        </button>
        <h3 className="text-lg md:text-xl font-bold mb-6 text-gradient-section text-center font-jakarta uppercase tracking-wider">
          Pilih {label || "Opsi"}
        </h3>
        <ul className="w-full space-y-3">
          {items.map((item) => {
            const isExternal = item.link.startsWith("http");
            const btnClass = "w-full py-3.5 px-6 text-xs md:text-sm font-bold text-white bg-white/5 border border-white/10 hover:border-neon-orange/45 hover:bg-gradient-to-r hover:from-neon-orange/20 hover:to-neon-purple/20 rounded-2xl shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-neon-orange/50 transition-all duration-300 font-jakarta uppercase tracking-wider text-center";
            
            return (
              <li key={item.nama}>
                {isExternal ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnClass}
                  >
                    {item.nama}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setShowModal(false)}
                    className={btnClass}
                  >
                    {item.nama}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default PopupButton;
