import CustomLink from "@/components/CustomLink"
import Pagination from "@/components/Pagination";
import SectionHeader from "@/components/sections/SectionHeader"
import { fetchProducts, fetchProductsCount } from "@/lib/apiCalls/userAPIsCall";
import { ARTICLE_PER_PAGE, DOMAINImage } from "@/lib/constance";
import { IoAdd } from "@/lib/utils";
import { cookies } from "next/headers";
import Image from "next/image";

interface Props {
    searchParams: Promise<{ pageNumber: string }>
}
const SoldProducts = async ({ searchParams }: Props) => {
    const fields = ["الصورة", "الماركة", "الموديل", "تاريخ البيع", "السعر", "الحالة", "عدد التعليقات"];
   
    const { pageNumber } = await searchParams;

    const token = (await cookies()).get('token')?.value || ''
    const products = await fetchProducts(pageNumber, token, 1)
    const count = await fetchProductsCount(token, 1)
    const pages:number = Math.ceil(count / ARTICLE_PER_PAGE)
    // console.log(products, count)
    
  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="المستخدم"
            title="لوحة التحكم"
            span="قائمة المنتجات"
        />
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
            <h3 className="font-semibold text-xl">قائمتي</h3>
            <CustomLink 
                href="/user/addProduct"
                label="إضافة منتج"
                Icon={IoAdd}
            />
        </div>
        <div className="overflow-x-auto ">
            <table className="w-full min-w-[900px] my-5 text-left border-spacing-0">
                <thead className=" border-y border-gray-400 bg-gray-200">
                    <tr className="">
                    {fields.map(title => 
                        <th key={title} className="py-2 px-1">{title}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                {products.map(car => (
                  <tr 
                    className="border-y border-gray-400"
                    key={car.id}>
                        <td className="py-1">
                              <Image 
                              className="w-14 h-14 rounded-lg"
                              width={900}
                              height={700}
                              priority
                              src={`${DOMAINImage}/${car.img1}`} 
                              alt="car image" />
                        </td>
                        <td className="p-1 font-semibold text-sm">{car.brand}</td>
                        <td className="p-1">{car.model}</td>
                        <td className="p-1">{new Date(car.updateDate).toDateString()}</td>
                        <td className="p-1">{`${car.price}$`}</td>
                        <td className="p-1">
                              <span 
                              className={`border rounded-md py-1 px-2 
                                    ${car.status === 'new' 
                                          ? 'bg-green-700/20 border-green-700 text-green-700' 
                                          : 'bg-yellow-400/20 border-yellow-500 text-yellow-500'}`}
                              >
                              {car.status === 'new' ? 'جديدة' : 'مستعملة'}
                              </span>
                        
                        </td>
                        <td className="p-1">{car.comments}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <Pagination 
            pages={pages}
            pageNumber={parseInt(pageNumber)}
            route="/user/dashboard"
        />
    </section>
  )
}

export default SoldProducts