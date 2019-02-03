import React, {Component} from "react"
import { Helmet } from "react-helmet"
import Case from "case"

class CaseText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        // this.convertUpper = this.convertUpper.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.textArea = React.createRef()
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({value: this.textArea.current.value});
    }

    // convertUpper(event) {
    //     event.preventDefault();
    //     this.setState({value: this.textArea.current.value.toUpperCase()});
    // }

    render() {
        return (
            <form>
                <textarea name="text" onChange={this.handleChange} ref={this.textArea} value={this.state.value} />
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.lower(this.textArea.current.value)});}}>lower case</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.upper(this.textArea.current.value)});}}>UPEER CASE</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.title(this.textArea.current.value)});}}>Title Case</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.sentence(this.textArea.current.value)});}}>Sentence case</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.camel(this.textArea.current.value)});}}>camelCase</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.pascal(this.textArea.current.value)});}}>PascalCase</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.snake(this.textArea.current.value)});}}>snake_case</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.kebab(this.textArea.current.value)});}}>kebab-case</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.header(this.textArea.current.value)});}}>Header-Case</button>
                <button className="btn btn-1 btn-1d" onClick={(e) => {e.preventDefault();this.setState({value: Case.constant(this.textArea.current.value)});}}>CONSTANT_CASE</button>
            </form>
        );
    }
}

export default () => (<main>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Case - a convenient case converter</title>
        <meta name="Description" content="Easily convert text between different cases: lower case, UPPER CASE, Sentence case, Capitalized Case, camelCase, snake_case and much more." />
        <link rel="canonical" href="https://case.imedadel.me" />
        <html lang="en" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta name="google-site-verification" content="zTgLUUdv7vAoD9OEXQf1Lurh9PxlHof08WW1h3p1cgw" />
        <meta name="msvalidate.01" content="D2ECEF51E4DAF349AA4E295011F6A257" />
        <meta name="yandex-verification" content="44ac89a41b3dd42e" />

        <meta property="og:url" content="https://case.imedadel.me" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Case" />
    </Helmet>
    <h1>Case – A convenient case converter</h1>
    <CaseText/>
</main>)
