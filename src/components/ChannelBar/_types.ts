type ServerActionItem = {
    title: string,
    class: "normal" | "indigo" | "red",
    icon: React.ReactNode,
    second_icon?: React.ReactNode
}
type ServerOptionType = {
    group: number,
    actions: ServerActionItem[],
}
type ServerOptionsType = ServerOptionType[]