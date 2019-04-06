import React, {Component} from 'react'

class Form extends Component {

    categoryChosenRef = React.createRef();

    categoryChosen = (e) => {
        e.preventDefault();

        // leer refs
        const category = this.categoryChosenRef.current.value
        if (category && typeof category !== 'undefined'){
            // crear objecto
        // mandarlo a app
            this.props.getTopHeadlines(category)
        } else {
            this.props.getTopHeadlines(null)
        }



        // resetear el formulario
        e.currentTarget.reset();
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.categoryChosen}>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoryChosenRef}>
                                <option value="general" defaultValue> General</option>
                                <option value="business"> Negocios</option>
                                <option value="entertainment"> Entretenimiento</option>
                                <option value="health"> Salud</option>
                                <option value="science"> Ciencia </option>
                                <option value="sports"> Deporte</option>
                                <option value="technology"> Tecnologia</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className="btn amber darken-2" value="Buscar"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
