"use client";

import Breadcrumb from "@/components/elements/Breadcrumbs";
import Button from "@/components/elements/Button";
import Card from "@/components/elements/Card";
import SaveIcon from "@/components/elements/Icons/SaveIcon";
import { Input } from "@/components/elements/Input";
import TableUser from "@/components/elements/Table/TableUser";
import React, { useState } from "react";

const Settings = () => {
  const [qrImageURL, setQrImageUrl] = useState<string>(
    "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=https%3A%2F%2Fdr.dk"
  );
  const handleChange = (val: string) => {
    console.log(val);
    const imageUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${val}`;
    setQrImageUrl(imageUrl);
  };
  return (
    <>
      <Breadcrumb pageName="Settings" />

      <div className="grid gap-8">
        <Card title="Nova Circle">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <Input
                  label="Username"
                  type="text"
                  placeholder={"Please insert your username"}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder={"Please insert your password"}
                />
                <Input
                  label="Confirm password"
                  type="password"
                  placeholder={"Please insert your confirm password"}
                />
              </div>
              <div className="flex justify-end">
                <Button color="primary" className="px-20">
                  {" "}
                  <SaveIcon color="white" className="h-5" /> Save
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <Input
                label="Profile Link"
                type="text"
                placeholder={"Please insert your profile link"}
                value={"https://novacircle.com/spots/hotels/nameofbusiness"}
                required
                onChange={(e) => handleChange(e.target.value)}
              />

              <div className="flex flex-col items-end gap-2">
                <div className="w-full bg-greyLight rounded-lg p-4 flex justify-center">
                  <img
                    id="qr-code"
                    className="h-full"
                    src={qrImageURL}
                    alt="QR code"
                  />
                </div>
                <Button color="secondary">Download QR Code</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Users">
          <TableUser />
        </Card>
      </div>
    </>
  );
};

export default Settings;
