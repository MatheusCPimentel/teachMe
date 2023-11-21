import { FC } from "react";

import { LogIn } from "lucide-react";

export const Header: FC = () => {
  return (
    <header className="bg-gray-4 px-6 py-4">
      <div className="flex items-center justify-between">
        <span>teachMe</span>

        <nav className="flex items-center gap-4">
          <a className="cursor-pointer">About us</a>
          <a className="cursor-pointer">How to apply</a>
          <a className="cursor-pointer">Are you a teacher?</a>
        </nav>

        <div className="flex items-center gap-2">
          <a>Sign in</a>
          <LogIn size={20} />
        </div>
      </div>
    </header>
  );
};
