import { format } from "date-fns";
import { ChevronDown } from "lucide-react";

export const InvoiceTermsPreview: React.FC<
  InvoiceTerms & { onClick?: (step: string) => void }
> = ({ invoiceNumber, issueDate, dueDate, onClick }) => {
  const formatDate = (dateValue: string | null | undefined): string => {
    if (!dateValue) return "";
    try {
      if (typeof dateValue === "string" && dateValue.includes("GMT")) {
        return format(new Date(dateValue), "do MMM yyyy");
      }
      const parsedDate = new Date(dateValue);
      if (!isNaN(parsedDate.getTime())) {
        return format(parsedDate, "do MMM yyyy");
      }
      return "";
    } catch {
      return "";
    }
  };

  return (
    <div
      className="border-b py-4 px-10 grid grid-cols-2 justify-between border-dashed group cursor-pointer relative"
      onClick={() => onClick && onClick("5")}
    >
      {!!onClick && (
        <>
          <ChevronDown className="animate-pulse w-5 h-5 text-accent rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-accent -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-accent rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-accent -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
        </>
      )}
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase">
          Invoice NO
        </p>
        <p className="font-medium text-xs">{invoiceNumber}</p>
      </div>
      <div className="flex items-center justify-between pl-10">
        <div>
          <p className="text-[11px] text-neutral-400 font-semibold uppercase">
            Issued
          </p>
          <p className="font-medium text-xs">
            {formatDate(issueDate)}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-neutral-400 font-semibold uppercase text-right">
            Due Date
          </p>
          <p className="font-medium text-xs">
            {formatDate(dueDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

