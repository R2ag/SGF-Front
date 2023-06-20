/* eslint-disable react/prop-types */
const FormSelect = ({ field, placeholder, onChange, label, options, value, error }) => {
    return (
      <>
        <div className="form-floating mt-3">
          <select className={`form-select ${error ? "is-invalid" : "is-valid"}`} id={field} name={field} onChange={onChange} value={value}>
            <option value="">{placeholder}</option>          
            {options.map((opt, idx) => (
              <option key={`${field}-${idx}`} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <label htmlFor={field}>{label}</label>
        </div>
        {error && <p className="m-0 small text-danger">{error}</p>}
      </>
    );
  }
  
  export default FormSelect;