import React from 'react'
import { IconType } from 'react-icons'

interface InfoCardProps {
    Icon: IconType;
    label: string;
    value: number;
    classes?: string;
}
const InfoCard = ({ Icon, label, value, classes }: InfoCardProps) => {
  return (
    <div className={`${classes} border grow min-w-50 relative rounded-xl p-4 flex gap-4 overflow-hidden`}>
        <div className="border-r ">
          <Icon className="text-7xl rounded-full p-3 mr-2" />
        </div>
        <div className="flex flex-col justify-between">
            <h2 className="text-xl ">{label}</h2>
            <p className="text-4xl font-bold">{value}</p>
        </div>
        {/* <span className="absolute w-15 h-15 bg-black/20 rounded-full top-2 -right-5" />
        <span className="absolute w-15 h-15 bg-black/20 rounded-full -bottom-5 left-1/2" /> */}
    </div>
  )
}

export default InfoCard