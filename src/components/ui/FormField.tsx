import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="block w-full rounded-md border-gray-300 shadow-sm 
                 focus:border-blue-500 focus:ring-blue-500
                 text-base px-4 py-2"
      />
    </div>
  );
};

export default FormField;