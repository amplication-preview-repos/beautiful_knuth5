import { Ticket } from "../ticket/Ticket";

export type Attachment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string | null;
  fileType: string | null;
  ticket?: Ticket | null;
};
