import { UserData } from "angular2-token";

export interface TeamMember extends UserData {
  admin: boolean;
}
