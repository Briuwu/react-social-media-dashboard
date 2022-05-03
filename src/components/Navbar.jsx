import React from 'react'


function Navbar({toggle, handleChange}) {
  

  return (
    <header className={`header ${toggle}`}>
      <div className="dashboard">
        <h1 className="dashboard-title">Social Media Dashboard</h1>
        <p className='dashboard-total'>Total Followers: 23,004</p>
      </div>
      <div className="toggle">
        <p className='toggle-mode'>{toggle} Mode</p>
        <label aria-label='switch' className="switch">
          <input type="checkbox" onChange={handleChange} />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  )
}

export default Navbar