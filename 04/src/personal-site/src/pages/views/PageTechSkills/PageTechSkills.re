[%bs.raw {|require("./PageTechSkills.css")|}];

let component = ReasonReact.statelessComponent("PageTechSkills");

let make = (_children) => {
    ...component,
    render: (_self) => 
        <Page className="page-tech-skills">
            ...(<ContactInfo />)
        </Page>
};