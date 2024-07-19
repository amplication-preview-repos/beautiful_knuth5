import { User } from "../user/User";
import { Attachment } from "../attachment/Attachment";
import { Comment } from "../comment/Comment";

export type Ticket = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  title: string | null;
  status?: "Option1" | null;
  user?: User | null;
  attachments?: Array<Attachment>;
  comments?: Array<Comment>;
};
