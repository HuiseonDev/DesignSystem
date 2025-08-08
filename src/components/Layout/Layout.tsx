import { useRef } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div ref={sentinelRef} style={{ height: "1px" }} />
      <Outlet />
    </div>
  );
};

export default Layout;
