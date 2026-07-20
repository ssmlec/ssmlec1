import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnquiryForm } from "@/components/enquiry-form";

export function EnquiryDialog({
  children,
  defaultCourse,
  title = "Enquire Now",
}: {
  children: ReactNode;
  defaultCourse?: string;
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Share your details and our career counselor will get in touch within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <EnquiryForm defaultCourse={defaultCourse} onDone={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
