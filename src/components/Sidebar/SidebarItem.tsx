import { LucideIcon } from "lucide-react";
import { FC } from "react";

export interface SidebarItemProps {
  isActive?: boolean;
  onClick: () => void;
  Icon: LucideIcon;
  label: string;
  rightText?: string;
  iconOnly?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { isActive, onClick, Icon, label, rightText, iconOnly } = props;

  return (
    <div
      className={`${
        isActive
          ? "bg-purple-1 select-none text-white"
          : "bg-blue-3 cursor-pointer text-gray-6 hover:text-white"
      } hover:bg-purple-1 flex ${
        iconOnly ? "w-fit" : "w-full"
      } items-center gap-4 rounded-lg p-3 transition-colors duration-200 ease-in-out`}
      onClick={() => onClick()}
    >
      <Icon size={20} />

      {!iconOnly && (
        <>
          <span>{label}</span>

          {rightText && (
            <span className="bg-blue-1 text-purple-3 ml-auto flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold">
              {rightText}
            </span>
          )}
        </>
      )}
    </div>
  );
};
