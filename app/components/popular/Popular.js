var React = require('react');
var ReactDOM = require('react-dom');
require('./popular.css');

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }
        // binding "this" to the methods 
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState( function () {
            return {
                selectedLanguage: lang
            }
        });
    }

    render(){
        const languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
        return (
            <nav className="languages-nav">
                <ul className="languages-nav__ul">
                    { 
                        languages.map( lang => {
                            let listActive = lang===this.state.selectedLanguage ? 'languages-nav__list--active' : '';
                            return (//Start JSX
                                <li 
                                onClick={this.updateLanguage.bind(null, lang)}
                                className={listActive +' languages-nav__list'}
                                key={lang}
                                >
                                    {lang}
                                </li>
                            )
                        })//END map
                    }
                </ul>
            </nav>
        )//END return
    }// END render
}

module.exports = Popular;