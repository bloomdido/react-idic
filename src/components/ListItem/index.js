import * as React from 'react'
import injectSheet from 'react-jss'
import {filterJssProps, buildJssStyles} from 'src/jss'

class ListItem extends React.PureComponent {
  static defaultProps = {
    component: 'li',
  }

  render() {
    const {
      classes,
      component: Component,
      children,
      ...other,
    } = this.props

    const passthrough = filterJssProps(other)

    return (
      <Component className={classes.root} {...passthrough}>
        {children}
      </Component>
    )
  }
}

const styles = {
  root: props => ({
    ...buildJssStyles(props),
  }),
}

export default injectSheet(styles)(ListItem)
