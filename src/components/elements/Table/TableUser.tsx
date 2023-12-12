import Image from "next/image";
import Button from "../Button";
import PencilIcon from "../Icons/PencilIcon";
import RecycleBinIcon from "../Icons/RecycleBinIcon";

const brandData = [
  {
    logo: "/images/user-1.png",
    first_name: "Bayu",
    last_name: "Dwi",
    status: "Admin",
    email: "bayunugroho@gmail.com",
  },
  {
    logo: "/images/user-1.png",
    first_name: "Darul",
    last_name: "Bapak",
    status: "Admin",
    email: "bapakdarul@gmai;.com",
  },
];

const TableUser = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">Foto</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            First Name
          </h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Last Name
          </h5>
        </div>
        <div className="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">email</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            status
          </h5>
        </div>
        <div className="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Action
          </h5>
        </div>
      </div>

      {brandData.map((brand, key) => (
        <div
          className={`grid grid-cols-3 sm:grid-cols-6 ${
            key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }`}
          key={key}
        >
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <Image src={brand.logo} alt="Brand" width={48} height={48} />
            </div>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">
              {brand.first_name}
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{brand.last_name}K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black">${brand.email}</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">{brand.status}</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-primary dark:text-white">
              <div className="flex gap-2">
                <Button size="small" color="secondary">
                  <PencilIcon className="w-4" /> Edit
                </Button>
                <Button size="small" color="dangerOutline">
                  <RecycleBinIcon className="w-4" /> Remove
                </Button>
              </div>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableUser;
