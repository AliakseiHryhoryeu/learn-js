import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert, hideAlert } from '../redux/actions';
import Alert from './Alert';

class PostForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
        }
    }

    submitHandler = event => {
        event.preventDefault();

        const { title } = this.state

        if (!title.trim()) {
            return this.props.showAlert('Post title cannot be empty')
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({ title: '' })

    }
    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="mb-3">
                <div className="form-group mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
                {this.props.alert && <Alert text={this.props.alert} />}
            </form>
        )

    }
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

const mapDispatchToProps = { createPost, showAlert }



export default connect(mapStateToProps, mapDispatchToProps)(PostForm)

