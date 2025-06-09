export interface HomeHero {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image_desktop_url: string;
    image_mobile_url: string;
  }

  export interface ProductBanner {
    desktop_image: string;
    mobile_image: string;
  }

  export interface CompanyIntro {
    title: string;
    description: string;
    video_url: string;
    subtitle?: string | null;
  }
  
  export interface HomeData {
    home_hero: HomeHero[];
    product_banner: ProductBanner;
    company_intro: CompanyIntro;
  }
  
  export async function getHomeData(): Promise<HomeData> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/home`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch home data');
    const json = await res.json();
    return json.data;
  }
  