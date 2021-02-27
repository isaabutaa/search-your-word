import React from "react"

function ThesaurusResults(props) {
    const {results} = props
    return (
        <>
            <div className="circle-word-flex-container">
                <div className="circle" style={{background: "crimson"}}></div>
                <h2 className="results-h2">{results.meta.id}</h2>
            </div>
            <h3>{results.shortdef.length > 1 ? "definitions:" : "definition:"}</h3>
            <ol>
                {results.shortdef.map((definition, i) => <li key={i}> {definition} </li>)}
            </ol>
            <h3>synonyms:</h3>
            <ol>
                {results.meta.syns.map((synArr, i) => <li key={i}> {synArr.join(", ")} </li>)}
            </ol>
            {
                results.meta.ants.length > 1 && <h3>antonyms:</h3>
            }
            <ol>
                {results.meta.ants.map((antArr, i) => <li key={i}> {antArr.join(", ")} </li>)}
            </ol>
        </>
    )
}

export default ThesaurusResults