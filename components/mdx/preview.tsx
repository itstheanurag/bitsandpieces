import * as React from "react";

interface ComponentPreviewProps {
  children: React.ReactNode;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  children,
}) => {
  return (
    <div className="flex items-center justify-center bg-card rounded-lg border h-64">
      <React.Suspense
        fallback={
          <div className="text-muted-foreground flex items-center justify-center text-sm">
            Loading...
          </div>
        }
      >
        {children}
      </React.Suspense>
    </div>
  );
};
