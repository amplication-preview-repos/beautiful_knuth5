import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type AttachmentUpdateInput = {
  fileName?: string | null;
  fileType?: string | null;
  ticket?: TicketWhereUniqueInput | null;
};
