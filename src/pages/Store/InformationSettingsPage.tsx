import { Slash } from "lucide-react";

import CustomInput from "@/components/reusable/CustomInput";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const InformationSettingsPage = () => {
  return (
    <form className="flex flex-wrap justify-center items-center">
      <div className="shadow-lg p-10 mt-8 mb-10">
        <div className="container mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <h1 className="text-blue-500">Profile</h1>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <h1 className="text-blue-500">Edit Your Profile</h1>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container">
          <div className="flex space-x-5 mb-3">
            <CustomInput type="text" label="First Name" />
            <CustomInput type="text" label="Last Name" />
          </div>
          <div className="flex space-x-5 mb-3">
            <CustomInput type="text" label="Username" />
            <CustomInput type="email" label="Email" />
          </div>
          <div className="flex space-x-5 mb-3">
            <CustomInput type="tel" label="Contact Number" />
            <CustomInput type="text" label="Address" />
          </div>
        </div>
        <div className="container mt-5">
          <p className="mb-3">Password Changes</p>
          <div className="flex flex-col gap-2">
            <CustomInput type="password" label="Current Password" />
            <CustomInput type="password" label="New Password" />
            <CustomInput type="password" label="Confirm New Password" />
          </div>
        </div>

        <div className="flex container flex-row-reverse mt-5">
          <Button className="bg-blue-500">Save Changes</Button>
          <Button className="bg-white text-black shadow-none hover:bg-white hover:text-blue-500">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default InformationSettingsPage;
