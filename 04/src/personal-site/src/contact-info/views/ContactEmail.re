let component = ReasonReact.statelessComponent("ContactEmail");

let make = (~email, _children) => {
    ...component,
    render: (_self) => <span>{ReasonReact.string("em@il" ++ email)}</span>
};