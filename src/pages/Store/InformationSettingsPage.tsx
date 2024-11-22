import { Link } from "react-router-dom";

import profileImage from "@/assets/images/profile-image.jpg";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/hooks/state/useAuth";
import { ROUTES } from "@/routes/endpoints";

const InformationSettingsPage = () => {
  const { user } = useAuthStore();

  return (
    <>
      <div className="flex flex-col justify-center items-center py-16">
        <div className="w-full">
          <div className=" mb-8 max-w-fit">
            <h1 className="text-store-heading text-3xl font-bold">
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
        <div className="w-full mt-5">
          <div className=" mb-8 max-w-fit">
            <h1 className="text-store-heading text-xl font-bold">
              User Details
            </h1>
          </div>
          <div className="grid grid-cols-custom gap-5">
            <div>
              <Label className="text-gray-500">Firstname</Label>
              <p className="text-gray-800 w-80 font-bold">{user.first_name}</p>
            </div>
            <div>
              <Label className="text-gray-500">Lastname</Label>
              <p className="text-gray-800 w-80 font-bold">{user.last_name}</p>
            </div>
            <div>
              <Label className="text-gray-500">Address</Label>
              <p className="text-gray-800 w-80 font-bold">{user.address}</p>
            </div>
            <div>
              <Label className="text-gray-500">Contact Number</Label>
              <p className="text-gray-800 w-80 font-bold">
                {user.contact_number}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col w-full">
          <div className=" mb-8">
            <h1 className="text-store-heading text-xl font-bold">
              Account Information
            </h1>
          </div>
          <div className="flex flex-wrap gap-5">
            <div>
              <Label className="text-gray-500">Username</Label>
              <p className="text-gray-800 w-80 font-bold">{user.username}</p>
            </div>
            {/* <div>
              <Label className="text-gray-500">Email</Label>
              <p className="text-gray-800 w-80 font-bold">{user.email}</p>
            </div> */}
            <div>
              <Label className="text-gray-500">Date Created</Label>
              <p className="text-gray-800 w-80 font-bold">
                {user.date_created}
              </p>
            </div>
          </div>
        </div>

        <div className="flex self-start mt-14">
          <Button
            type="submit"
            className="bg-store-primary hover:bg-store-primary/80"
            asChild
          >
            <Link to={ROUTES.STORE.PROFILE_SETTINGS}>Edit Profile</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default InformationSettingsPage;
