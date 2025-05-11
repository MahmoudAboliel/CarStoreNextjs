"use client"

import { IoSend, IoStarSharp } from "@/lib/utils"
import Button from "@/components/Button"
import { useState } from "react";
import { addPublicReview } from "@/lib/apiCalls/PublicAPIsCall";
import { AddReviewSchema } from "@/lib/validation";
import { toast } from "react-toastify";

const AddPublicReviewForm = () => {
      const [stars, setStars] = useState(1)
      const [userName, setUserName] = useState('')
      const [phoneNumber, setNumber] = useState('')
      const [content, setContent] = useState('')

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
            const validation = AddReviewSchema.safeParse({
                  userName,
                  phoneNumber,
                  content
            })
            if (!validation.success) {
                  toast.error(validation.error.errors[0].message)
                  return
            }
            await addPublicReview(userName, phoneNumber, content, stars)
            setStars(1)
            setUserName('')
            setNumber('')
            setContent('')
      }
      return (
            <form className="mt-3 space-y-2 text-right w-full" onSubmit={handleSubmit}>
                  <div className="flex gap-2 items-center justify-start my-2">   
                        {[...Array(5)].map((_, index) => 
                        <button type="button" key={index}
                              onClick={() => setStars(index + 1)}
                        >
                              <IoStarSharp 
                              className={`${index < stars ? 'text-yellow-500' : 'text-gray-100'} text-xl`}
                              />
                        </button>
                        )}
                  </div>
                  
                  <input 
                        className="outline-none bg-cc-white p-2 text-gray-900 text-lg rounded-xl w-full"
                        type="text" 
                        placeholder="الاسم"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                  />
                  <input 
                        className="outline-none bg-cc-white p-2 text-gray-900 text-lg rounded-xl w-full"
                        type="text" 
                        placeholder="رقم الهاتف"
                        value={phoneNumber}
                        onChange={e => setNumber(e.target.value)}
                  />
                  
                  <textarea 
                        className="outline-none bg-cc-white p-2 text-gray-900 text-lg rounded-xl resize-none w-full"
                        rows={3}
                        placeholder="المحتوى"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                  />
                  <Button type="submit" text="إرسال" Icon={IoSend} reverse classes="hover:bg-cc-white hover:text-cc-red " />
            </form>
      )
}

export default AddPublicReviewForm