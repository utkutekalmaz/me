import MainLayout from "@/components/MainLayout/MainLayout";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <MainLayout>
      <div id="blogpost">{children}</div>
    </MainLayout>
  );
}
