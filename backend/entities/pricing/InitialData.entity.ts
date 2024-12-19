import { Profiles } from "../profile/Profile.entity";

export interface InitialData {
  ProfileData: Profiles;
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
  AllProfiles: Partial<Profiles>[];
}

export enum PROFILE_STATUS {
  NOT_COMPLETE = 0,
  COMPLETE,
}
