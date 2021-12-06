import { UserProfile } from './user-profile';

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile:
   UserProfile;
}
