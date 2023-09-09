import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ChannelStateType {
    openServerMenuFlag: boolean
    toggleOpenServerMenu: () => void
    closeServerMenu: () => void
    openServerMenu: () => void
    hideMutedChannels: boolean
    toggleHideMutedChannales: () => void
}
const useChannelBarStore = create<ChannelStateType>()(
    devtools(
        // persist(
        (set) => ({
            openServerMenuFlag: false,
            toggleOpenServerMenu: () => set((state) => ({ openServerMenuFlag: !state.openServerMenuFlag })),
            closeServerMenu: () => set((_state) => ({ openServerMenuFlag: false })),
            openServerMenu: () => set((_state) => ({ openServerMenuFlag: true })),
            hideMutedChannels: false,
            toggleHideMutedChannales: () => set((state) => ({ hideMutedChannels: !state.hideMutedChannels })),
        }),
        {
            name: 'bear-storage',
        }
        // )
    )
)

export {
    useChannelBarStore
}