import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const style = {
  marginRight: 0
}

export default class ToolbarExamplesSimple extends React.Component {

  constructor() {
    super()
    this.options = [
      'Projeto 1','Projeto 2','projeto 3'
    ]
    this.state = {
      value:this.options[0]
    };
    this.ky = 0
  }

  handleChange(event, index, value){
    this.setState({value})
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
            {this.options.map(o => (
              <MenuItem value={o} key={this.ky++} primaryText={o} />
            ))}
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
            <RaisedButton label="Add Todo" primary={true} style={style} />
            <RaisedButton label="Create Project" secondary={true}/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
