import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AttachmentUpdateManyWithoutTicketsInput } from "./AttachmentUpdateManyWithoutTicketsInput";
import { CommentUpdateManyWithoutTicketsInput } from "./CommentUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  description?: string | null;
  title?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  attachments?: AttachmentUpdateManyWithoutTicketsInput;
  comments?: CommentUpdateManyWithoutTicketsInput;
};
