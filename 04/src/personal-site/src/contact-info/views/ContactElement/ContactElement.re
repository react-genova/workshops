[%bs.raw {|require('./ContactElement.css')|}]

let component = ReasonReact.statelessComponent("ContactElement");

let make = (~value, ~label, _children) => {
    ...component,
    render: (_self) => 
        <div className="contact-element">
            <span className="contact-element-label">{ReasonReact.string(label ++ ":")}</span>
            <span className="contact-element-value">{ReasonReact.string(value)}</span>
        </div>
};