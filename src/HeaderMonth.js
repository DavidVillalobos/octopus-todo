import React, { Component } from "react";
import {Grid,Cell} from 'react-foundation';
class HeaderMonth extends Component {
  render() {
    return (
      <div>
       <Grid className="header-month">
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                Lunes
            </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Martes
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Miercoles
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Jueves
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Viernes
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Sabado
                </div>
            </div>  
            </Cell>
            <Cell small={1} large={1}>
            <div class="header-month-card card">
                <div class="card-section">
                    Domingo
                </div>
            </div>  
            </Cell>
          </Grid>
      </div>
    );
  }
}
 
export default HeaderMonth;