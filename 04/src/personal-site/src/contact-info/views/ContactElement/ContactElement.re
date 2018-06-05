[%bs.raw {|require('./ContactElement.css')|}]

let component = ReasonReact.statelessComponent("ContactElement");

let make = (~value,  ~className, _children) => {
    ...component,
    render: (_self) => 
        <div className={"contact-element " ++ className}>
            <span className="contact-element-value">{ReasonReact.string(value)}</span>
        </div>
};