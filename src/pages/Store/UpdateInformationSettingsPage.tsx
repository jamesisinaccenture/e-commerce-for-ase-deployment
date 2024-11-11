import { Camera } from "lucide-react";

import profileImage from "@/assets/images/profile-image.jpg";
import CustomInput from "@/components/reusable/CustomInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/routes/endpoints";

const UpdateInformationSettingsPage = () => {
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
            <h1 className="text-gray-600 text-xl font-bold">User Details</h1>
          </div>
          <div className="flex flex-wrap gap-5">
            <div>
              <Label className="text-gray-500">Firstname</Label>
              <CustomInput type="text" label="Dev ako" className="w-80" />
            </div>
            <div>
              <Label className="text-gray-500">Lastname</Label>
              <CustomInput type="text" label="Bossing" className="w-80" />
            </div>
            <div>
              <Label className="text-gray-500">Address</Label>
              <CustomInput
                type="text"
                label="taga Etivac ako boss"
                className="w-80"
              />
            </div>
            <div>
              <Label className="text-gray-500">Contact Number</Label>
              <CustomInput type="tel" label="09054802865" className="w-80" />
            </div>
          </div>
        </div>

        <div className="container mt-10">
          <div className="container mb-8">
            <h1 className="text-gray-600 text-xl font-bold">
              Account Information
            </h1>
          </div>
          <div className="flex flex-wrap gap-5">
            <div>
              <Label className="text-gray-500">Username</Label>
              <CustomInput type="text" label="devqt123" className="w-80" />
            </div>
            <div>
              <Label className="text-gray-500">Email</Label>
              <CustomInput
                type="email"
                label="devqt123@gmail.com"
                className="w-80"
              />
            </div>
            <div>
              <Label className="text-gray-500">Date Created</Label>
              <CustomInput
                type="text"
                label="12/25/2099"
                className="w-80"
                disabled
              />
            </div>
            <div>
              <Label className="text-gray-500">Old Password</Label>
              <CustomInput type="password" label="old pass" className="w-80" />
            </div>
            <div>
              <Label className="text-gray-500">New Password</Label>
              <CustomInput type="password" label="new pass" className="w-80" />
            </div>
            <div>
              <Label className="text-gray-500">Confirm New Password</Label>
              <CustomInput
                type="password"
                label="confirm new pass"
                className="w-80"
              />
            </div>
          </div>
        </div>

        <div className="flex container mt-14">
          <Button className="bg-blue-500">
            <a href={ROUTES.STORE.PROFILE}>Save Changes</a>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UpdateInformationSettingsPage;
