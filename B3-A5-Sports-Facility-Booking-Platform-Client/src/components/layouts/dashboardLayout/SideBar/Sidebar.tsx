import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainLogo from "@/components/shared/MainLogo";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { TUser } from "@/types/auth.type";
import AdminSideBarMenu from "./AdminSideBarMenu";
import UserSideBarMenu from "./UserSideBarMenu";
import userApi from "@/redux/features/user/userApi";
import Loading from "@/components/shared/Loading";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { token } = useAppSelector((currentState) => currentState.auth);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  const { isLoading, data: userData } = userApi.useGetUserQuery(
    (user as TUser)?.id,
    { skip: !token }
  );

  return (
    <div>
      <div className="w-full flex justify-end items-center p-5 lg:hidden fixed z-20">
        <HiMenuAlt3
          className="text-2xl text-[#808080]"
          onClick={() => setOpenSidebar(!openSidebar)}
        />
      </div>
      <div
        className={`w-64 h-full bg-[url(../public/sidebarBg.png)] bg-no-repeat bg-center bg-cover overflow-y-auto rounded-r-xl absolute lg:fixed z-20 lg:translate-x-0 ${
          openSidebar
            ? `translate-x-0 transition duration-300 ease-in-out`
            : `-translate-x-full transition duration-300 ease-in-out`
        }`}
      >
        <div className="w-full py-6">
          <MainLogo caller={"d"}></MainLogo>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="w-full flex flex-col justify-center items-center gap-3 ">
              <div className="relative">
                <Avatar className="size-24">
                  <AvatarImage src={userData?.data?.imageUrl} alt="@shadcn" />
                  <AvatarFallback className="bg-[#4646462f] text-4xl text-[#808080]">
                    {userData?.data?.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="size-6 bg-red-700 border-4 border-white rounded-full absolute right-0 bottom-2"></div>
              </div>
              <h1 className="normal-case text-xl sm:text-2xl text-red-700 font-medium">
                {userData?.data?.name}
              </h1>
              <p className="normal-case text-base sm:text-lg text-[#808080]">
                {userData?.data?.email}
              </p>
            </div>

            <div className="flex flex-col justify items-start text-[#808080] p-6">
              {user && (user as TUser)?.role === "admin" ? (
                <AdminSideBarMenu />
              ) : user && (user as TUser)?.role === "user" ? (
                <UserSideBarMenu />
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
