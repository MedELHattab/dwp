import React from "react";

interface CardProps {
  label: string;
  icon: React.JSX.Element;
  data: number | string;
  bgColor?: string;
  href?: string;
}

const CardStatics = ({ data }: { data: CardProps }) => {
  return (
    <div className="flex items-center gap-3.5">
      <div className={`${data.bgColor} h-12 w-12 rounded-full flex justify-center items-center`}>{data.icon}</div>
      <div className="flex flex-col gap-0">
        <p className="text-xl font-semibold">
          {data.data}
        </p>
        <p className="text-second text-sm">
          {data.label}
        </p>
      </div>
    </div>
  );
};

export default CardStatics;
