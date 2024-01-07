import React from 'react'
import { Row, Table, Col, Card, CardHeader, ListGroup, ListGroupItem} from 'reactstrap'

export default function ProjectContact({data}) {
    console.log(data)
  return (
    <div >
        <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4 border border-2 border-primary'>
            <div className='mb-3 '>    
            <Card >
            <ListGroup flush>

                    <ListGroupItem>
                        <div dir='ltr'>
                            <div className='mb-2 fw-bold'>Kindly provide us with the observations updates through the following email :</div>
                            <div className='text-center'>
                                <a href='mailto: Notify.Cpv@cpvarabia.com'>Notify.Cpv@cpvarabia.com</a>
                            </div>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div dir='rtl' className='text-end'>
                            <div className='mb-2 fw-bold'>يرجى موافاتنا بالتحديثات الخاصة بالملاحظات عبر البريد الإلكتروني التالي : </div>
                            <div className='text-center'>
                                <a href='mailto: Notify.Cpv@cpvarabia.com'>Notify.Cpv@cpvarabia.com</a>
                            </div>
                        </div>
                    </ListGroupItem>

                </ListGroup>
            </Card>
            </div>
        </div>
    </div>
  )
}
