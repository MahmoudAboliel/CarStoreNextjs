import { DOMAIN } from "@/lib/constance"
import { toast } from "react-toastify"
import { RegisterApiResponse, LoginApiResponse, ProfileInfoApiResponse } from "@/lib/Dto"
import { setCookie } from "cookies-next"

export const registerFunc = async (formData:FormData, reset:()=>void, push:(url:string)=>void, refersh:()=>void) => {
  try {
    const res = await fetch(
      `${DOMAIN}/Account/Register`, {
        method: 'POST',
        body: formData,
        
      }
    )

    if (!res.ok)
      throw new Error("خطأ في إنشاء الحساب")

    const response = await res.json() as RegisterApiResponse

    if (response.errorMessage) {
      toast.error(response.errorMessage)
      console.log(response.errorMessage)
      return
    }

    setCookie('token', response.data, {
      maxAge: 60 * 60 * 24 * 2,
    })
    setCookie('isAdmin', response.isAdmin, {
      maxAge: 60 * 60 * 24 * 2,
    })
    
    toast.success("تم إنشاء الحساب بنجاح");
    reset()
    refersh()
    window.location.reload()
    push('/')
  
  } catch (error) {
    console.log(error)
  }
}

export const loginFunc = async (Email:string, Password:string, reset:()=>void, push:(url:string)=>void, refresh:()=>void) => {
  
  try {
    const res = await fetch(
      `${DOMAIN}/Account/Login`, {
        method: 'POST',
        body: JSON.stringify({
          Email,
          Password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      },
    )
    
    if (!res.ok) {
      console.log(res.status)
      console.log(res.statusText)
      console.log("خطأ في تسجيل الدخول")
    }
      

    const response = await res.json() as LoginApiResponse

    if (response.errorMessage) {
        toast.error(response.errorMessage)
        console.log(response.errorMessage)
        return
    }

    setCookie('token', response.data, {
      maxAge: 60 * 60 * 24 * 2,
    })
    setCookie('isAdmin', response.isAdmin, {
      maxAge: 60 * 60 * 24 * 2,
    })

    reset()
    window.location.reload()
    refresh()
    push('/')
    toast.success("تسجيل الدخول بنجاح")
    
    
      
  } catch (error) {
      console.log(error)
  }
}

export const fetchProfile = async (token: string) => {
  // console.log(token)
  try {
    const res = await fetch(
      `${DOMAIN}/Account/GetProfile`, {
        method: 'GET',
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    
    if (!res.ok) {
      console.log(res.statusText)
      throw new Error("خطأ في جلب بيانات المستخدم");
    }
  
    const response = await res.json() as ProfileInfoApiResponse
      
    if (response.errorMessage) {
      toast.error(response.errorMessage)
      console.log(response.errorMessage)
      throw new Error("خطأ في جلب بيانات المستخدم");
    }
    
    return response.data
    
  } catch (error) {
    console.log(error)
    throw new Error("خطأ في جلب بيانات المستخدم");
  }
}

export const editProfile = async (formData:FormData, token: string) => {
  try {
    const res = await fetch(
      `${DOMAIN}/Account/EditProfile`, {
        method: 'POST',
        cache: 'no-store',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    
    if (!res.ok) {
      console.log(res.statusText)
      toast.error(`خطأ في تعديل بيانات المستخدم ${res.statusText}`)
    }
  
    const response = await res.json() as RegisterApiResponse
      
    if (response.errorMessage) {
      toast.error(response.errorMessage)
      console.log(response.errorMessage)
    }
    
    toast.success(response.data)
    window.location.reload()
    
  } catch (error) {
    console.log(error)
  }
}

export const logout = async (token: string) => {
  try {
    const res = await fetch(`${DOMAIN}/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) throw new Error('خطأ في تسجيل الخروج')

    toast.success('تم تسجيل الخروج بنجاح')

  } catch (error) {
    console.log(error)
  }
}