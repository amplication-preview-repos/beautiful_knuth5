import { JsonValue } from "type-fest";
import { Ticket } from "../ticket/Ticket";
import { Comment } from "../comment/Comment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  tickets?: Array<Ticket>;
  comments?: Array<Comment>;
};
