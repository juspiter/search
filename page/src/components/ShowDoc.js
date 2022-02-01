import React from 'react';
import {IoDocument, IoDocumentLock} from 'react-icons/io5'
import "../partials/ShowDoc.scss"

const ShowDoc = (props) => {
  if (props.doc == null) {
    return (null)
  }
  if (props.doc === "doc_sigilo") {
    return (
      <a title="Documento Sigiloso" target="_blank" rel="noreferrer" className="see-doc" href={props.url}>
        <IoDocumentLock/>
      </a>
    );
  }
  else {
    return (
      <a target="_blank" rel="noreferrer" className="see-doc" href={props.doc}>
        <IoDocument/>
      </a>
     );
  }
}

export default ShowDoc;
