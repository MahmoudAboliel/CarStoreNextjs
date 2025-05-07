import CustomLink from "@/components/CustomLink"
import Pagination from "@/components/Pagination";
import SectionHeader from "@/components/sections/SectionHeader"
import { IoAdd, FaEye, FaTrashAlt, BiCommentCheck, IoStarSharp } from "@/lib/utils";
import { cookies } from "next/headers";
import { fetchReviews, fetchReviewsCount, handleReview } from "@/lib/apiCalls/adminAPIsCall";
import { ARTICLE_PER_PAGE } from "@/lib/constance";
import { revalidatePath } from "next/cache";
import Link from "next/link";

interface Props {
    searchParams: Promise<{ pageNumber: string }>
}

const ProductsPage = async ({ searchParams }: Props) => {

    const { pageNumber } = await searchParams;
    
    const token = (await cookies()).get('token')?.value || ''

    const reviews = await fetchReviews(pageNumber, token)
    const count = await fetchReviewsCount(token)
    const pages:number = Math.ceil(count / ARTICLE_PER_PAGE)

    const deleted = async (formData: FormData) => {
            "use server"
            const id = parseInt(formData.get('id')?.toString() || '')
            const res = await handleReview(token, id, 'DeclineComment')
            console.log(`from reviews page ${res}`)
            revalidatePath('/admin/reviews')
    }
    const accepted = async (formData: FormData) => {
            "use server"
            const id = parseInt(formData.get('id')?.toString() || '')
            const res = await handleReview(token, id, 'ApproveComment')
            console.log(`from reviews page ${res}`)
            revalidatePath('/admin/reviews')
    }

    const clientStars = [...Array(5)]
    // console.log(reviews)
    
    const reviewsFields = ["الاسم", "رقم الهاتف", "التقييم", "المحتوى", "الحالة", "التاريخ", "صاحب السيارة", "الأفعال"];

  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="المسؤول"
            title="لوحة التحكم"
            span="التعليقات"
        />
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
            <h3 className="font-semibold text-xl">قائمتي</h3>
            <CustomLink 
                href="/admin/reviews"
                label=""
                Icon={IoAdd}
            />
        </div>
        <div className="overflow-x-auto ">
            <table className="w-full min-w-[900px] my-5 text-left border-spacing-0">
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
                        <td className="p-1">{review.number}</td>
                        <td className="p-1">
                            {/* Stars rating */}
                            <div className="flex justify-center">
                                {clientStars.map((_, index) => (
                                <IoStarSharp 
                                    key={index}
                                    className={`text-2xl ${index < review.stars ? 'text-yellow-400' : 'text-gray-300'}`} 
                                />
                                ))}
                            </div>
                        </td>
                        <td className="p-1">{review.contentMsg}</td>
                        <td className="p-1">
                            <span 
                                className={`${review.isPublic === 'OnHold' 
                                    ? 'bg-cc-yellow/20 border-cc-yellow text-cc-yellow' 
                                    : review.isPublic === 'Approved'
                                    ? 'bg-cc-green/20 border-cc-green text-cc-green'
                                    : 'bg-cc-red/20 border-cc-red text-cc-red'}
                                    border rounded-md font-semibold px-2 py-1
                                `}>
                                {review.isPublic === 'OnHold' 
                                    ? 'قيد الإنتظار' 
                                    : review.isPublic === 'Approved'
                                    ? 'مقبول'
                                    : 'مرفوض'
                                }
                            </span>
                        </td>
                        <td className="p-1">{new Date(review.createdDate).toDateString()}</td>
                        <td className="p-1">{review.userName}</td>
                        <td className="p-1">
                            <div className="flex items-center gap-1 justify-center text-xl">
                                <Link 
                                    href={`/product/${review.carId}`}
                                    className="text-gray-600 border rounded-md p-1 hover:bg-gray-600/20 transition-colors duration-150">
                                    <FaEye />
                                </Link>
                                <form action={accepted}>
                                    <input hidden readOnly type="number" name="id" value={review.id} />
                                    <button className="cursor-pointer text-green-600 border rounded-md p-1 hover:bg-green-600/20 transition-colors duration-150">
                                        <BiCommentCheck />
                                    </button>
                                </form>
                                <form action={deleted}>
                                    <input hidden readOnly type="number" name="id" value={review.id} />
                                    <button className="cursor-pointer text-red-600 border rounded-md p-1 hover:bg-red-600/20 transition-colors duration-150">
                                        <FaTrashAlt />
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <Pagination 
            pages={pages}
            pageNumber={parseInt(pageNumber)}
            route="/admin/reviews"
        />
    </section>
  )
}

export default ProductsPage