import React from 'react'

export const Modal=(prop)=>(
    <div className="modal fade" id={`popup${prop.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog model-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Name: {prop.launch.name}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>{prop.launch.details}</p>
          <p>{prop.launch.date_utc}</p>
          <p>{prop.launch.cores[0].reused? "Reused: Yes":"Reused: No"}</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
)