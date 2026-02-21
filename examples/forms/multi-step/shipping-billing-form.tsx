import { MultiStepForm } from "@/registry/bitsandpieces/forms/multi-step-form";

const ShippingBillingForm = () => {
  return (
    <MultiStepForm
      formTitle="Checkout"
      formDescription="Enter your shipping and billing details"
      steps={[
        {
          title: "Shipping",
          description: "Where should we deliver?",
          fields: [
            {
              fieldName: "shippingName",
              fieldLabel: "Full Name",
              placeholder: "Jane Doe",
              validate: (value) => (!value.trim() ? "Name is required" : null),
            },
            {
              fieldName: "shippingAddress",
              fieldLabel: "Shipping Address",
              placeholder: "456 Oak Avenue, Apt 12",
              validate: (value) =>
                !value.trim() ? "Address is required" : null,
            },
            {
              fieldName: "shippingCity",
              fieldLabel: "City",
              placeholder: "New York",
              validate: (value) => (!value.trim() ? "City is required" : null),
            },
            {
              fieldName: "shippingZip",
              fieldLabel: "Zip Code",
              placeholder: "10001",
              validate: (value) =>
                !value.trim() ? "Zip code is required" : null,
            },
          ],
        },
        {
          title: "Payment",
          description: "Enter your payment information",
          fields: [
            {
              fieldName: "creditCard",
              fieldLabel: "Card Number",
              placeholder: "0000 0000 0000 0000",
              validate: (value) =>
                value.replace(/\s/g, "").length < 13
                  ? "Please enter a valid card number"
                  : null,
            },
            {
              fieldName: "expirationDate",
              fieldLabel: "Expiry Date",
              placeholder: "MM/YY",
              type: "month",
              validate: (value) => (!value ? "Expiry date is required" : null),
            },
            {
              fieldName: "cvv",
              fieldLabel: "CVV",
              placeholder: "123",
              validate: (value) =>
                !/^\d{3,4}$/.test(value) ? "Enter a 3 or 4 digit CVV" : null,
            },
          ],
        },
        {
          title: "Billing",
          fields: [
            {
              fieldName: "billingAddress",
              fieldLabel: "Billing Address",
              placeholder: "Same as shipping or enter new",
              fieldDescription: "Leave blank to use the shipping address",
            },
          ],
        },
      ]}
      onFinalSubmit={(data) => {
        console.log("Order placed:", data);
      }}
    />
  );
};

export default ShippingBillingForm;
