import { FC } from "react";

const Background: FC = ({ children }) => (
  <div className="bg-gray-50 p-4 min-h-screen">{children}</div>
);

export default Background;
