import { MultiStepForm } from "@/registry/bitsandpieces/forms/multi-step-form";

const PersonalDetailsMultiStepForm = () => {
  return (
    <MultiStepForm
      formTitle="Personal Details"
      formDescription="Complete your profile information"
      steps={[
        {
          title: "Contact",
          description: "How can we reach you?",
          fields: [
            {
              fieldName: "phone",
              fieldLabel: "Phone Number",
              placeholder: "+1 (555) 000-0000",
              type: "tel",
              validate: (value) =>
                value.trim().length < 7
                  ? "Please enter a valid phone number"
                  : null,
            },
            {
              fieldName: "dob",
              fieldLabel: "Date of Birth",
              type: "date",
              validate: (value) =>
                !value ? "Please select your date of birth" : null,
            },
          ],
        },
        {
          title: "Address",
          description: "Where are you located?",
          fields: [
            {
              fieldName: "address",
              fieldLabel: "Street Address",
              placeholder: "123 Main St",
              validate: (value) =>
                !value.trim() ? "Address is required" : null,
            },
            {
              fieldName: "city",
              fieldLabel: "City",
              placeholder: "San Francisco",
              validate: (value) => (!value.trim() ? "City is required" : null),
            },
            {
              fieldName: "state",
              fieldLabel: "State",
              placeholder: "CA",
            },
            {
              fieldName: "zip",
              fieldLabel: "Zip Code",
              placeholder: "94103",
              validate: (value) =>
                !value.trim() ? "Zip code is required" : null,
            },
          ],
        },
        {
          title: "Country",
          fields: [
            {
              fieldName: "country",
              fieldLabel: "Country",
              placeholder: "United States",
              fieldDescription: "Select your country of residence",
              validate: (value) =>
                !value.trim() ? "Country is required" : null,
            },
          ],
        },
      ]}
      onFinalSubmit={(data) => {
        console.log("Personal details submitted:", data);
      }}
    />
  );
};

export default PersonalDetailsMultiStepForm;
