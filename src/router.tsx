import { createBrowserRouter } from "react-router-dom";
import ChannelsPage from "./pages/Channels";
import HomePage from "./pages/Home/HomePage";
import SettingsPage from "./pages/Settings/SettingsPage";

import DirectsPage from "./pages/Direct";
import SideBar from "./shared/SideBar";
import NitroPage from "./pages/Nitro/header";
import LibraryPage from "./pages/Library";
import UserPage from "./pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SideBar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/library",
    element: (
      <>
        <SideBar />
        <LibraryPage />
      </>
    ),
  },
  {
    path: "/nitro",
    element: (
      <>
        <SideBar />
        <NitroPage />
      </>
    ),
  },
  {
    path: "/settings",
    element: (
      <>
        <SideBar />
        <SettingsPage />
      </>
    ),
  },
  {
    path: "/channels/@me",
    element: (
      <>
        <SideBar />
        <DirectsPage />
      </>
    ),
  },
  {
    path: "/channels/@me/:user_id",
    element: (
      <>
        <SideBar />
        <UserPage />
      </>
    ),
  },
  {
    path: "/channels/:server_id/:channel_id",
    element: (
      <>
        <SideBar />
        <ChannelsPage />
      </>
    ),
  },
]);

export default router;
