
import { DOMAIN } from "@/lib/constance";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { RegisterApiResponse, LoginApiResponse } from "../Dto";

export const registerFunc = async (formData:FormData, reset:()=>void) => {
  try {
        
        const res = await fetch(
          `${DOMAIN}/Account/Register`, {
            method: 'POST',
            body: formData
          }
        );

        if (!res.ok)
          throw new Error("Register Falid")

        const response = await res.json() as RegisterApiResponse

        if (response.errorMessage) {
          toast.error(response.errorMessage);
          console.log(response.errorMessage)
          return;
        }
        console.log(response)

        document.cookie = `token=${response.data}; max-age=${60 * 60 * 24 * 7}; path=/`;
        localStorage.setItem('token', response.data);
        
        toast.success("Account created successfully!");
        reset()
        redirect('/')
  
      } catch (error) {
  
        // toast.error(error)
        console.log(error)
  
      }
}

export const loginFunc = async (Email:string, Password:string, replace:(url:string)=>void, reset:()=>void) => {
  try {
      console.log('asdfsa ')
      const res = await fetch(
        `${DOMAIN}/Account/Login`, {
          method: 'POST',
          body: JSON.stringify({
            Email,
            Password
          }),
          headers: { 'Content-Type': 'application/json'}
          
        },
      )
      
      if (!res.ok)
        throw new Error("Login Falid")

      const response = await res.json() as LoginApiResponse

      if (response.errorMessage) {
          toast.error(response.errorMessage);
          return;
      }

      document.cookie = `token=${response.data}; max-age=${60 * 60 * 24 * 7}; path=/`;
      localStorage.setItem('token', response.data);
      
      console.log(response.data);
      replace('/');
      reset();
      toast.success("Login successfully");
      
      
  } catch (error) {
      console.log(error)
  }

}


export const fetchUser = async (token: string) => {

  const response = await fetch(
    `${DOMAIN}/Account/GetProfile`, 
    {
      method: 'GET',
      cache: 'no-store',
      // update data every 50 second
      // next: {revalidate: 50}
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        
      },
    });
  
    if (!response.ok) {
      console.log(response.status)
      console.log(response.statusText)
      console.log(response.body)
      console.log(response.headers)
      console.log(response.bodyUsed)
      throw new Error("Faild to Fetch Profile Info");
    }

    
  
    return response.json();

}

// export const fetchUser = async (token: string) => {
//   // const token = localStorage.getItem('token');

//   if (!token) {
//     throw new Error("Token not found");
//   }

//   const response = await fetch(`${DOMAIN}/Account/GetProfile`, {
//     method: 'GET',
//     cache: 'no-store',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`, // backticks 
//     },
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     console.error("Fetch profile failed:", errorText);
//     throw new Error("Failed to fetch profile info");
//   }

//   return await response.json();
// };