import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'reactstrap'
import ProjectDetails from '../components/ProjectDetails/English/ProjectDetails'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import ProjectMissingData from '../components/ProjectDetails/English/ProjectMissingData'
import ProjectContact from '../components/ProjectDetails/English/ProjectContact'

export default function MissingData() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("Tr");
    const [data,setData] = useState(null)
    const [errorMSG , setErrorMSG] = useState(false)

    useEffect(()=>{
        axios.post('https://rd0.cpvarabia.com/api/CMissing.php',{Token:token})
        .then(res => {
            setData(res.data.RFNO)
            if(res.data.error){
              setErrorMSG(true)
            }
            })
        .catch(e => { console.log(e)})
    },[])

  
  return (
    <div className='content-page'>
      {!errorMSG ? 
      <Container>
        {
            data !== null && data != undefined ?
        <>
      {/* ProjectDetails component */}
        <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
          <div className='text-end'>
            <div className='d-flex justify-content-end mb-2'>
                <div style={{width: '130px'}}>
                </div>
            </div>
          </div>
          
          <div className='bg-dark text-white  p-3 form-title rounded-top fw-bold'>
            RefranceNo. {data.ReferenceNo}
          </div>

      {/* English */}
          <div className='form-container shadow-lg p-4 bg-body rounded-bottom'>
            <ProjectDetails data={data}/>
          </div>

        </div>

      {/* Project Tickets */}
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            {/* English */}
            <ProjectMissingData data={data}/>
          </div>

          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            {/* English */}
            <ProjectContact />
          </div>
      
        </>
        :         
        <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom text-center'>
                <Spinner />
                {/* {data == undefined && setTimeout(()=>history.push('/not-found'))} */}
            </div>
        </div>
        }
      </Container>
      :
      <Container>
      <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
          <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
              Error 404
          </div>
          <div className='form-container shadow-lg p-4 bg-body rounded-bottom d-flex align-items-center text-center justify-content-center' style={{height:'200px'}}>
              <h4>This page is Not Found</h4>
          </div>
      </div>
      </Container>
      }
    </div>
  )
}
