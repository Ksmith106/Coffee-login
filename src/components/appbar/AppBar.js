 import React from 'react'

import {IoEllipsisVertical, IoNotificationsOutline, IoMailOutline, IoPersonCircleOutline} from 'react-icons/io5'

 import {AppBarStyles, AppBarItems, AppBarItem, AppBarItemGroup} from './styles'
 import {IconButton} from './../../ui/buttons'
import {Brand} from '../branding/'
 
 function AppBar  (props){
     return( 
          <AppBarStyles>
              <AppBarItems>
                  <AppBarItem>
                   <Brand size="1.25rem" iconSize="1.5rem" color="#23123" fill="#23123"/>
                  </AppBarItem>
                  <AppBarItemGroup>
                      <IconButton>
                          <IoMailOutline size="1.5rem" color="grey"/>
                      </IconButton>

                      <IconButton>
                          <IoNotificationsOutline size="1.5rem" color="grey"/>
                      </IconButton>
                      <IconButton>
                        <img src="https://avatars.dicebear.com/api/initials/8K.svg?radius=50" width="48" alt="" />
                      </IconButton>
                      <IconButton>
                          <IoEllipsisVertical size="1.25rem" color="grey"/>
                      </IconButton>
                  </AppBarItemGroup>
              </AppBarItems>
          </AppBarStyles>
     )
 }
 
 export default AppBar 