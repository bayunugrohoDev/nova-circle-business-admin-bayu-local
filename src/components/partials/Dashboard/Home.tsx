"use client";

import React from "react";

import Breadcrumb from "../../elements/Breadcrumbs";
import ChartOne from "@/components/elements/Carts/ChartOne";
import Card from "@/components/elements/Card";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Dashboard" />

      <div className="grid grid-cols-2 gap-8">
        <ChartOne
          series={[
            {
              name: "Total Visit",
              data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },
          ]}
        />
        <ChartOne
          series={[
            {
              name: "Total Click",
              data: [11, 1, 2, 7, 13, 12, 27, 11, 24, 12, 20, 25],
            },
          ]}
        />
        <Card
          title="Lists"
          addElementOnHeader={
            <Link href={"/lists"} className="text-xs underline text-greyDarker">
              See All
            </Link>
          }
        >
          <div className="flex flex-col">
            <div className="grid grid-cols-5 rounded-sm bg-gray-2  sm:grid-cols-5">
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  No
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Name
                </h5>
              </div>
            </div>
            {Array.from({ length: 5 }, (_, index) => index + 1).map(
              (item: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className={`grid grid-cols-5 sm:grid-cols-5 border-b border-stroke `}
                  >
                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="hidden text-greyDarkest  sm:block">
                        {item}
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="hidden text-greyDarkest  sm:block">
                        List {item}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Card>
        <Card
          title="Recommendations"
          addElementOnHeader={
            <Link
              href={"/recomendations"}
              className="text-xs underline text-greyDarker"
            >
              See All
            </Link>
          }
        >
          <div className="flex flex-col">
            <div className="grid grid-cols-5 rounded-sm bg-gray-2  sm:grid-cols-5">
              <div className="p-2.5 text-center xl:p-5 col-span-1">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  No
                </h5>
              </div>
              <div className="p-2.5 text-left xl:p-5 col-span-4">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Name
                </h5>
              </div>
            </div>
            {Array.from({ length: 5 }, (_, index) => index + 1).map(
              (item: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className={`grid grid-cols-5 sm:grid-cols-5 border-b border-stroke `}
                  >
                    <div className="flex items-center justify-center p-2.5 xl:p-5 col-span-1">
                      <p className="hidden text-greyDarkest  sm:block">
                        {item}
                      </p>
                    </div>
                    <div className="flex items-center justify-left p-2.5 xl:p-5 col-span-4">
                      <p className="hidden text-greyDarkest  sm:block">
                        Recommendation {item}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Home;
