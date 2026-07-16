const API =
  import.meta.env.VITE_API_URL ||
  "https://cgsa-website.onrender.com";

export async function uploadGalleryImages(files) {

    const formData = new FormData();

    files.forEach(file => {
        formData.append("images", file);
    });

    const response = await fetch(
        `${API}/api/gallery/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error("Upload failed");
    }

    return response.json();
}

export async function getGalleryImages() {

    const response = await fetch(
        `${API}/api/gallery`
    );

    return response.json();
}

export async function deleteGalleryImage(id) {

    const response = await fetch(
        `${API}/api/gallery/${id}`,
        {
            method: "DELETE",
        }
    );

    return response.json();
}