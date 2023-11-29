"use client";

import { useState, useEffect } from "react";

import Loader from "@/components/elements/Loading";
import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  return (
    <>
      <div className="bg-greyLightest">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex h-screen overflow-hidden">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />

              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
