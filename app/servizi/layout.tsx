import Packages from "@/components/sections/packages";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Packages />
    </>
  );
}
