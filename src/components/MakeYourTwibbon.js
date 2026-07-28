import React, { useState, useCallback, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import SubpageHeader from './common/SubpageHeader';
import SectionTitle from './common/SectionTitle';
import { Upload, Download, ZoomIn, ZoomOut, Image as ImageIcon } from 'lucide-react';
import '../App.css';

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

async function getCroppedImg(imageSrc, pixelCrop, twibbonSrc) {
  const image = await createImage(imageSrc);
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Standardize the output size, e.g. 1080x1080
  const twibbonSize = 1080;
  canvas.width = twibbonSize;
  canvas.height = twibbonSize;

  // Draw the cropped user image
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    twibbonSize,
    twibbonSize
  );

  // Try to draw the twibbon overlay on top if it exists
  try {
    const twibbon = await createImage(twibbonSrc);
    ctx.drawImage(twibbon, 0, 0, twibbonSize, twibbonSize);
  } catch (error) {
    console.warn("Twibbon overlay image not found or failed to load. Exporting only cropped photo.");
  }

  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      resolve(URL.createObjectURL(file));
    }, 'image/png', 1.0);
  });
}

const MakeYourTwibbon = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Default twibbon image path
  const twibbonSrc = '/images/twibbon.png';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const showResult = async () => {
    try {
      setIsGenerating(true);
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, twibbonSrc);
      
      // Trigger download
      const link = document.createElement('a');
      link.download = 'SwitchFest-Twibbon.png';
      link.href = croppedImage;
      link.click();
    } catch (e) {
      console.error(e);
      alert('Terjadi kesalahan saat membuat Twibbon. Pastikan gambar valid.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="text-white relative pt-28 pb-20 overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">
        
        {/* Subpage Header */}
        <SubpageHeader
          title="MAKE YOUR"
          accentTitle="TWIBBON"
          subtitle="Tunjukkan antusiasmemu! Pasang foto terbaikmu dengan bingkai (twibbon) resmi SwitchFest 2026 dan bagikan ke media sosial."
          categoryLabel="CAMPAIGN"
          backPath="/"
        />

        <div className="space-y-8 max-w-4xl mx-auto">
          <SectionTitle
            mainText="Upload &"
            accentText="Sesuaikan"
            center={true}
            size="text-2xl md:text-4xl"
          />

          <div className="glass-navy border border-[var(--color-primary-light)]/10 p-6 md:p-10 rounded-[2.5rem] shadow-xl space-y-8">
            
            {!imageSrc ? (
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-[var(--color-primary-light)]/30 bg-[var(--color-primary-light)]/5 rounded-3xl p-12 text-center h-[400px]">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary-light)]/10 flex items-center justify-center mb-4">
                  <ImageIcon className="w-10 h-10 text-[var(--color-primary-light)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-jakarta mb-2">Upload Foto Terbaikmu</h3>
                <p className="text-white/50 text-sm mb-6 max-w-sm">
                  Pilih foto rasio 1:1 atau persegi panjang untuk dipaskan ke dalam bingkai twibbon.
                </p>
                <label className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-light)] text-white font-bold uppercase tracking-widest rounded-full hover:bg-[var(--color-primary-light)]/90 transition-all shadow-[0_0_20px_var(--color-primary-light-20)]">
                  <Upload className="w-5 h-5" />
                  Pilih Foto
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">
                  {/* Cropper Component */}
                  <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    showGrid={false}
                  />
                  
                  {/* Twibbon Overlay */}
                  <div className="absolute inset-0 pointer-events-none z-10">
                    <img 
                      src={twibbonSrc} 
                      alt="Twibbon Overlay" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'; // Sembunyikan jika twibbon belum ada di folder public/images
                      }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <div className="max-w-md mx-auto space-y-6 bg-white/5 p-6 rounded-2xl border border-white/5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-white/70 font-jakarta">
                      <span className="flex items-center gap-2"><ZoomOut className="w-4 h-4" /> Zoom Out</span>
                      <span className="flex items-center gap-2">Zoom In <ZoomIn className="w-4 h-4" /></span>
                    </div>
                    <input
                      type="range"
                      value={zoom}
                      min={1}
                      max={3}
                      step={0.1}
                      aria-labelledby="Zoom"
                      onChange={(e) => {
                        setZoom(e.target.value);
                      }}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary-light)]"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setImageSrc(null)}
                      className="flex-1 py-3 px-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors font-jakarta text-sm font-bold"
                    >
                      Ganti Foto
                    </button>
                    <button
                      onClick={showResult}
                      disabled={isGenerating}
                      className="flex-1 py-3 px-4 bg-[var(--color-primary-light)] text-white rounded-xl hover:bg-[var(--color-primary-light)]/90 transition-colors font-jakarta text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_var(--color-primary-light-20)]"
                    >
                      {isGenerating ? (
                        <span className="animate-pulse">Memproses...</span>
                      ) : (
                        <>
                          <Download className="w-4 h-4" /> Download
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                <p className="text-center text-xs text-white/40 font-jakarta mt-4">
                  *Geser untuk mengatur posisi, gunakan slider untuk zoom.<br/>
                  Pastikan file <code className="text-white/60">twibbon.png</code> sudah diletakkan di dalam folder <code className="text-white/60">public/images/</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MakeYourTwibbon;
