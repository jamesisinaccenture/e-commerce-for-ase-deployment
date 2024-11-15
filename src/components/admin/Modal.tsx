import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IAdminModal {
  triggerClassName?: string;
  trigger: any;
  triggerSize?: any;
  children?: any;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}

export function Modal({
  triggerClassName,
  trigger = "Enter open button trigger",
  triggerSize,
  children,
  variant = "default",
}: IAdminModal) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          className={`${triggerClassName}`}
          size={triggerSize}
        >
          {trigger}
        </Button>
      </DialogTrigger>
      <DialogTitle></DialogTitle>
      <DialogDescription></DialogDescription>
      <DialogContent className="">{children}</DialogContent>
    </Dialog>
  );
}
