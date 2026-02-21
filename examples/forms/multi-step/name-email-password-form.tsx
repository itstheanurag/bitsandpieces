import { MultiStepForm } from "@/registry/bitsandpieces/forms/multi-step-form/multi-step-form";

const NameEmailPasswordForm = () => {
  return (
    <MultiStepForm
      formTitle="Create Account"
      formDescription="Fill in your details to get started"
      steps={[
        {
          title: "Name",
          fields: [
            {
              fieldName: "name",
              fieldLabel: "Full Name",
              placeholder: "John Doe",
              fieldDescription: "Enter your full name",
              validate: (value) =>
                value.trim().length < 2
                  ? "Name must be at least 2 characters"
                  : null,
            },
          ],
        },
        {
          title: "Email",
          fields: [
            {
              fieldName: "email",
              fieldLabel: "Email Address",
              placeholder: "john@example.com",
              type: "email",
              fieldDescription: "We'll never share your email",
              validate: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                  ? null
                  : "Please enter a valid email address",
            },
          ],
        },
        {
          title: "Password",
          fields: [
            {
              fieldName: "password",
              fieldLabel: "Password",
              placeholder: "••••••••",
              type: "password",
              fieldDescription: "Must be at least 8 characters",
              validate: (value) =>
                value.length < 8
                  ? "Password must be at least 8 characters"
                  : null,
            },
          ],
        },
      ]}
      onFinalSubmit={(data) => {
        console.log("Account created:", data);
      }}
    />
  );
};

export default NameEmailPasswordForm;
