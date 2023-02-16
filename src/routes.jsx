import React from 'react'
const FormDesign = React.lazy(() => import('./pages/form-design'))

const routers = [
  {
    path: '/home',
    element: <FormDesign />,
  },
];

export default routers

