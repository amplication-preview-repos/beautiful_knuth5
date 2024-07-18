import { Ticket } from "../ticket/Ticket";
import { User } from "../user/User";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ticket?: Ticket | null;
  content: string | null;
  user?: User | null;
};
