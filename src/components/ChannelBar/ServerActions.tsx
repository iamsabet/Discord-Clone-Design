import { serverOptions } from "../../constants";

const ServerActions = () => {
  return (
    <div className="server-actions-block">
      {serverOptions.map((serverOption) => {
        return (
          <ul className="list-group group">
            {serverOption.actions.map((action) => {
              return (
                <li className={`action ${action.class}`}>{action.title}</li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
export default ServerActions;
