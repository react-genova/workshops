let component = ReasonReact.statelessComponent("ComponentFullname");

let make = (~name, ~surname, _children) => {
    ...component,
    render: (_self) => <ContactElement label="Full name" value={name ++ " " ++ surname} />
};