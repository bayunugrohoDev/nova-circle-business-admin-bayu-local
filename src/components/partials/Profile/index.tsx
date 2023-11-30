import Breadcrumb from "@/components/elements/Breadcrumbs";
import Button from "@/components/elements/Button";
import Card from "@/components/elements/Card";
import RecycleBin from "@/components/elements/Icon/RecycleBin";
import { Input } from "@/components/elements/Input";
import React from "react";

const Profile = () => {
  return (
    <>
      <Breadcrumb pageName="Profile" />

      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9 w-full">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Profile Description
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex gap-4">
                  <div className="w-full">
                    <div className="flex flex-col justify-center w-full">
                      <div className="mb-3  text-black ">Upload Image</div>
                      {false ? (
                        <div className="relative">
                            <button className="absolute top-2 right-2 p-2 bg-danger rounded-full ">
                             <RecycleBin color="white" />
                            </button>
                          <img
                            className=" w-full h-64 object-cover rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                            alt="image description"
                          />{" "}
                        </div>
                      ) : (
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-grey border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-greyDarker dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-greyDarker dark:text-gray-400">
                              <span className="font-semibold">
                                No Image Found, Click to upload
                              </span>{" "}
                            </p>
                            <p className="text-xs text-greyDarker dark:text-gray-400">
                              mp4, AVI, MOV or WebM (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                    <input
                      type="file"
                      className="w-full mt-2 cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col justify-center w-full">
                      <div className="mb-3  text-black ">Upload Video</div>
                      {true ? (
                        <div className="relative">
                            <button className="absolute top-2 right-2 p-2 bg-danger rounded-full ">
                             <RecycleBin color="white" />
                            </button>
                          <img
                            className=" w-full h-64 object-cover rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                            alt="image description"
                          />{" "}
                        </div>
                      ) : (
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-grey border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-greyDarker dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-greyDarker dark:text-gray-400">
                              <span className="font-semibold">
                                No Image Found, Click to upload
                              </span>{" "}
                            </p>
                            <p className="text-xs text-greyDarker dark:text-gray-400">
                              mp4, AVI, MOV or WebM (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                    <input
                      type="file"
                      className="w-full mt-2 cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>

                  <Input
                    className="mb-6"
                    label="Link"
                    type="text"
                    placeholder={"Please insert your link"}
                    required
                  />
                </div>

                <div className="font-semibold text-greyDarkest text-lg py-4">
                  Social Media Link
                </div>
                <div className="grid gap-4">
                  <Input
                    label="Instagram"
                    type="text"
                    placeholder={"Please insert your instagram link"}
                    required
                  />
                  <Input
                    label="Facebook"
                    type="text"
                    placeholder={"Please insert your facebook link"}
                  />
                  <Input
                    label="Twitter"
                    type="text"
                    placeholder={"Please insert your twitter link"}
                  />
                </div>
              </div>
            </form>
          </div>

          <Card
            title="Galery"
            addElementOnHeader={
              <>
                <Button color={"primary"}>Add image</Button>
              </>
            }
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
              {Array.from({ length: 11 }, (_, index) => index + 1).map(
                (item) => (
                  <div key={item} className="group relative">
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${item}.jpg`}
                      alt=""
                    />
                    <button className="absolute right-4 bottom-4 hidden group-hover:block p-2 bg-danger rounded-full">
                      <RecycleBin color="white" />
                    </button>
                  </div>
                )
              )}
            </div>
          </Card>

          <div className="flex justify-end gap-2">
            <Button color="danger">Cancel</Button>
            <Button color="primary" className="!px-8">
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
