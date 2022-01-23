import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';

function Posts({ syncPosts }) {
    if (!syncPosts.length) {
        return <p className="text-center" >Post not yet</p>
    }

    return syncPosts.map((post) =>
        <Post post={post} key={post.id} />
    )
}

const mapStateToProps = (state) =>{
    return {
        syncPosts: state.posts.posts
    }
}
// mapDispatchToProps={

// }


export default connect(mapStateToProps,null)(Posts)