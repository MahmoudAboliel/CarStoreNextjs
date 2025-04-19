import CustomLink from "@/components/CustomLink"
import Pagination from "@/components/Pagination";
import SectionHeader from "@/components/sections/SectionHeader"
import { IoAdd, FaEye, MdEdit, FaTrashAlt } from "@/lib/utils";
import { adsData } from "@/lib/utils";
import Image from "next/image";

const AdsPage = () => {
    const adsFields = ["Image", "Title", "Start Date", "End Date", "Hits", "Actions"];

  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="Admin"
            title="Dashboard"
            span="Ads"
        />
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
            <h3 className="font-semibold text-xl">My Listing</h3>
            <CustomLink 
                href="/admin/addAd"
                label="Add Ad"
                Icon={IoAdd}
            />
        </div>
        <div className="overflow-x-auto ">
            <table className="w-full min-w-[700px] my-5 text-left border-spacing-0">
                <thead className=" border-y border-gray-400 bg-gray-200">
                    <tr className="">
                    {adsFields.map(title => 
                        <th key={title} className="py-2 px-1">{title}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                {adsData.map(ad => (
                    <tr 
                        className="border-y border-gray-400"
                        key={ad.id}>
                            <td className="py-1">
                                <Image 
                                    className="w-14 h-14 rounded-lg"
                                    width={900}
                                    height={700}
                                    priority
                                    src={ad.imageUrl} 
                                    alt="car image" />
                            </td>
                            <td className="p-1 font-semibold text-sm">{ad.title}</td>
                            <td className="p-1">{ad.date}</td>
                            <td className="p-1">{ad.date}</td>
                            <td className="p-1">2214</td>
                            <td className="p-1">
                                <div className="flex items-center gap-1 justify-center text-xl">
                                    <button className="text-gray-600 border rounded-md p-1 hover:bg-gray-600/20 transition-colors duration-150">
                                        <FaEye />
                                    </button>
                                    <button className="text-green-600 border rounded-md p-1 hover:bg-green-600/20 transition-colors duration-150">
                                        <MdEdit />
                                    </button>
                                    <button className="text-red-600 border rounded-md p-1 hover:bg-red-600/20 transition-colors duration-150">
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <Pagination 
            pages={4}
            pageNumber={2}
            route="/profile/dashboard"
        />
    </section>
  )
}

export default AdsPage