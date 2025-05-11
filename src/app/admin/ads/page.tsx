import CustomLink from "@/components/CustomLink"
import Pagination from "@/components/Pagination";
import SectionHeader from "@/components/sections/SectionHeader"
import { deleteAd, fetchAds, fetchAdsCount } from "@/lib/apiCalls/adminAPIsCall";
import { ARTICLE_PER_PAGE, DOMAINImage } from "@/lib/constance";
import { IoAdd, FaTrashAlt, IoIosLink } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Image from "next/image";

interface Props {
    searchParams: Promise<{ pageNumber: string }>
}

const AdsPage = async ({ searchParams }: Props) => {
    const adsFields = ["الصورة", "العنوان", "الوصف", "تاريخ البداية", "تاريخ الإنتهاء", "عدد النقرات", "الأفعال"];
    const { pageNumber } = await searchParams;
    
    const token = (await cookies()).get('token')?.value || ''

    const ads = await fetchAds(pageNumber, token)
    const count = await fetchAdsCount(token)
    const pages:number = Math.ceil(count / ARTICLE_PER_PAGE);

    const deleted = async (formData: FormData) => {
            "use server"
            const id = parseInt(formData.get('id')?.toString() || '')
            const res = await deleteAd(token, id)
            console.log(`from ads page ${res}`)
            revalidatePath('/admin/ads')
    }

    // console.log(ads, count)
  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="المسؤول"
            title="لوحة التحكم"
            span="الإعلانات"
        />
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
            <h3 className="font-semibold text-xl">قائمتي</h3>
            <CustomLink 
                href="/admin/addAd"
                label="إضافة إعلان"
                Icon={IoAdd}
            />
        </div>
        <div className="overflow-x-auto ">
            <table className="w-full min-w-[900px] my-5 text-left border-spacing-0">
                <thead className=" border-y border-gray-400 bg-gray-200">
                    <tr className="">
                    {adsFields.map(title => 
                        <th key={title} className="py-2 px-1">{title}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                {ads.map(ad => (
                    <tr 
                        className="border-y border-gray-400"
                        key={ad.id}>
                            <td className="py-1">
                                <Image 
                                    className="w-14 h-14 rounded-lg"
                                    width={900}
                                    height={700}
                                    priority
                                    src={`${DOMAINImage}/${ad.imgName}`} 
                                    alt="car image" />
                            </td>
                            <td className="p-1 font-semibold text-sm">{ad.name}</td>
                            <td className="p-1">{ad.description}</td>
                            <td className="p-1">{new Date(ad.startDate).toDateString()}</td>
                            <td className="p-1">{new Date(ad.endDate).toDateString()}</td>
                            <td className="p-1">{ad.hit}</td>
                            <td className="p-1">
                                <div className="flex items-center gap-1 justify-center text-xl">
                                    <a 
                                        href={ad.url}
                                        className="cursor-pointer text-blue-600 border rounded-md p-1 hover:bg-blue-600/20 transition-colors duration-150">
                                        <IoIosLink />
                                    </a>
                                    <form action={deleted}>
                                        <input hidden readOnly type="number" name="id" value={ad.id} />
                                        <button type="submit" className="cursor-pointer text-red-600 border rounded-md p-1 hover:bg-red-600/20 transition-colors duration-150">
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
            route="/admin/ads"
        />
    </section>
  )
}

export default AdsPage