"use client";
import { MultiStepForm } from "@/registry/bitsandpieces/forms/multi-step-form";

const NameEmailPasswordForm = () => {
  return (
    <MultiStepForm
      formTitle="Multi Step Form"
      steps={[
        {
          fieldName: "name",
          fieldLabel: "Name",
          fieldDescription: "Enter your name",
        },
        {
          fieldName: "email",
          fieldLabel: "Email",
          fieldDescription: "Enter your email",
        },
        {
          fieldName: "password",
          fieldLabel: "Password",
          fieldDescription: "Enter your password",
        },
      ]}
      onFinalSubmit={(data) => {
        console.log("Submitted the final code", data);
      }}
    />
  );
};

const ShippingBillingForm = () => {
  return (
    <MultiStepForm
      formTitle="Multi Step Form"
      steps={[
        {
          fieldName: "name",
          fieldLabel: "Name",
          fieldDescription: "Enter your name",
        },
        {
          fieldName: "email",
          fieldLabel: "Email",
          fieldDescription: "Enter your email",
        },
        {
          fieldName: "password",
          fieldLabel: "Password",
          fieldDescription: "Enter your password",
        },
      ]}
      onFinalSubmit={(data) => {
        console.log("Submitted the final code", data);
      }}
    />
  );
};

const PersonalDetailsMultiStepForm = () => {
  return (
    <MultiStepForm
      formTitle="Multi Step Form"
      steps={[
        {
          fieldName: "phone",
          fieldLabel: "Phone",
          fieldDescription: "Enter your phone number",
        },
        {
          fieldName: "address",
          fieldLabel: "Address",
          fieldDescription: "Enter your address",
        },
        {
          fieldName: "city",
          fieldLabel: "City",
          fieldDescription: "Enter your city",
        },
        {
          fieldName: "state",
          fieldLabel: "State",
          fieldDescription: "Enter your state",
        },
        {
          fieldName: "zip",
          fieldLabel: "Zip",
          fieldDescription: "Enter your zip",
        },
        {
          fieldName: "country",
          fieldLabel: "Country",
          fieldDescription: "Enter your country",
        },
      ]}
      onFinalSubmit={(data) => {
        console.log("Submitted the final code", data);
      }}
    />
  );
};

export {
  NameEmailPasswordForm,
  ShippingBillingForm,
  PersonalDetailsMultiStepForm,
};
