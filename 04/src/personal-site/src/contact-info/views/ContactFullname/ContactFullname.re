let component = ReasonReact.statelessComponent("ComponentFullname");

let make = (~name, ~surname, ~className, _children) => {
    ...component,
    render: (_self) => <ContactElement className={className} label="Full name" value={name ++ " " ++ surname} />
};