import { Input } from "@/components/ui/input";
import { cn } from "../../lib/utils";

interface FormInputProps {
  value: string;
  onChange: (val: string) => void;
  error?: string | null;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  id: string;
  ariaDescribedBy?: string;
}

function FormInput({
  value,
  onChange,
  placeholder,
  type,
  error,
  id,
  ariaDescribedBy,
}: FormInputProps) {
  return (
    <Input
      id={id}
      value={value}
      placeholder={placeholder ?? ""}
      type={type ?? "text"}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        "h-9 rounded-lg border-0 bg-muted/50 px-3.5 text-sm",
        "ring-1 ring-border/30",
        "placeholder:text-muted-foreground/40",
        "transition-all duration-200",
        "focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:bg-background focus-visible:shadow-sm focus-visible:shadow-primary/5",
        "hover:ring-border/50 hover:bg-muted/30",
        error &&
          "ring-destructive/40 bg-destructive/5 focus-visible:ring-destructive/40",
      )}
      aria-invalid={!!error}
      aria-describedby={ariaDescribedBy}
    />
  );
}

export { FormInput };
export type { FormInputProps };
