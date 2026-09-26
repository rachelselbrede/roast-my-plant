import { useRef, useState } from 'react'

// Drag-and-drop / click-to-upload area. On mobile, the file picker
// offers the camera too (thanks to accept="image/*").
export default function PhotoUpload({ previewUrl, onFileSelected }) {
  const inputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  function handleFiles(files) {
    const file = files?.[0]
    if (file && file.type.startsWith('image/')) {
      onFileSelected(file)
    }
  }

  function handleDrop(event) {
    event.preventDefault()
    setIsDragging(false)
    handleFiles(event.dataTransfer.files)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          inputRef.current?.click()
        }
      }}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`relative flex aspect-square w-full cursor-pointer items-center justify-center overflow-hidden rounded-3xl border-4 border-dashed transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-leaf-light ${
        isDragging
          ? 'border-leaf bg-leaf-light/20'
          : 'border-leaf/40 bg-white/70 hover:border-leaf hover:bg-white'
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          handleFiles(e.target.files)
          e.target.value = '' // allow re-selecting the same file
        }}
      />

      {previewUrl ? (
        <>
          <img
            src={previewUrl}
            alt="Your plant, about to be roasted"
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow">
            Change photo
          </span>
        </>
      ) : (
        <div className="p-6 text-center">
          <div className="text-5xl" aria-hidden="true">📸</div>
          <p className="mt-3 font-display text-xl font-semibold">
            Drop your plant here
          </p>
          <p className="mt-1 text-sm text-ink/70">
            or tap to upload / snap a photo
          </p>
        </div>
      )}
    </div>
  )
}
