import CustomLink from "@/components/CustomLink"
import Pagination from "@/components/Pagination";
import SectionHeader from "@/components/sections/SectionHeader"
import { IoAdd, FaEye, MdEdit, FaTrashAlt } from "@/lib/utils";
import { reviews } from "@/lib/utils";

const ProductsPage = () => {
    const reviewsFields = ["Name", "Phone", "Stars", "Text", "Publish", "Actions"];

  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="Admin"
            title="Dashboard"
            span="Reviews"
        />
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
            <h3 className="font-semibold text-xl">My Listing</h3>
            <CustomLink 
                href="/admin/reviews"
                label=""
                Icon={IoAdd}
            />
        </div>
        <div className="overflow-x-auto ">
            <table className="w-full min-w-[700px] my-5 text-left border-spacing-0">
                <thead className=" border-y border-gray-400 bg-gray-200">
                    <tr className="">
                    {reviewsFields.map(title => 
                        <th key={title} className="py-2 px-1">{title}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                {reviews.map(review => (
                    <tr 
                        className="border-y border-gray-400"
                        key={review.id}>
                            <td className="p-1 font-semibold text-sm">{review.name}</td>
                            <td className="p-1">{review.phone}</td>
                            <td className="p-1">{review.stars}</td>
                            <td className="p-1">{review.text}</td>
                            <td className="p-1">jan 2, 2025</td>
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

export default ProductsPage