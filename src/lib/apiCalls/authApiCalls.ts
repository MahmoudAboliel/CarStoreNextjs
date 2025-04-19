
import { DOMAIN } from "@/lib/constance";
import { toast } from "react-toastify";
import axios from "axios";

export const loginFunc = async (email:string, password:string, replace:(url:string)=>void, reset:()=>void) => {
    try {
        const response = await axios.post(
                `${DOMAIN}/Account/Login`,
                {
                  Email: email,
                  Password: password,
                },
                
                
              );

        if (response.data.errorMessage) {
            toast.error(response.data.errorMessage);
            return;
        }
        document.cookie = `token=${response.data.data}; max-age=${60 * 60 * 24 * 7}; path=/`;
        // (await cookies()).set('token', response.data.data, {
        //   maxAge: 60 * 60 * 24 * 7,
        // })
        localStorage.setItem('token', response.data.data);
        console.log(response.data.data);
        replace('/');
        reset();
        toast.success("Login successfully");
        
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message || "Login Failed! sdf");
            } else {
                    toast.error("An unexpected error occurred");
                }
    }

}


export const fetchUser = async (token: string) => {

    const response = await fetch(
        `${DOMAIN}/Account/GetProfile`, 
        {
          cache: 'no-store',
          // update data every 50 second
          // next: {revalidate: 50}
          headers: {
            Authorization: `Bearer ${token}`,

          },
          credentials: 'include'
        });
    
      if (!response.ok)
        throw new Error("Faild to Fetch Profile Info");
    
      return response.json();

}
