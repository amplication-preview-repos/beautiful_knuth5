import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type AttachmentCreateInput = {
  fileName?: string | null;
  fileType?: string | null;
  ticket?: TicketWhereUniqueInput | null;
};
