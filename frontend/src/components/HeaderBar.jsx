import React, { Component, PropTypes } from "react";

import Input from "metabase/components/Input.jsx";


export default class Header extends Component {
    static defaultProps = {
        buttons: [],
        className: "py1 lg-py2 xl-py3 wrapper",
        breadcrumb: null
    };

    render() {
        const { isEditing, name, description, breadcrumb, buttons, className } = this.props;

        var titleAndDescription;
        if (isEditing) {
            titleAndDescription = (
                <div className="Header-title flex flex-column flex-full bordered rounded my1">
                    <Input className="AdminInput text-bold border-bottom rounded-top h3" type="text" value={name} onChange={(e) => this.props.setItemAttributeFn("name", e.target.value)} />
                    <Input className="AdminInput rounded-bottom h4" type="text" value={description} onChange={(e) => this.props.setItemAttributeFn("description", e.target.value)} placeholder="No description yet" />
                </div>
            );
        } else {
            if (name && description) {
                titleAndDescription = (
                    <div className="Header-title my1 py2">
                        <h2>{name}</h2>
                        <h4 className="text-grey-3">{description || "No description yet"}</h4>
                    </div>
                );
            } else {
                titleAndDescription = (
                    <div className="flex align-baseline">
                        <h1 className="Entity-title my1">{name}</h1> {breadcrumb}
                    </div>
                );
            }
        }

        const headerButtons = buttons.map((section, sectionIndex) => {
            return section && section.length > 0 && (
                <span key={sectionIndex} className="Header-buttonSection">
                    {section}
                </span>
            );
        });

        return (
            <div className={"QueryBuilder-section flex align-center " + className}>
                <div className="Entity">
                    {titleAndDescription}
                </div>

                <div className="flex align-center flex-align-right">
                    {headerButtons}
                </div>
            </div>
        );
    }
}
