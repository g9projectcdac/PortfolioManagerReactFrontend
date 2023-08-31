import ReactModal from 'react-modal';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '400px',
          height: '200px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >

      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete the record?</p>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn btn-primary mx-2" onClick={onClose}>Cancel</button>
        <button className="btn btn-danger mx-2" onClick={onConfirm}>Delete</button>
      </div>

    </ReactModal>
  );
};

export default DeleteModal;
