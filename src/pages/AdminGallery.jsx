import { useState, useRef } from "react";
import AdminLayout from "../components/admin/layout/AdminLayout";
import galleryImages from "../data/galleryImages";
import {
    uploadGalleryImages,
    getGalleryImages,
    deleteGalleryImage
} from "../services/galleryService";

function AdminGallery() {
  const [images, setImages] = useState(galleryImages);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
      title: file.name,
    }));

    setSelectedImages((prev) => [...prev, ...previews]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = [...e.dataTransfer.files];

    const imageFiles = files.filter((file) =>
      file.type.startsWith("image/")
    );

    if (!imageFiles.length) return;

    const previews = imageFiles.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
      title: file.name,
    }));

    setSelectedImages((prev) => [...prev, ...previews]);
  };

  // Step 2: Temporary upload function
  const handleUpload = async () => {

    try {

        const files = selectedImages.map(img => img.file);

        await uploadGalleryImages(files);

        alert("Images uploaded successfully!");

        setSelectedImages([]);

        loadGallery();

    }

    catch(err){

        console.error(err);

        alert("Upload failed.");

    }

};

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#0B6E4F]">
              Gallery Management
            </h1>
            <p className="text-gray-500 mt-2">
              Upload and organize website gallery images.
            </p>
          </div>

          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-[#0d7a4b] text-white px-6 py-3 rounded-xl hover:bg-[#0b6b41] transition"
          >
            + Upload Images
          </button>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            hidden
            onChange={handleImageSelect}
          />
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search gallery..."
          className="
            w-full
            border
            rounded-xl
            p-4
            outline-none
            focus:ring-2
            focus:ring-[#0B6E4F]
          "
        />

        {/* Upload Box */}
        <div
          onDragEnter={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setDragActive(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            handleDrop(e);
            setDragActive(false);
          }}
          className={`
            border-2
            border-dashed
            rounded-2xl
            p-16
            text-center
            transition-all
            duration-300
            cursor-pointer
            ${
              dragActive
                ? "border-green-600 bg-green-50 scale-[1.02]"
                : "border-gray-300 bg-white"
            }
          `}
        >
          {selectedImages.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mt-8 mb-8">
              {selectedImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-white rounded-xl overflow-hidden shadow"
                  onClick={(e) => e.stopPropagation()} // Prevents triggering upload dialog when clicking remove
                >
                  <img
                    src={image.preview}
                    className="h-52 w-full object-cover"
                    alt={image.title}
                  />
                  <div className="p-4">
                    <p className="truncate">{image.title}</p>
                    <button
                      onClick={() =>
                        setSelectedImages(
                          selectedImages.filter((i) => i.id !== image.id)
                        )
                      }
                      className="mt-3 w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <h2 className="text-2xl font-bold text-[#0B6E4F]">
            Drag & Drop Images
          </h2>
          <p className="text-gray-500 mt-3">or click Upload Images above</p>
        </div>

        {/* Step 1: Upload Selected Images Button */}
        {selectedImages.length > 0 && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleUpload}
              className="
                bg-[#0B6E4F]
                text-white
                px-8
                py-3
                rounded-xl
                hover:bg-green-700
                transition
              "
            >
              Upload Selected Images
            </button>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                overflow-hidden
                hover:shadow-xl
                transition
              "
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold truncate">{image.title}</h3>

                <div className="flex gap-3 mt-5">
                  <button
                    className="
                      flex-1
                      bg-blue-500
                      text-white
                      py-2
                      rounded-lg
                      hover:bg-blue-600
                      transition
                    "
                  >
                    View
                  </button>

                  <button
                    className="
                      flex-1
                      bg-red-500
                      text-white
                      py-2
                      rounded-lg
                      hover:bg-red-600
                      transition
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminGallery;