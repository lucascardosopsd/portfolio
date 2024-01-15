interface langProps {
  pt: string;
  en: string;
}

export interface HeroDataProps {
  leftTitle: langProps;
  leftDescription: langProps;
  rightTitle: langProps;
  rightDescription: langProps;
  highlights: [
    {
      title: string;
      subTitle: langProps;
    }
  ];
  pic: {
    asset: {
      url: string;
    };
  };
}
