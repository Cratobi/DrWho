import React, { Fragment } from 'react'

import NavBar from '../../component/module/navBar/navBar'

function AdminNav() {
  return (
    <Fragment>
      <NavBar
        navigations={[
          { link: '/admin/reviews', name: 'Manage User', icon: 'supervised_user_circle' },
          { link: '/admin/appointments', name: 'Signup Doctor', icon: 'assignment_ind' },
        ]}
      />
    </Fragment>
  )
}

export default AdminNav
