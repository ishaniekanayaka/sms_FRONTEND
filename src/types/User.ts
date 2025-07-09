export interface User {
  name: string;
  email: string;
  password?: string; // password usually optional in frontend
  role?: "admin" | "student";
  phone?: string;
  address?: string;
  dateOfBirth?: string; // Frontend walata `Date` wenuwata `string` ekak
  profileImage?: string;
  isActive?: boolean;
  createdAt?: string;
}
