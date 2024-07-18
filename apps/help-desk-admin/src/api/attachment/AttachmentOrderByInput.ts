import { SortOrder } from "../../util/SortOrder";

export type AttachmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileName?: SortOrder;
  fileType?: SortOrder;
  ticketId?: SortOrder;
};
