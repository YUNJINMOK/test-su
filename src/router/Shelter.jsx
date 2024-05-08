import React from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import "../style/shelter.css"

export default function Shelter() {
  return (
    <Layout>
      <div className='shelterSection'>
        <div className='shelterInfo'>
          <Title title="편의시설 안내"/>
          <div>
            <div className='shelterImg'></div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
