import { Camera } from "lucide-react";

import profileImage from "@/assets/images/profile-image.jpg";
import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";

const InformationSettingsPage = () => {
  return (
    <form className="flex flex-wrap justify-center items-center">
      <div className="mb-8">
        <div className="container mt-5">
          <div className="container mb-8 max-w-fit">
            <h1 className="text-gray-600 text-2xl font-bold">
              Update Information Settings
            </h1>
          </div>
          <div className="relative h-28 w-auto group">
            <div className="">
              <img
                src={profileImage}
                alt="Profile Image"
                className="rounded-full max-h-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="opacity-0 group-hover:opacity-100">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Camera />
              </Button>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="container mb-8 max-w-fit">
            <h1 className="text-gray-600 text-lg font-bold">User Details</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <CustomInput type="text" label="First Name" className="w-80" />
            <CustomInput type="text" label="Last Name" className="w-80" />
            <CustomInput type="text" label="Address" className="w-80" />
            <CustomInput type="tel" label="Contact Number" className="w-80" />
          </div>
        </div>

        <div className="container mt-5">
          <div className="container mb-8">
            <h1 className="text-gray-600 text-lg font-bold">
              Account Information
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <CustomInput type="text" label="Username" className="w-80" />
            <CustomInput type="email" label="Email" className="w-80" />
            <CustomInput
              type="text"
              label="12/25/2099"
              className="w-80"
              disabled
            />
            <CustomInput
              type="password"
              label="Current Password"
              className="w-80"
            />
            <CustomInput
              type="password"
              label="New Password"
              className="w-80"
            />
            <CustomInput
              type="password"
              label="Confirm New Password"
              className="w-80"
            />
          </div>
        </div>

        <div className="flex container mt-14">
          <Button className="bg-blue-500">Save Changes</Button>
        </div>
      </div>
    </form>
  );
};

export default InformationSettingsPage;
