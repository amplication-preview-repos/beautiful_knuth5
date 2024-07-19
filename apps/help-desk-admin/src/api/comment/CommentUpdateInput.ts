import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  ticket?: TicketWhereUniqueInput | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
