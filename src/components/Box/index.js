import * as React from 'react'
import injectSheet from 'react-jss'
import {filterCssProps, properties, styles} from 'src/jss'

class Box extends React.PureComponent {
  static defaultProps = {
    component: 'div',
  }

  render() {
    const {
      classes,
      component: Component,
      children,
      ...other,
    } = this.props

    const passthrough = filterCssProps(other)

    return (
      <Component className={classes.root} {...passthrough}>
        {children}
      </Component>
    )
  }
}

export default injectSheet(styles)(Box)
