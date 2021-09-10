import { FC } from "react";

const Background: FC = ({ children }) => (
  <div className="bg-gray-200 p-4 min-h-screen">{children}</div>
);

export default Background;
