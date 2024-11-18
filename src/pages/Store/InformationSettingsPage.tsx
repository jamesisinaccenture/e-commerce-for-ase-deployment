import { Link } from "react-router-dom";

import profileImage from "@/assets/images/profile-image.jpg";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/routes/endpoints";

const InformationSettingsPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mb-8">
        <div className="container mt-5">
          <div className="container mb-8 max-w-fit">
            <h1 className="text-gray-600 text-2xl font-bold">
              Information Settings
            </h1>
          </div>
          <div className="flex justify-center h-28 w-auto">
            <div className="">
              <img
                src={profileImage}
                alt="Profile Image"
                className="rounded-full max-h-28"
              />
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
              <p className="text-gray-800 w-80 font-bold">...</p>
            </div>
            <div>
              <Label className="text-gray-500">Lastname</Label>
              <p className="text-gray-800 w-80 font-bold">...</p>
            </div>
            <div>
              <Label className="text-gray-500">Address</Label>
              <p className="text-gray-800 w-80 font-bold">...</p>
            </div>
            <div>
              <Label className="text-gray-500">Contact Number</Label>
              <p className="text-gray-800 w-80 font-bold">...</p>
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
              <p className="text-gray-800 w-80 font-bold">...</p>
            </div>
            <div>
              <Label className="text-gray-500">Email</Label>
              <p className="text-gray-800 w-80 font-bold">...</p>
            </div>
            <div>
              <Label className="text-gray-500">Date Created</Label>
              <p className="text-gray-800 w-80 font-bold">...</p>
            </div>
          </div>
        </div>

        <div className="flex container mt-14">
          <Button type="submit" className="bg-blue-500">
            <Link to={ROUTES.STORE.PROFILE_SETTINGS}>Edit Profile</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default InformationSettingsPage;
