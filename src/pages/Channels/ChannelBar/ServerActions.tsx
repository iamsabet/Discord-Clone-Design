import { serverOptions } from "../../../constants";
import { useChannelBarStore } from "../../../store/ChannelBar.store";

const ServerActions = ({ server_id, channel_id }: ChannelSubPageProps) => {
  const { openServerMenuFlag, hideMutedChannels, toggleHideMutedChannales } =
    useChannelBarStore((state) => state);
  console.log(server_id + " / " + channel_id);
  return (
    <div
      className={`server-actions-block ${
        openServerMenuFlag
          ? "top-14 z-10 opacity-100"
          : "-top-14 -z-10 opacity-0"
      }`}
    >
      {serverOptions.map((serverOption, index) => {
        return (
          <ul key={index.toString()} className="list-group group">
            {serverOption.actions.map((action) => {
              return (
                <li
                  key={action.title}
                  className={`action action-${action.class}`}
                >
                  {action.second_icon ? (
                    <div
                      className="w-full flex justify-between"
                      onClick={() => toggleHideMutedChannales()}
                    >
                      <span>{action.title}</span>
                      <span
                        className={`text-[18px] transition-all duration-150 ease-in-out ${
                          hideMutedChannels
                            ? "text-indigo-500 group-hover:text-gray-200"
                            : ""
                        }`}
                      >
                        {hideMutedChannels ? action.second_icon : action.icon}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full flex justify-between">
                      <span>{action.title}</span>
                      <span className="text-[18px]">{action.icon}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
export default ServerActions;
