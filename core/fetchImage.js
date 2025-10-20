// Function to fetch product images using CORS proxy
export async function fetchProductImage(url) {
  try {
    // Use cors-anywhere proxy service
    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) throw new Error("Network response was not ok");
    
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    // Platform-specific image selectors
    let imageUrl = '';
    if (url.includes('amazon')) {
      imageUrl = doc.querySelector('#landingImage')?.src || 
                doc.querySelector('#imgTagWrapperId img')?.src;
    } else if (url.includes('flipkart')) {
      imageUrl = doc.querySelector('._396cs4')?.src || 
                doc.querySelector('.CXW8mj')?.img?.src;
    }

    if (!imageUrl) throw new Error("Image not found");
    
    // Convert relative URLs to absolute
    return new URL(imageUrl, url).href;
  } catch (error) {
    console.error("Image fetch failed:", error);
    return null;
  }
}
