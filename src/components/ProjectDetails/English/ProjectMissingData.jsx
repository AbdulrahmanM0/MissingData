import React from 'react'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

export default function ProjectMissingData({data}) {
    console.log(data.Missing)
    
  return (
    <div> 
        <>
        {/* Missing */}
        {data.Missing.length >= 1 &&
        <>
            <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold'>
            Missing Data 
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
            {data.Missing.map(item => 
            <div className='mb-3' key={item.ID}>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup flush>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2 fw-bold'>Comment: </div>
                            <div>
                                {item.CommentEN}
                            </div>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div dir='rtl' className='text-end'>
                            <div className='mb-2 fw-bold'>التعليق :</div>
                            <div>
                                {item.CommentAR}
                            </div>
                        </div>
                    </ListGroupItem>

                </ListGroup>
            </Card>
            </div>
            )
            }
            </div>
        </>
        }
    </>
    </div>
  )
}
