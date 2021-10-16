import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#7F000000',
    border: '0 none',
  },
  overlay: { background: 'rgba(0, 0, 0, 0.30) ' }
};

const Edit = ({ modalIsOpen, closeModal, item}) => {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [review, setReview] = React.useState('');
  function afterOpenModal() {
    console.log(item)
  }

  const editValue=(e, workid) =>{
    e.preventDefault();

    fetch(`http://localhost:8080/api/favorites/${workid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          workid: workid, 
          title: title,
          author: author,
          review: review
        })
    })
    .then(response => response.json())
    .then(() => window.location.reload());
  }

  return (
    <div>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Form Modal"
        >
        <form id="form-container" onSubmit={(e)=>{editValue(e, item.workid)}}>
            <fieldset>
                <h1>WorkID {item.workid}</h1>
                <label htmlFor="title">Title</label>
                <input type="string" id="title" name="title" placeholder={item.title} defaultValue="" onChange={(e)=>{setTitle(e.target.value)}}/><br/>
                <label htmlFor="author">Author:</label>
                <input type="string" id="author" name="author" placeholder={item.author} defaultValue="" onChange={(e)=>{setAuthor(e.target.value)}}/><br/>
                <label htmlFor="comment">Your review: </label>
                <textarea id="comment" name="comment" rows="2" cols="30" placeholder="Add a review" onChange={(e)=>{setReview(e.target.value)}}></textarea>
                <input className="button" type="submit" name="submit" id="submit-button" value="Submit" />
            </fieldset>
        </form>
        </Modal>
    </div>
  );
}

export default Edit;