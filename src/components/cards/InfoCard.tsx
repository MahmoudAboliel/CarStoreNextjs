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
    <div className={`${classes} grow min-w-50 relative rounded-xl p-4 text-white flex gap-4 overflow-hidden`}>
        <div className="border-r border-white">
        <Icon className="text-7xl bg-white/20 rounded-full p-3 mr-2" />
        </div>
        <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-bold">{label}</h2>
            <p className="text-3xl font-semibold">{value}</p>
        </div>
        <span className="absolute w-15 h-15 bg-white/20 rounded-full top-2 -right-5" />
        <span className="absolute w-15 h-15 bg-white/20 rounded-full -bottom-5 left-1/2" />
    </div>
  )
}

export default InfoCard