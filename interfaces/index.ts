export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  price?: number | string;
  onClick?: () => void;
}
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}
