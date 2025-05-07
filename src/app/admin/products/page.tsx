import CustomLink from "@/components/CustomLink"
import Pagination from "@/components/Pagination";
import SectionHeader from "@/components/sections/SectionHeader"
import { deleteProduct, fetchProducts, fetchProductsCount } from "@/lib/apiCalls/adminAPIsCall";
import { ARTICLE_PER_PAGE, DOMAINImage } from "@/lib/constance";
import { IoAdd, FaEye, FaTrashAlt } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

interface Props {
    searchParams: Promise<{ pageNumber: string }>
}

const ProductsPage = async ({ searchParams }: Props) => {

    const { pageNumber } = await searchParams;

    const token = (await cookies()).get('token')?.value || ''

    const fields = ["الصورة", "الماركة", "الموديل", "تاريخ الإضافة", "السعر", "الحالة", "تم البيع", "الأفعال"];
    const products = await fetchProducts(pageNumber, token)
    const count = await fetchProductsCount(token)
    const pages:number = Math.ceil(count / ARTICLE_PER_PAGE);

    const deleted = async (formData: FormData) => {
            "use server"
            const id = parseInt(formData.get('id')?.toString() || '')
            const res = await deleteProduct(token, id)
            console.log(res)
            revalidatePath('/admin/products')
        }

    // console.log(products)

  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="المسؤول"
            title="لوحة التحكم"
            span="المنتجات"
        />
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
            <h3 className="font-semibold text-xl">قائمتي</h3>
            <CustomLink 
                href=""
                label=""
                Icon={IoAdd}
            />
        </div>
        <div className="overflow-x-auto ">
            <table className="w-full min-w-[700px] my-5 text-left border-spacing-0">
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
                            <td className="p-1">{new Date(car.createDate).toDateString()}</td>
                            <td className="p-1">{`${car.price}$`}</td>
                            <td className="p-1">
                                <span 
                                    className={`border rounded-md py-1 px-2 
                                        ${car.status === 'new' 
                                            ? 'bg-green-700/20 border-green-700 text-green-700' 
                                            : 'bg-yellow-400/20 border-yellow-500 text-yellow-500'}`}
                                    >
                                    {car.status === 'new' ? 'New' : 'Used'}
                                </span>
                            
                            </td>
                            <td className="p-1">
                                <span 
                                    className={`border rounded-md py-1 px-2 
                                        ${car.sold === 1 
                                            ? 'bg-green-700/20 border-green-700 text-green-700' 
                                            : 'bg-yellow-400/20 border-yellow-500 text-yellow-500'}`}
                                    >
                                    {car.sold === 1 ? 'نعم' : 'لا'}
                                </span>
                            </td>
                            <td className="p-1">
                                <div className="flex items-center gap-1 justify-center text-xl">
                                    <Link 
                                        href={`/product/${car.id}`}
                                        className="text-gray-600 border rounded-md p-1 hover:bg-gray-600/20 transition-colors duration-150">
                                        <FaEye />
                                    </Link>
                                    <form action={deleted}>
                                        <input hidden readOnly type="number" name="id" value={car.id} />
                        
                                        <button type="submit" className="text-red-600 border rounded-md p-1 hover:bg-red-600/20 transition-colors duration-150 cursor-pointer">
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
            route="/admin/products"
        />
    </section>
  )
}

export default ProductsPage