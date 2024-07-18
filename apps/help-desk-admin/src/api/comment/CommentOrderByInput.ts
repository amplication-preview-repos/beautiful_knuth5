import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  ticketId?: SortOrder;
  content?: SortOrder;
  userId?: SortOrder;
};
