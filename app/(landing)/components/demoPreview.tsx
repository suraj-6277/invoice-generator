import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Ripple",
    companyAddress: "Montgomery Street",
    companyCity: "San Francisco",
    companyState: "California",
    companyCountry: "USA",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "",
    companyZip: "94111",
    email: "info@ripple.com",
  },
  yourDetails: {
    yourName: "Suraj Jadhav",
    yourAddress: "Baner",
    yourCity: "Pune",
    yourState: "Maharashtra",
    yourCountry: "India",
    yourLogo: "/suraj.png",
    yourEmail: "surajjadhav071204@gmail.com",
    yourTaxId: "",
    yourZip: "411033",
  },
  paymentDetails: {
    bankName: "Axis Bank",
    accountNumber: "1234567890",
    accountName: "SURAJ",
    routingCode: "123456",
    swiftCode: "AXISINBB1234",
    ifscCode: "UTIB0000000",
    currency: "INR",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 225000,
        qty: 0,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 22000,
        qty: 0,
      },
    ],
    currency: "INR",
  },
};
export default DemoPreview;
