import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const AddExpense = () => {
  const { register, handleSubmit, reset } = useForm();
  const [categories, setCategories] = useState([
    { id: 1, name: 'Groc' },
    { id: 2, name: 'Medical' },
    { id: 3, name: 'Travel' },
  ]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('expense') == null) {
      localStorage.setItem('expense', JSON.stringify(expenses));
    }
  }, [expenses]);

  const navigate = useNavigate();

  const submitHandler = (data) => {
    data.id = Math.floor(Math.random()*1000)
    let expFromLocalStorage = localStorage.getItem('expense'); //string...
    console.log(expFromLocalStorage);
    let expObject = JSON.parse(expFromLocalStorage);
    //expObject = {...expObject,id:Math.floor(Math.random()*1000)}
    console.log(expObject);
    expObject.push(data);
    localStorage.setItem('expense', JSON.stringify(expObject));
    navigate('/viewexpense');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add Expense</h1>
      <form onSubmit={handleSubmit(submitHandler)} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Expense Title</label>
          <input
            type="text"
            className="form-control"
            {...register('exptitle')}
            placeholder="Enter expense title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            {...register('amount')}
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Categories</label>
          <select className="form-select" {...register('cat')}>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
