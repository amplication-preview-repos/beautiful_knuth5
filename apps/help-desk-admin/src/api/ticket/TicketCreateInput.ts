import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AttachmentCreateNestedManyWithoutTicketsInput } from "./AttachmentCreateNestedManyWithoutTicketsInput";
import { CommentCreateNestedManyWithoutTicketsInput } from "./CommentCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  description?: string | null;
  title?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  attachments?: AttachmentCreateNestedManyWithoutTicketsInput;
  comments?: CommentCreateNestedManyWithoutTicketsInput;
};
