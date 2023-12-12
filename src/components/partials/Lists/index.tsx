"use client";

import Breadcrumb from "@/components/elements/Breadcrumbs";
import Button from "@/components/elements/Button";
import Card from "@/components/elements/Card";
import AddIcon from "@/components/elements/Icons/AddIcon";
import PencilIcon from "@/components/elements/Icons/PencilIcon";
import RecycleBinIcon from "@/components/elements/Icons/RecycleBinIcon";
import Table from "@/components/elements/Table/Table";
import React, { useState } from "react";

const Lists = () => {
  const [dataStart, setDataStart] = useState(0);

  const listColumns = [
    {
      header: "No",
      accessor: "no",
      thClassName: "",
      tdClassName: "",
      width: " ",
    },
    {
      header: "Name",
      accessor: "name",
      thClassName: "",
      tdClassName: "",
      width: " ",
    },
    {
      header: "Created At",
      accessor: "created_at",
      thClassName: "",
      tdClassName: "",
      width: " ",
    },

    {
      header: "Action",
      accessor: "action",
      thClassName: "text-right",
      tdClassName: "flex justify-end",
      width: "",
    },
  ];

  const listRows = Array.from({ length: 11 }, (_, index) => index + 1).map(
    (item: any, idx: number) => {
      return {
        no: idx + 1,
        name: "List " + item,
        created_at: `${item} Des 2024`,
        action: (
          <div className="flex gap-2">
            <Button size="small" color="secondary">
              <PencilIcon className="w-4" /> Edit
            </Button>
            <Button size="small" color="dangerOutline">
              <RecycleBinIcon className="w-4" /> Remove
            </Button>
          </div>
        ),
      };
    }
  );

  return (
    <>
      <Breadcrumb pageName={"Lists"} />
      <Card
        title="Lists Table"
        addElementOnHeader={
          <Button color="primary">
            {" "}
            <AddIcon className="w-4" color="white" /> Add List
          </Button>
        }
      >
        <Table
          columns={listColumns}
          rows={listRows}
          setDataStart={setDataStart}
          totalData={listRows.length}
        />
      </Card>
    </>
  );
};

export default Lists;
