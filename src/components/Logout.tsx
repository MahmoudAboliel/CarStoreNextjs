import { MdLogout } from "@/lib/utils"
import { useUserStore } from "@/stores/useUserStore"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"

interface LogoutProps {
      setToken?: (value: null) => void
}

const Logout = ({ setToken }: LogoutProps) => {

      const router = useRouter()
      const removeUser = useUserStore(state => state.removeUser)
      const handleLogout = () => {
            deleteCookie('token')
            deleteCookie('isAdmin')
            removeUser()
            
            if (setToken) setToken(null)
            router.refresh()
      }
      
      return (
      <button
            onClick={handleLogout}
            className="border-2 border-cc-red flex items-center gap-2 p-1 rounded-md text-cc-red font-bold hover:bg-cc-red/20 transition duration-150">
            <MdLogout className="text-xl" />
            تسجيل الخروج
            </button>
      )
}

export default Logout
