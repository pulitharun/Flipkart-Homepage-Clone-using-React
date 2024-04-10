import React from "react";
import { useState } from "react";
import { Popover, Typography } from "@mui/material";


const AccountMenu = () => {
  const [el,setEl] = useState(null)
  
  const handlePopoverOpen = (event) =>{
    setEl(event.currentTarget)

  }
  const handlePopoverClose = ()=>{
    setEl(null)
  }


    return (
        <div>
        <Typography
          aria-owns={el ? 'account-menu-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Account  <span style= {{lineHeight: 3 , rotate : el ? "0deg" : "180deg",display :"inline-block"}}> ^ </span>
        </Typography>
        <Popover
          id="account-menu-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={!!el}
          anchorEl={el}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>My Profile</Typography>
          <Typography sx={{ p: 1 }}>Orders</Typography>
          <Typography sx={{ p: 1 }}>Wishlist</Typography>
          <Typography sx={{ p: 1 }}>Notifications</Typography>
          <Typography sx={{ p: 1 }}>Logout</Typography>
        </Popover>
      </div>
    )
}
export default AccountMenu