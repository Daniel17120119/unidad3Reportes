import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Pdf from "react-to-pdf";
import './App.css';

const ref = React.createRef();

function App() {
  return (
    <div className="container">
      <h1>Exportando datos en React</h1>
      <hr/>
      <table class="table" id="table-to-xls">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Alfonso</td>
            <td>Montalvo</td>
            <td>@poncho</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Isaac</td>
            <td>Montalvo</td>
            <td>@isac</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Claudia</td>
            <td>@clau</td>
          </tr>
      </tbody>
    </table>

    <div ref={ref}>
      <h2>Exito!!!</h2>
      <p>Hello World!!!</p>
    </div>
    
    <table>
        <tr>
          <td><h2>Export Excel</h2></td>
          <td><h2>Export PDF</h2></td>
        </tr>
        <tr>
          <td>
          <ReactHTMLTableToExcel 
            id="table-to-xls"
            className="btn btn-success"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"/>  
            </td>
          <td>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Download as Pdf</button>}
            </Pdf>

          </td>
        </tr>

      </table>

    </div>
  );
}

export default App;
