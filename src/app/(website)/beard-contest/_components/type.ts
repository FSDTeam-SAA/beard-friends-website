// types/contest.ts  (recommended)  or just at top of component file

export interface CloudinaryAsset {
  public_id: string;
  url: string;
}

export interface User {
  _id: string;
  name: string;
  avatar: CloudinaryAsset;
}

export interface Participant {
  _id: string;
  user: User;
  photo: CloudinaryAsset;
  description: string;
  votes: number;
  frame: string;           // e.g. "gold", "silver", etc.
  submittedAt: string;     // ISO date string
}

export interface Contest {
  _id: string;
  title: string;
  startDate: string;       // ISO
  endDate: string;         // ISO
}

export interface ContestGroup {
  contest: Contest;
  participants: Participant[];
}

export interface ContestApiResponse {
  success: boolean;
  message: string;
  data: ContestGroup[];
}