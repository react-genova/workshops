let component = ReasonReact.statelessComponent("ContactEmail");

let make = (~email, ~className, _children) => {
    ...component,
    render: (_self) => <ContactElement className={className} value={email} label="email" />
};