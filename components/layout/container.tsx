export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="max-w-7xl mx-auto px-6 py-3">{children}</div>;
};
