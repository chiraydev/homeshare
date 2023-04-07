import create from 'zustand'
import { persist } from 'zustand/middleware'


export const useGlobalStore = create(
  persist(
  (set) => ({
 
    userDetails:{},
    landingPage:true,
   


    setUserDetails: async (value) => {
        set((state) => ({userDetails:value}))
      },
      setLandingPage: async (value) => {
        set((state) => ({landingPage:value}))
      },

      

    

}),
{
  name: 'storage',
  getStorage: () => localStorage,
}
)
)


