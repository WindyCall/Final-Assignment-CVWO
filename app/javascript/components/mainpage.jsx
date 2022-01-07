import React, { Component } from 'react';
import Word from './word';
import Taglist from './taglist';

// can not have the same word

class Mainpage extends React.Component {

    state = {
        Updateselectedtypenow: ""
    };

    handleUpdateChange = (Updateselectedtypenow) => {
        //console.log(this.state.Updateselectedtypenow);
        this.setState({ Updateselectedtypenow });
        //console.log(this.state.Updateselectedtypenow);
    }

    constructor() {
        super();
        //console.log("mainpage contructed")
    }
    render() { 
        return (
        <div>
            <h2>My-words list</h2>
            <div className="input-group mb-3">
                <button
                    onClick = {() => this.props.onAddword(this.refs.addWord.value, this.props.Addtagselectednow)}
                    className='btn btn-warning btn btn-secondary btn'
                >
                    Add
                </button>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                       placeholder="Add Word..." ref="addWord"    
                />
                <Taglist
                    onChangetype = '3'
                    onAddchange = {this.props.onAddchange}
                    taglist = {this.props.taglist}
                    tagidnow = {this.props.tagidnow}
                />
            </div>
            {this.props.words.map( word => {
                if ((this.props.letters === "" || word.attributes.name.toLowerCase().includes(this.props.letters.toLowerCase()))
                    && (word.attributes.tag === this.props.Filtertagselectednow || this.props.Filtertagselectednow === "")) {
                    return <Word
                        key = {word.id}
                        name = {word.attributes.name}
                        id = {word.id}
                        onDelete = {this.props.onDelete}
                        onUpdate = {this.props.onUpdate}
                        onUpdatechange = {this.handleUpdateChange}
                        Updateselectedtypenow = {this.state.Updateselectedtypenow}
                        word = {word}
                        taglist = {this.props.taglist}
                        tagidnow = {this.props.tagidnow}
                    />
                }   
            }
            )}
        </div>
        );
    }
}
 
export default Mainpage;