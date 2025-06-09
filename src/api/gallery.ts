export interface GalleryImage {
    id: number;
    path: string;
    alt_text: string;
    path_url: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface GalleryData {
    title: string;
    description: string;
    images: GalleryImage[];
  }
  
  export async function getGalleryData(): Promise<GalleryData> {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
    try {
      const response = await fetch(`${BASE_URL}/user/gallery`, {
        cache: 'no-store',
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch gallery data');
      }
  
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error('Gallery API Error:', error);
      throw error;
    }
  }
  