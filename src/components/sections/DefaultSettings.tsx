"use client"

import Image from "next/image"
import { useSettingsStore } from "@/stores/useSettingStore"

const DefaultSettings = () => {

      const settings = useSettingsStore(state => state.settings)

      return (
            <div className="lg:col-span-4 shadow-type1 bg-white rounded-3xl p-5 md:p-7">
                  <Image 
                        src={settings?.logo || ''}
                        alt="Logo Image"
                        width={100}
                  />
            </div>
  )
}

export default DefaultSettings
