import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

export function MyCart(props) {
  return (
      <StyledBadge badgeContent={props.count} color="secondary">
        <ShoppingCartIcon fontSize="large"/>
      </StyledBadge>
  );
}

export default MyCart;