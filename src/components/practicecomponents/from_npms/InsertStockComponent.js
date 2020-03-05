//import libraries
import React from 'react'
import { render } from 'react-dom';
import { Formik, Form } from 'formik'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


//Class component
class InsertStockComponent extends React.Component {
  render() {
    return (
      <div id="main-content">
        <Formik
          initialValues={{ startDate: new Date() }}
          validate={(props, a) => console.log('a',props, a)}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}

        >
          {({ isSubmitting, values, setFieldValue }) => (
            <div className="row clearfix">
              <div className="header">
              </div>
              <Form>
                <div className="row ml-4 mr-4">
                  <div className="form-group col-3 mb-2">
                    <DatePicker 
                      selected={values.startDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="startDate"
                      onChange={date => setFieldValue('startDate', date)}
                    />
                  </div>

                </div>
                <div className="row mb-3">
                  <div className="col-5 mb-4"></div>
                  <button type="submit" className="btn btn-lg btn-outline-success mt-4 mb-4" disabled={isSubmitting}>insert item</button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    )
  }
}

export default InsertStockComponent;