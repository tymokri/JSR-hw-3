import React from "react";
import * as PropTypes from "prop-types";

function DefinitionsList(props) {
    const { data } = props;

    return (
        <dl className="definitions-list">{
            data.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <dt className="definitions-list__item">{item.dt}</dt>
                        <dd className="definitions-list__item">{item.dd}</dd>
                    </React.Fragment>
                )
            })
        }</dl>
    )
}

DefinitionsList.propTypes = {
    data: PropTypes.array.isRequired
}

export default DefinitionsList;