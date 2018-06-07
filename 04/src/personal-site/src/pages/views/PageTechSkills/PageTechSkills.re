[%bs.raw {|require("./PageTechSkills.css")|}];

let component = ReasonReact.statelessComponent("PageTechSkills");

let make = (_children) => {
    ...component,
    render: (_self) => 
        <Page header="Technical skills" className="page-tech-skills">
            <div className="page-tech-skills-body">
                <div className="page-tech-skills-element">{ReasonReact.string("C++")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("VC++")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("C#")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("CSS3")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("JavaSE")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("JavaEE")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("Javascript")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("ReactJS")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("Angular")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("ReasonML")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("NodeJS")}</div>
                <div className="page-tech-skills-element">{ReasonReact.string("PLSQL")}</div>
            </div>
        </Page>
};