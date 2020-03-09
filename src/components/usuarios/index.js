import React from 'react';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import Tabla from './Tabla';

class Usuarios extends React.Component {
	// async
	componentDidMount() {
		if (!this.props.usuarios.length) {
			this.props.traerTodos();
		}
	}

	ponerContenido = () => {
		if (this.props.cargando) {
			return <Spinner></Spinner>;
		}
		if (this.props.error) {
			return <Fatal mensaje={this.props.error} />;
		}
		return <Tabla />;
	};

	// ponerFilas = () =>
	// 	this.props.usuarios.map(usuario => (
	// 		<tr key={usuario.id}>
	// 			<td>{usuario.name}</td>
	// 			<td>{usuario.email}</td>
	// 			<td>{usuario.website}</td>
	// 		</tr>
	// 	));

	render() {
		// console.log(this.props);
		// console.log(this.props.cargando)
		// console.log(this.props.error)
		return (
			<div>
				<h1>Usuarios</h1>
				{this.ponerContenido()}
			</div>
		);
	}
}

const mapStateToProps = reducers => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
