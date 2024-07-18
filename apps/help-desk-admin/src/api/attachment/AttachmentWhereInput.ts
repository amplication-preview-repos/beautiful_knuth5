import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type AttachmentWhereInput = {
  id?: StringFilter;
  fileName?: StringNullableFilter;
  fileType?: StringNullableFilter;
  ticket?: TicketWhereUniqueInput;
};
