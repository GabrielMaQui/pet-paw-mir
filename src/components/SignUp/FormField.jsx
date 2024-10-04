// FormField.jsx
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import  Input  from '../ui/Input';

const FormField = ({ field }) => {
  const { t } = useTranslation();
  const { register, formState: { errors } } = useFormContext();
  const error = errors[field.name];

  switch (field.type) {
    case 'text':
    case 'email':
    case 'password':
    case 'date':
    case 'number':
      return (
        <div className="w-full mb-4">
          <Input
            type={field.type}
            placeholder={t(field.labelKey)}
            {...register(field.name)}
          />
          {error && <p className="error text-custom-50">{error.message}</p>}
        </div>
      );
    case 'radio':
      return (
        <div className="w-full mb-4">
          {field.options.map((option) => (
            <label key={option.value} className="border-2 bg-custom-50 border-custom-250 p-2 w-full mb-2 rounded-xl flex items-center justify-between">
              <span className="text-custom-250">{t(option.labelKey)}</span>
              <input
                type="radio"
                name={field.name}
                value={option.value}
                {...register(field.name)}
              />
            </label>
          ))}
          {error && <p className="error text-custom-50">{error.message}</p>}
        </div>
      );
    default:
      return null;
  }
};

FormField.propTypes = {
  field: PropTypes.object.isRequired,
};

export default FormField;