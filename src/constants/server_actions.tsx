import { SiBoost } from "react-icons/si";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPrivacyTip,
} from "react-icons/md";
import { RiSettings5Fill, RiCalendarEventFill } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { BiSolidFolderPlus, BiSolidPencil } from "react-icons/bi";
import { TbAppsFilled } from "react-icons/tb";
import { IoIosAddCircle, IoMdNotifications } from "react-icons/io";
import { BiShieldQuarter } from "react-icons/bi";

const serverOptions: ServerOptionsType = [
  {
    group: 1,
    actions: [
      {
        title: "Server Boost",
        class: "normal",
        icon: <SiBoost />,
      },
    ],
  },
  {
    group: 2,
    actions: [
      {
        title: "Invite People",
        class: "indigo",
        icon: <BsPersonFillAdd />,
      },
      {
        title: "Server Settings",
        class: "normal",
        icon: <RiSettings5Fill />,
      },
      {
        title: "Create Channel",
        class: "normal",
        icon: <IoIosAddCircle />,
      },
      {
        title: "Create Category",
        class: "normal",
        icon: <BiSolidFolderPlus />,
      },
      {
        title: "Create Event",
        class: "normal",
        icon: <RiCalendarEventFill />,
      },
      {
        title: "App Directory",
        class: "normal",
        icon: <TbAppsFilled />,
      },
    ],
  },
  {
    group: 3,
    actions: [
      {
        title: "Notification Settings",
        class: "normal",
        icon: <IoMdNotifications />,
      },
      {
        title: "Privacy Settings",
        class: "normal",
        icon: <MdPrivacyTip />,
      },
    ],
  },
  {
    group: 4,
    actions: [
      {
        title: "Edit Server Profile",
        class: "normal",
        icon: <BiSolidPencil />,
      },
      {
        title: "Hide Muted Channels",
        class: "normal",
        icon: <MdCheckBoxOutlineBlank />,
        second_icon: <MdCheckBox />,
      },
    ],
  },
  {
    group: 5,
    actions: [
      {
        title: "Report Raid",
        class: "red",
        icon: <BiShieldQuarter />,
      },
    ],
  },
];

export { serverOptions };
