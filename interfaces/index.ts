export interface CardProps {
  title: string;
  image?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}


export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}

