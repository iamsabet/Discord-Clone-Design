import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ServerType {
    id: string
    title: string
    image: string
    route: string
    selected: boolean
    members: []
    channels: []
}

interface ServersStateType {
    servers: ServerType[]
    initial: (list: ServerType[]) => void
}

const useServersStore = create<ServersStateType>()(
    devtools(
        persist(
            (set) => ({
                servers: [],
                initial: (list: ServerType[]) => set(() => ({ servers: list })),
            }),
            {
                name: 'bear-storage',
            }
        )
    )
)

export {
    useServersStore
}