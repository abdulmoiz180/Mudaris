import React from 'react'
import {Button,TextField} from "@mui/material"
export const SignUp = () => {
  return (
<>
<TextField type="text" />
<TextField type="email" />
<TextField type="password"/>
<Button>SignUp</Button>
<Button>SignUp with Google</Button>
<Button>SignUp with facebook</Button>
</>
  )
}
