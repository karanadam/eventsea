import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiOutlineCalendar,
  HiOutlineOfficeBuilding,
  HiViewBoards,
} from "react-icons/hi";
import { HiLifebuoy } from "react-icons/hi2";
import Image from "next/image";
import eventSeaLogo from "../../../public/eventsea.png"
const DashboardSidebar = () => {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Sidebar">
        <Sidebar.Logo href="#">
          <Image src={eventSeaLogo} width={150} height={40} />
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiOutlineCalendar}>
              Events
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineOfficeBuilding}>
              Organizations
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          {/*Item Group Division */}
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiLifebuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
