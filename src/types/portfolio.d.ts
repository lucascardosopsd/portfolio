export interface PortfolioDataProps {
  order: number;
  title: {
    pt: string;
    en: string;
  };
  subTitle: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
  link: string;
  type: string;
}
