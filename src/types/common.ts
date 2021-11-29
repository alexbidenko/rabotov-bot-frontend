export type CityType = {
  cityName: string;
  id: string;
};

export type CategoryType = {
  categoryName: string;
  id: string;
};

export type UserType = {
  username: string;
  exp: number;
  origIat: number;
};

export type RequestType = {
  id: number;
  vacancyName: string;
  duties: string;
  requirements: string;
  conditions: string;
  payLevel: string;
  creationDate: string;
  recruiterReward: number;
  active: boolean;
};
