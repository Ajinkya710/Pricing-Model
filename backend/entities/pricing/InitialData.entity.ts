export interface InitialData {
  ProfileData: {
    id: string;
    status: PROFILE_STATUS;
  };
  InitialData: {
    Categories: {
      id: string;
      name: string;
      subCategories: {
        id: string;
        name: string;
      }[];
    }[];
    Segments: {
      id: string;
      name: string;
    }[];
    Brands: {
      id: string;
      name: string;
    }[];
  };
}

export enum PROFILE_STATUS {
  NOT_COMPLETE = 0,
  COMPLETE,
}
