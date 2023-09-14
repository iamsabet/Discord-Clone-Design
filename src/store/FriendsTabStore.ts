import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'



const useFriendsTabStore = create<FriendStoreTypw>()(
    devtools(
        persist(
            (set) => ({
                selectedTab: "Online",
                setTab: (tab: FriendsTabType) => set(() => ({ selectedTab: tab })),
            }),
            {
                name: 'bear-storage',
            }
        )
    )
)

export {
    useFriendsTabStore
}