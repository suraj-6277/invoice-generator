import { NewInvoiceForm } from "@/app/new/component/NewInvoiceForm";

export const dynamic = 'force-dynamic';

const Page = () => (
  <div className="min-h-screen overflow-y-auto h-full flex items-center md:flex-row flex-col-reverse">
    <NewInvoiceForm />
  </div>
);

export default Page;
