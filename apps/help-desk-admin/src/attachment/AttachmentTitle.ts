import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "fileName";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.fileName?.toString() || String(record.id);
};
