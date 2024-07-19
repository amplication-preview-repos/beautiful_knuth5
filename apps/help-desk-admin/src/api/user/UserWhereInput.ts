import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
  comments?: CommentListRelationFilter;
};
