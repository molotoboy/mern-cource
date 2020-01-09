import React, { useState } from 'react'

export const CreatePage = () => {
  const { request } = useHTTP()
  const [link, useLink] = useState('')

  const pressHendler = async e => {
    if (e.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link })
        console.log(data)
      } catch (error) {}
    }
  }

  return (
    <div>
      <div className='col s8 offset-s2' style={{ paddingTop: '2rem' }}>
        <div className='input-field'>
          <input
            // placeholder='Вставьте ссылку'
            id='Link'
            type='text'
            name='link'
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressHendler}
          />
          <label htmlFor='link'>Вставьте ссылку</label>
        </div>
      </div>
    </div>
  )
}
