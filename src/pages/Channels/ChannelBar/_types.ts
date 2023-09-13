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
type ChannelSubPageProps = {
    server_id: string;
    channel_id: string;
}
type ServerOptionsType = ServerOptionType[]