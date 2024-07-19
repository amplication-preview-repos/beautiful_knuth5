import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  ticket?: TicketWhereUniqueInput | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
