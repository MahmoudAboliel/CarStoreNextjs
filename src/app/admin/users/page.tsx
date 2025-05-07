import CustomLink from "@/components/CustomLink"
import Pagination from "@/components/Pagination";
import SectionHeader from "@/components/sections/SectionHeader"
import { IoAdd, SiAdblock, FaUserCheck } from "@/lib/utils";
import Image from "next/image";
import { blockingUser, fetchUsers, fetchUsersCount } from "@/lib/apiCalls/adminAPIsCall";
import { cookies } from "next/headers";
import { ARTICLE_PER_PAGE, DOMAINImage } from "@/lib/constance";
import { revalidatePath } from "next/cache";

interface Props {
    searchParams: Promise<{ pageNumber: string }>
}

const UsersPage = async ({ searchParams }: Props) => {
    const { pageNumber } = await searchParams;
    
    const userFields = ["الصورة", "الاسم", "الإيميل", "الهاتف", "المدينة", "تاريخ الإنضمام", "الحالة", "الأفعال"];
    
    const token = (await cookies()).get('token')?.value || ''
    
    const users = await fetchUsers(pageNumber, token)
    const count = await fetchUsersCount(token)
    const pages:number = Math.ceil(count / ARTICLE_PER_PAGE);

    // console.log(users, count)
    const blockUser = async (formData: FormData) => {
        "use server"
        const id = formData.get('id')?.toString() || ''
        const type = formData.get('type')?.toString() as 'Active' | 'DeActive'
        const res = await blockingUser(token, id, type)
        console.log(res)
        revalidatePath('/admin/users')
    }
  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="المسؤول"
            title="لوحة التحكم"
            span="المستخدمين"
        />
        <div className="flex items-center justify-between border-b border-gray-400 pb-3">
            <h3 className="font-semibold text-xl">قائمتي</h3>
            <CustomLink 
                href="/login"
                label="إضافة مستخدم"
                Icon={IoAdd}
            />
        </div>
        <div className="overflow-x-auto ">
            <table className="w-full min-w-[900px] my-5 text-left border-spacing-0">
                <thead className=" border-y border-gray-400 bg-gray-200">
                    <tr className="">
                    {userFields.map(title => 
                        <th key={title} className="py-2 px-1">{title}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr 
                        className="border-y border-gray-400"
                        key={user.id}>
                            <td className="py-1">
                                <Image 
                                    className="w-14 h-14 rounded-lg"
                                    width={900}
                                    height={700}
                                    priority
                                    src={`${DOMAINImage}/${user.profileImg}`} 
                                    alt="car image" />
                            </td>
                            <td className="p-1 font-semibold text-sm">{user.userName}</td>
                            <td className="p-1">{user.email}</td>
                            <td className="p-1">{user.number}</td>
                            <td className="p-1">{user.city}</td>
                            <td className="p-1">{new Date(user.CreationDate).toDateString()}</td>
                            <td className="p-1">
                                <span className={`px-2 py-1 border-2 rounded-md font-semibold ${user.isActive ? 'bg-cc-green/20 border-cc-green text-cc-green' : 'bg-cc-red/20 border-cc-red text-cc-red'}`}>
                                    {user.isActive ? 'فعال' : 'محظور'}
                                </span>
                            </td>
                            <td className="p-1">
                                <div className="flex items-center gap-1 justify-center text-xl">
                                    {/* <button className="text-gray-600 border rounded-md p-1 hover:bg-gray-600/20 transition-colors duration-150">
                                        <FaEye />
                                    </button> */}

                                    <form action={blockUser}>
                                        <input hidden readOnly type="text" name="id" value={user.id} />
                                        <input hidden readOnly type="text" name="type" value={user.isActive ? 'DeActive' : 'Active'} />
                                        <button type="submit" className={`${user.isActive ? 'text-red-600 hover:bg-red-600/20' : 'text-green-600 hover:bg-green-600/20'} cursor-pointer border rounded-md p-1 transition-colors duration-150`}>
                                            {user.isActive ? <SiAdblock /> : <FaUserCheck />}                                        </button>
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
            route="/admin/users"
        />
    </section>
  )
}

export default UsersPage