import React from 'react'
import { Row, Table, Col} from 'reactstrap'

export default function ProjectDetails({data}) {
    console.log(data)
  return (
    <div className='text-center'>
                <Col sm={12}>
                    <Row>
                    <div className='col-sm-4 fw-bold p-2 bg-light border border-secondary-1 '>
                        Owner Name
                    </div>
                    <div className='col-sm-8 p-2 border border-secondary-1 '>
                        {data && data.ProjectDetails[0] && data.ProjectDetails[0].OwnerName}
                    </div>
                    </Row>
                </Col>
                <Col sm={12}>
                    <Row>
                    <div className=' col-sm-4 fw-bold p-2 bg-light border border-secondary-1 '>
                    Contractor name 
                    </div>
                    <div className='col-sm-8 p-2 border border-secondary-1 '>
                        {data && data.ProjectDetails[0] && data.ProjectDetails[0].ConstructorName}
                    </div>
                    </Row>
                </Col>
    </div>
  )
}
