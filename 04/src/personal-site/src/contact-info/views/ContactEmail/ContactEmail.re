let component = ReasonReact.statelessComponent("ContactEmail");

let make = (~email, _children) => {
    ...component,
    render: (_self) => <ContactElement value={email} label="email" />
};