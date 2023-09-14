type FriendsTabType = "Online" | "All" | "Pending" | "Blocked" | "Add Friend"

interface FriendStoreTypw {
    selectedTab: FriendsTabType
    setTab: (tab: FriendsTabType) => void
}
