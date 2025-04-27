import { toast } from "react-toastify"
import { DOMAIN } from "../constance"
import { AddCommentApiResponse, SettingsApiResponse } from "../Dto"
import { useSettingsStore } from "@/stores/useSettingStore"

export const fetchSettings = async () => {
    useSettingsStore.setState({ loading: true })
    const response = await fetch(`${DOMAIN}/Settings/Show`)

    if (!response.ok) throw new Error("Failed to fetch Settings")

    const settings = await response.json() as SettingsApiResponse
    
    if (settings.errorMessage) {
        toast.error(settings.errorMessage)
        return 
    }

    useSettingsStore.getState().setSettings(settings.data)
    // console.log('from api', useSettingsStore.getState().settings)
    useSettingsStore.setState({ loading: false })
}

export const addComment = async (commentData: object, carId: number) => {
    try {
        const res = await fetch(`${DOMAIN}/Car/AddComment/${carId}`, {
            method: 'POST',
            body: JSON.stringify(commentData)
        })
        
        if (!res.ok) {
            toast.error('Something wrong...')
            console.log(res.status)
            console.log(res.statusText)
            return
        }
        const response = await res.json() as AddCommentApiResponse;
        
        if (response.errorMessage) {
            toast.error(response.errorMessage)
            return
        }
        if (response.status !== 200) {
            toast.error(`falid to add ${response.status}`)
            return
        }
        toast.success('Successfully...')
        toast.success(`${response.data}`)
        console.log(response)
        console.log('end')
    } catch (err) {
        console.log(err)
    }
}