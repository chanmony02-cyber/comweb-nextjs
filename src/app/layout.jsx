import "@/styles/index.css";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: {
    default: "VHT",
    template: "%s | VHT",
  },
  description: "VHT Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className=" sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow"
        >
          Skip to content
        </a>
        <MainLayout>
          <main id="main" className="flex-1">
            {children}
          </main>
        </MainLayout>
      </body>
    </html>
  );
}
