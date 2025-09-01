import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'


const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)
    const currentUser = useSelector(state => state.auth.currentUser);

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)
 
    const onSavedPostClick = () => {
        if(title && content && userId){
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)


        // Only allow the logged-in user to see/select themselves
        let userOptions = [];
        let filteredUsers = users;
        if (currentUser) {
            filteredUsers = users.filter(
                user => user.username === currentUser.username
            );
            userOptions = filteredUsers.map(user => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ));
        }

    // Only show form if logged in
    if (!currentUser) {
        return (
            <section>
                <h2>Add a New Post</h2>
                <p>You must be registered and logged in to post.</p>
            </section>
        );
    }

    return (
        <section>
                <h2>Add a New Post</h2>
                <form>
                        <label htmlFor="postTitle">Post Title</label>
                        <input
                                type="text"
                                id="postTitle"
                                value={title}
                                onChange={onTitleChanged}
                        />
                        <label htmlFor="postAuthor">Author:</label>
                        <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                                <option value=''>Select an author</option>
                                {userOptions}
                        </select>
                        <label htmlFor="postContent">Post Content</label>
                        <textarea
                                id="postContent"
                                value={content}
                                onChange={onContentChanged}
                        />
                        <button 
                        type="button"
            onClick={onSavedPostClick}
            disabled={!canSave}
            >Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm
