import React from "react";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden xl:block w-80 h-full xl:fixed">Sidebar</div>
      <div className="w-full xl:ml-80">
        <p>Navbar</p>
        <div className="p-4 bg-[#fafbfc] dark:bg-secondary">{children}</div>
      </div>
    </div>
  );
}
