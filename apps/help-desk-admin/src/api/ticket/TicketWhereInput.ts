import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AttachmentListRelationFilter } from "../attachment/AttachmentListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  title?: StringNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
  attachments?: AttachmentListRelationFilter;
  comments?: CommentListRelationFilter;
};
