export interface CsrImage {
    id: number;
    path: string;
    alt_text: string;
    path_url: string;
  }
  
  export interface CsrData {
    title: string;
    description: string;
    images: CsrImage[];
  }
  
  export async function getCsrData(): Promise<CsrData> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/csr`, {
      cache: 'no-store',
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch CSR data');
    }
  
    const json = await res.json();
    return json.data;
  }
  