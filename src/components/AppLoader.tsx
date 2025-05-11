"use client"
import { useSettingsStore } from "@/stores/useSettingStore"
const AppLoader = () => {
      const loading = useSettingsStore(state => state.loading)

      if (!loading) return null
  return (
    <main className='fixed inset-0 bg-white z-500  w-screen h-screen flex justify-center items-center'>
      <div className="relative">
        <span className='absolute top-1/2 left-1/2 -translate-1/2 w-8 h-8 border-5 border-cc-red   border-t-transparent  animate-spin rounded-full' />
        <span className='absolute top-1/2 left-1/2 -translate-1/2 w-12 h-12 border-5 border-cc-red border-r-transparent animate-spin rounded-full' />
        <span className='absolute top-1/2 left-1/2 -translate-1/2 w-16 h-16 border-5 border-cc-red border-b-transparent animate-spin rounded-full' />
        <span className='absolute top-1/2 left-1/2 -translate-1/2 w-20 h-20 border-5 border-cc-red animate-spin rounded-full' />
      </div>
    </main>
  )
}

export default AppLoader
