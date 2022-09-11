import React, { Component } from 'react';

class Counter extends Component {
	// state = {
	// 	// value: this.props.counter.value,
	// 	tags: [ 'tag1', 'tag2', 'tag3' ],
	// 	imageUrl: 'https://picsum.photos/200'
	// };

	// constructor() {
	// 	super();
	// 	console.log('constructor this', this);

	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	// handleIncrement = (product) => {
	// 	// console.log('increment clicked!', this);
	// 	console.log(product);
	// 	this.setState({
	// 		value: this.state.value + 1
	// 	});
	// };

	doHandleIncrement = () => {
		this.handleIncrement({ id: 1 });
	};

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps);
		console.log('prevstate', prevState);
		if (prevProps.counter.value !== this.props.counter.value) {
			// Ajax call and get new data from the server
		}
	}

	componentWillUnmount() {
		console.log('Counter - Unmount');
	}

	render() {
		console.log('Counter - Rendered');
		// let classes = 'badge m-2 badge-';
		// classes += this.state.value === 0 ? 'warning' : 'primary';

		return (
			<div className='row'>
				{/* <img src={this.state.imageUrl} alt='image' /> */}
				<div className='col-1'>
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className='col'>
					<button
						// onClick={this.doHandleIncrement}
						onClick={() => this.props.onIncrement(this.props.counter)}
						className='btn btn-secondary btn-sm'>
						+
					</button>
					<button
						// onClick={this.doHandleIncrement}
						onClick={() => this.props.onDecrement(this.props.counter)}
						className='btn btn-secondary btn-sm m-2'
						disabled={this.props.counter.value === 0 ? 'disabled' : ''}>
						-
					</button>
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className='btn btn-danger btn-sm'>
						Delete
					</button>
				</div>

				{/* <ul>{this.state.tags.map((tag, index) => <li key={index}> {tag} </li>)}</ul> */}
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? 'Zero' : count;
	}
}
export default Counter;

// import React, { Component } from 'react';

// class Counter extends Component {
// 	state = {
// 		count: 0,
// 		tags: []
// 	};

// 	renderTags() {
// 		if (this.state.tags.length === 0) return <p>There is no tags!</p>;

// 		return <ul>{this.state.tags.map((tag, index) => <li key={index}> {tag} </li>)}</ul>;
// 	}

// 	render() {
// 		return (
// 			<React.Fragment>
// 				{this.state.tags.length === 0 && 'Please create new tag!'}
// 				{this.renderTags()}
// 			</React.Fragment>
// 		);
// 	}
// }
// export default Counter;
