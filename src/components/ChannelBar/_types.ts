type ServerActionItem = {
    title: string,
    class: "normal" | "indigo" | "red",
}
type ServerOptionType = {
    group: number,
    actions: ServerActionItem[],
}
type ServerOptionsType = ServerOptionType[]