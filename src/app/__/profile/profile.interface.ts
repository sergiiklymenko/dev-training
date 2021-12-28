export interface ProfileInterface {
  name: {
    first: string,
    last: string
  };
  dob: {
    date: string
  };
  picture: {
    large: string,
    thumbnail: string
  };
  id?: {
    value: string
  };

  [key: string]: any;
  hasOwnProperty: (arg0: string) => any;
}
