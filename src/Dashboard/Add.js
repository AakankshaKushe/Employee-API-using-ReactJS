import React, { useEffect, useState } from "react"
import { createEmployee, getEmployee, updateEmployees } from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const Add = () => {

  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [salary, setSalary] = useState('')

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    salary: ""
  })

  const { e_id } = useParams();

  const [errors, setErrors] = useState({
    name: "",
    city: "",
    salary: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (e_id) {
      getEmployee(e_id).then((response) => {
        setName(response.data.name);
        setCity(response.data.city);
        setSalary(response.data.salary);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [e_id])

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { name, city, salary }
      console.log(employee)

      if (e_id) {
        updateEmployees(e_id, employee).then((res) => {
          console.log(res.data)
          navigator('/employees')
        })
      } else {
        createEmployee(employee).then((re) => {
          console.log(re.data)
          navigator('/employees')
        }).catch(error => {
          console.error(error);
        })
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors }

    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = 'Name is required';
      valid = false;
    }

    if (city.trim()) {
      errorsCopy.city = '';
    } else {
      errorsCopy.city = 'City is required';
      valid = false;
    }

    if (salary.trim()) {
      errorsCopy.salary = '';
    } else {
      errorsCopy.salary = 'Salary is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (e_id) {
      return <h1 className="text-center">Update Employee</h1>
    } else {
      return <h1 className="text-center">Add Employee</h1>
    }
  }

  return (
    <>
      <div className="container"><br /><br />
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {pageTitle()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input name="name" type="text" value={name} required
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off" />
                  {errors.name && <div className="invalid-feedback"> {errors.name}</div>}

                  <label className="form-label" htmlFor="city">City</label>
                  <input name="city" type="text" value={city}
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                    onChange={(e) => setCity(e.target.value)}
                    autoComplete="off" />
                  {errors.city && <div className="invalid-feedback"> {errors.city}</div>}

                  <label className="form-label" htmlFor="salary">Salary</label>
                  <input name="salary" type="text" value={salary}
                    className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                    onChange={(e) => setSalary(e.target.value)}
                    autoComplete="off" />
                  {errors.salary && <div className="invalid-feedback"> {errors.salary}</div>}

                  <div style={{ marginTop: '30px' }}>
                    <button className="round-button" onClick={saveOrUpdateEmployee}> Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
};

export default Add;
