import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { format, parse } from "date-fns";
import { pdfTypography, pdfContainers, pdfUtils } from "@/lib/pdfStyles";

export const InvoiceTermsPdf: React.FC<InvoiceTerms> = ({
  invoiceNumber,
  issueDate,
  dueDate,
}) => {
  const formatDate = (dateValue: string | null | undefined): string => {
    if (!dateValue) return "";
    try {
      // If it's already a Date object string representation, parse it
      if (typeof dateValue === "string" && dateValue.includes("GMT")) {
        return format(new Date(dateValue), "do MMM yyyy");
      }
      // Try to parse as ISO string or other formats
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
    <View style={pdfContainers.invoiceTerms}>
      <View style={{ flex: 1 }}>
        <Text style={pdfTypography.title}>Invoice NO</Text>
        <Text style={pdfTypography.subTitle}>{invoiceNumber}</Text>
      </View>
      <View
        style={{
          ...pdfUtils.flexRowBetween,
          paddingRight: 20,
          paddingLeft: 100,
          flex: 1,
        }}
      >
        <View>
          <Text style={pdfTypography.title}>Issued</Text>
          <Text style={pdfTypography.subTitle}>
            {formatDate(issueDate)}
          </Text>
        </View>
        <View>
          <Text style={pdfTypography.title}>Due Date</Text>
          <Text style={pdfTypography.subTitle}>
            {formatDate(dueDate)}
          </Text>
        </View>
      </View>
    </View>
  );
};

