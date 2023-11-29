import Home from "@/components/partials/Dashboard/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova | Business Dashboard",
  description: "This is Home Blog page for Nova",
  // other metadata
};

export default async function Page() {
  return (
    <>
      <Home />
    </>
  );
}
