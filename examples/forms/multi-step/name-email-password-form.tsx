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

export default NameEmailPasswordForm;
